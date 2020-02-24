import React, { Component } from "react";
import {
	Button,
	Grid,
	TextField,
	Container,
	CssBaseline,
	Typography,
	withStyles
} from "@material-ui/core";

// import { signup as signupFn } from '../api/auth';
// import { setToken } from '../utils/auth';
import ClientSignup from "./clients/ClientSignup";
import BusinessSignup from "./business/BusinessSignup";

const styles = theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& TextField": {
			backgroundColor: "red"
		}
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
});

class User extends Component {
	state = {
		email: "",
		username: "",
		password: "",
		history: "",
		role: this.props.location.role
	};

	postUserInfo = () => {
		// const userInfo = {
		//   username: this.state.username,
		//   password: this.state.password,
		//   role: this.state.role
		// }
		// console.log(userInfo)
		// signupFn(userInfo)
		//   .then(data => {
		//     this.setState({ basicInfo: true }, () => {
		//       setToken(data.token)
		//       this.setState({ history: this.props.history })
		//     });
		//   })
		this.setState({ basicInfo: true, history: this.props.history });
	};

	render() {
		const { classes } = this.props;

		return !this.state.basicInfo ? (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="h1" variant="h3">
						Sign up
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									variant="filled"
									required
									fullWidth
									label="User Name"
									value={this.state.username}
									onChange={event =>
										this.setState({
											username: event.target.value
										})
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="filled"
									required
									fullWidth
									label="Email Address"
									value={this.state.email}
									onChange={event =>
										this.setState({
											email: event.target.value
										})
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									color="secondary"
									variant="outlined"
									required
									fullWidth
									label="Password"
									type="password"
									value={this.state.password}
									onChange={event =>
										this.setState({
											password: event.target.value
										})
									}
								/>
							</Grid>
						</Grid>
						<Button
							onClick={() => this.postUserInfo()}
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Continue
						</Button>
					</form>
				</div>
			</Container>
		) : this.state.role === "client" ? (
			<ClientSignup
				email={this.state.email}
				history={this.state.history}
			/>
		) : (
			<BusinessSignup
				email={this.state.email}
				history={this.state.history}
			/>
		);
	}
}

export default withStyles(styles)(User);
