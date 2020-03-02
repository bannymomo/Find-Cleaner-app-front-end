import React from "react";
import { withRouter } from "react-router";
import { fetchClientById } from "../../../api/client";
import CircularProgress from "@material-ui/core/CircularProgress";

class TotalOrderNumber extends React.Component {
	state = {
		totalOrderNumber: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const clientId = this.props.match.params.clientId;
		this.getTotalOrderNumber(clientId);
	}

	getTotalOrderNumber = clientId => {
		this.setState({ isLoading: true }, () => {
			fetchClientById(clientId)
				.then(client => {
					const totalOrderNumber = client.orders.length;
					this.setState({ totalOrderNumber, isLoading: false });
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
				{this.state.totalOrderNumber}
			</p>
		);
	}
}

export default withRouter(TotalOrderNumber);
