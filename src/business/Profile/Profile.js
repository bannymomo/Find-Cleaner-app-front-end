import React from "react";

import "./style/businessProfile.scss";
import BusinessProfile from "./BusinessProfile";

import { fetchBusinessById } from "../../api/business";
import ErrorMessage from "../../UI/ErrorMessage";
import { CircularProgress } from "@material-ui/core";

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			business: "",
			isLoading: false
		};
	}

	componentDidMount() {
		const businessId = this.props.match.params.businessId;
		this.loadBusiness(businessId);
	}

	loadBusiness = businessId => {
		this.setState({ isLoading: true }, () => {
			fetchBusinessById(businessId)
				.then(business =>
					this.setState({
						business,
						isLoading: false
					})
				)
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className="business-profile__header">Business Profile</div>
				{this.state.isLoading || this.state.isUpdating ? (
					<div className="business-profile__progress--container">
						<CircularProgress color="secondary" size={200} />
					</div>
				) : !!this.state.error ? (
					<ErrorMessage error={this.state.error} />
				) : (
					<div className="business-profile__container">
						<BusinessProfile business={this.state.business} />
					</div>
				)}
			</React.Fragment>
		);
	}
}
export default Profile;
