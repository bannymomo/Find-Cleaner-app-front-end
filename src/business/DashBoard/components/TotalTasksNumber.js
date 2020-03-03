import React from "react";
import { withRouter } from "react-router";
import { fetchAllNewOrders } from "../../../api/order";
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
			fetchAllNewOrders(null, null)
				.then(orders => {
					const totalTasksNumber = orders.orders.length;
					this.setState({ totalTasksNumber, isLoading: false });
				})
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	render() {
		return this.state.error ? (
			<div className="card__number--top-right">error</div>
		) : this.state.isLoading ? (
			<div className="card__number-container--top-right">
				<CircularProgress disableShrink size={30} color="inherit" />
			</div>
		) : (
			<p className="card__number--top-right">
				{this.state.totalTasksNumber}
			</p>
		);
	}
}

export default withRouter(TotalTasksNumber);
