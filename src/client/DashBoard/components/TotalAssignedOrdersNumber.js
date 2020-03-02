import React from "react";
import { withRouter } from "react-router";
import { fetchHisOrders } from "../../../api/client";
import CircularProgress from "@material-ui/core/CircularProgress";

class TotalAssignedOrdersNumber extends React.Component {
	state = {
		totalAssignedOrdersNumber: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const clientId = this.props.match.params.clientId;
		this.getAssignedOrdersNumber(clientId);
	}

	getAssignedOrdersNumber = clientId => {
		this.setState({ isLoading: true }, () => {
			fetchHisOrders(clientId, null, null, "accepted")
				.then(client => {
					const totalAssignedOrdersNumber = client.orders.length;
					this.setState({
						totalAssignedOrdersNumber,
						isLoading: false
					});
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
				{this.state.totalAssignedOrdersNumber}
			</p>
		);
	}
}

export default withRouter(TotalAssignedOrdersNumber);
