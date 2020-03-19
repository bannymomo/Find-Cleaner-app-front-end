import React from "react";
import { withRouter } from "react-router";
import { fetchAllNewOrders } from "../../../api/order";
import CircularProgress from "@material-ui/core/CircularProgress";
import ControlledOpenSelect from "../../browseOrder/components/DatePosted";

class TotalTasksNumber extends React.Component {
	state = {
		totalTasksNumber: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		this.getTotalTasksNumber();
	}

	getTotalTasksNumber = () => {
		this.setState({ isLoading: true }, () => {
			fetchAllNewOrders(1, 1000)
				.then(orders => {
					console.log(orders);
					const totalTasksNumber = orders.orders.length;
					this.setState({ totalTasksNumber, isLoading: false });
				})
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	render() {
		if (this.state.error) {
			return <div className="card__number--top-right">error</div>;
		} else if (this.state.isLoading) {
			return (
				<div className="card__number-container--top-right">
					<CircularProgress disableShrink size={30} color="inherit" />
				</div>
			);
		} else {
			return (
				<p className="card__number--top-right">
					{this.state.totalTasksNumber}
				</p>
			);
		}
	}
}

export default withRouter(TotalTasksNumber);
