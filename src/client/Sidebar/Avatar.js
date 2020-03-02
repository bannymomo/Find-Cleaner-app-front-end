import React from "react";
import { withRouter } from "react-router";
import { fetchClientById } from "../../api/client";
import { Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
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
				.catch(error => this.setState({ error }));
		});
	};

	render() {
		const { classes } = this.props;
		return this.state.isLoading ? (
			<div className="client__avatar-progress--container">
				<CircularProgress disableShrink size={140} color="inherit" />
			</div>
		) : (
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

export default withRouter(withStyles(useStyles)(ClientAvatar));
