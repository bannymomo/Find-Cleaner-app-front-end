import React from "react";
import { withRouter } from "react-router";
import { fetchClientById } from "../../../api/client";
import CircularProgress from "@material-ui/core/CircularProgress";

class FavoriteCleanerNumber extends React.Component {
	state = {
		FavoriteCleanerNumber: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const clientId = this.props.match.params.clientId;
		this.getFavoriteCleanerNumber(clientId);
	}

	getFavoriteCleanerNumber = clientId => {
		this.setState({ isLoading: true }, () => {
			fetchClientById(clientId)
				.then(client => {
					const totalOrders = client.orders;
					const haveBusiness = totalOrders.filter(order => {
						return order.business;
					});
					console.log(haveBusiness);
					const FavoriteCleanerNumber = haveBusiness.length;
					this.setState({ FavoriteCleanerNumber, isLoading: false });
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
				{this.state.FavoriteCleanerNumber}
			</p>
		);
	}
}

export default withRouter(FavoriteCleanerNumber);
