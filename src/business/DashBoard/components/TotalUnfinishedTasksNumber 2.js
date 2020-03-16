import React from "react";
import { withRouter } from "react-router";
import { fetchHisOrders } from "../../../api/business";
import CircularProgress from "@material-ui/core/CircularProgress";

class TotalUnfinishedTasksNumber extends React.Component {
	state = {
		totalUnfinishedTasksNumber: 0,
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const businessId = this.props.match.params.businessId;
		this.getTotalUnfinishedTasksNumber(businessId);
	}

	getTotalUnfinishedTasksNumber = businessId => {
		this.setState({ isLoading: true }, () => {
			fetchHisOrders(businessId, null, null, "accepted")
				.then(business => {
					const totalUnfinishedTasksNumber = business.orders.length;
					this.setState({
						totalUnfinishedTasksNumber,
						isLoading: false
					});
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
					{this.state.totalUnfinishedTasksNumber}
				</p>
			);
		}
	}
}

export default withRouter(TotalUnfinishedTasksNumber);
