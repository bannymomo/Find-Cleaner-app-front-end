import React from "./node_modules/react";
import { withRouter } from "./node_modules/react-router";
import { fetchClientById } from "../../../api/client";
import CircularProgress from "./node_modules/@material-ui/core/CircularProgress";

class TotalOrdersNumber extends React.Component {
	state = {
		totalOrderNumbers: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const clientId = this.props.match.params.clientId;
		this.getTotalOrdersNumber(clientId);
	}

	getTotalOrdersNumber = clientId => {
		this.setState({ isLoading: true }, () => {
			fetchClientById(clientId)
				.then(client => {
					const totalOrdersNumber = client.orders.length;
					this.setState({ totalOrdersNumber, isLoading: false });
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
					{this.state.totalOrdersNumber}
				</p>
			);
		}
	}
}

export default withRouter(TotalOrdersNumber);
