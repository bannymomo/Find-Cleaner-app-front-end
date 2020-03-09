import React from "react";
import { withRouter } from "react-router";
import { fetchBusinessById } from "../../api/business";
import { Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorMessage from "../../UI/ErrorMessage";
const useStyles = theme => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3)
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		margin: `${30}px auto`
	}
});

class BusinessAvatar extends React.Component {
	state = {
		businessName: "",
		avatar: "",
		isLoading: false,
		error: null
	};

	componentDidMount() {
		const businessId = this.props.match.params.businessId;
		this.getBusinessbyId(businessId);
	}

	getBusinessbyId = businessId => {
		this.setState({ isLoading: true }, () => {
			fetchBusinessById(businessId)
				.then(business =>
					this.setState({
						businessName: business.businessName,
						avatar: business.photo,
						isLoading: false
					})
				)
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	render() {
		const { classes } = this.props;
		if (this.state.error) {
			return <ErrorMessage error={this.state.error} />;
		} else if (this.state.isLoading) {
			return (
				<div className="client__avatar-progress--container">
					<CircularProgress
						disableShrink
						size={140}
						color="inherit"
					/>
				</div>
			);
		} else {
			return (
				<div className={"client__avatar-container--left-top"}>
					<Avatar
						className={classes.large}
						src={this.state.avatar}
						alt={this.state.businessName}
					/>
					<p>{this.state.businessName}</p>
				</div>
			);
		}
	}
}

export default withRouter(withStyles(useStyles)(BusinessAvatar));
