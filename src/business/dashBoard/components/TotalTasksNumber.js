import React from "react";
import { withRouter } from "react-router";
import { fetchHisOrders } from "../../../api/business";
import CircularProgress from "@material-ui/core/CircularProgress";

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
			const businessId = this.props.match.params.businessId;
			fetchHisOrders(businessId, null, null, null)
				.then(orders => {
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
