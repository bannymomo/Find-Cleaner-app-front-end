import React from "react";
import { withRouter } from "react-router";
import { fetchHisOrders } from "../../../api/client";
import CircularProgress from "@material-ui/core/CircularProgress";

class TotalNewOrdersNumber extends React.Component {
	state = {
		totalNewOrderNumbers: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const clientId = this.props.match.params.clientId;
		this.getTotalNewOrdersNumber(clientId);
	}

	getTotalNewOrdersNumber = clientId => {
		this.setState({ isLoading: true }, () => {
			fetchHisOrders(clientId, null, null, "new")
				.then(client => {
					const totalNewOrdersNumber = client.orders.length;
					this.setState({ totalNewOrdersNumber, isLoading: false });
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
				{this.state.totalNewOrdersNumber}
			</p>
		);
	}
}

export default withRouter(TotalNewOrdersNumber);
