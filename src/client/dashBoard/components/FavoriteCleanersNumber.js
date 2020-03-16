import React from "react";
import { withRouter } from "react-router";
import { fetchClientById } from "../../../api/client";
import CircularProgress from "@material-ui/core/CircularProgress";

class FavoriteCleanersNumber extends React.Component {
	state = {
		FavoriteCleanersNumber: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const clientId = this.props.match.params.clientId;
		this.getFavoriteCleanersNumber(clientId);
	}

	getFavoriteCleanersNumber = clientId => {
		this.setState({ isLoading: true }, () => {
			fetchClientById(clientId)
				.then(client => {
					const totalOrders = client.orders;
					const haveBusinessOrders = totalOrders.filter(order => {
						return order.business;
					});
					const businessArray = haveBusinessOrders.map(order => {
						return order.business;
					});
					const removeDuplicateItems = arr => [...new Set(arr)];

					const FavoriteCleanersNumber = removeDuplicateItems(
						businessArray
					).length;
					this.setState({ FavoriteCleanersNumber, isLoading: false });
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
					{this.state.FavoriteCleanersNumber}
				</p>
			);
		}
	}
}

export default withRouter(FavoriteCleanersNumber);
