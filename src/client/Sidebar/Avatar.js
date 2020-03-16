import React from "./node_modules/react";
import { withRouter } from "./node_modules/react-router";
import { fetchClientById } from "../../api/client";
import { Avatar } from "./node_modules/@material-ui/core";
import { withStyles } from "./node_modules/@material-ui/core/styles";
import CircularProgress from "./node_modules/@material-ui/core/CircularProgress";
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

class ClientAvatar extends React.Component {
	state = {
		clientName: "",
		avatar: "",
		isLoading: false
	};

	componentDidMount() {
		const clientId = this.props.match.params.clientId;
		this.getClientbyId(clientId);
	}

	getClientbyId = clientId => {
		this.setState({ isLoading: true }, () => {
			fetchClientById(clientId)
				.then(client =>
					this.setState({
						clientName: `${client.firstName} ${client.lastName}`,
						avatar: client.photo,
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
						alt={this.state.clientName}
					/>
					<p>{this.state.clientName}</p>
				</div>
			);
		}
	}
}

export default withRouter(withStyles(useStyles)(ClientAvatar));
