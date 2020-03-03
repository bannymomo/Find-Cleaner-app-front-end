import React from "react";
import { withRouter } from "react-router";
import { fetchBusinessById } from "../../../api/business";
import CircularProgress from "@material-ui/core/CircularProgress";

class FollowersNumber extends React.Component {
	state = {
		FollowersNumber: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const businessId = this.props.match.params.businessId;
		this.getFollowersNumber(businessId);
	}

	getFollowersNumber = businessId => {
		this.setState({ isLoading: true }, () => {
			fetchBusinessById(businessId)
				.then(business => {
					const totalOrders = business.orders;
					const clientArray = totalOrders.map(order => {
						return order.client;
					});
					const removeDuplicateItems = arr => [...new Set(arr)];

					const FollowersNumber = removeDuplicateItems(clientArray)
						.length;
					this.setState({ FollowersNumber, isLoading: false });
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
				{this.state.FollowersNumber}
			</p>
		);
	}
}

export default withRouter(FollowersNumber);
