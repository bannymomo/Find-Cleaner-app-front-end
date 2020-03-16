import React, { Component, Fragment } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
	Button,
	Grid,
	TextField,
	Container,
	CssBaseline,
	withStyles,
	Box,
	LinearProgress
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Background from "../../../assets/images/auth-background.png";
import { CLIENT_BASE_URL } from "../../../routes/URLMap";
import logo from "../../../assets/images/logo.png";
import brandName from "../../../assets/images/brandname.png";
import "../style/signup.scss";
import MainNavigation from "../../../navigation/MainNavigation";
import { createClient } from "../../../api/client";

import { signup as signupFn } from "../../../api/auth";
import { setToken } from "../../../utils/auth";

import {
	setClientId,
	removeBusinessId,
	removeClientId
} from "../../../utils/auth";

const styles = theme => ({
	container: {
		paddingTop: "15vh",
		height: "100vh"
	},
	backGround: {
		backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${Background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100vh"
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#FBFCFF",
		borderRadius: "10px"
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(2)
	},
	submit: {
		margin: theme.spacing(2, 0)
	},
	grid: {
		marginTop: theme.spacing(1)
	},
	loading: {
		margin: theme.spacing(2, 0)
	}
});

class ClientSignup extends Component {
	state = {
		firstName: "",
		lastName: "",
		postcode: "",
		gender: "",
		invalidName: false,
		error: null,
		isLoading: false
	};

	postClient = () => {
		const userInfo = {
			username: this.props.username,
			password: this.props.password,
			role: this.props.role
		};

		const clientInfo = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			gender: this.state.gender,
			email: this.props.email,
			postcode: this.state.postcode
		};

		this.setState({ isLoading: true }, () => {
			signupFn(userInfo)
				.then(data => setToken(data.token))
				.then(() => {
					createClient(clientInfo)
						.then(data => {
							this.setState({ isLoading: false }, () => {
								removeClientId();
								removeBusinessId();
								const clientId = data._id;
								setClientId(clientId);
								const redirectTo = `${CLIENT_BASE_URL}/${clientId}`;
								this.props.history.replace(redirectTo);
							});
						})
<<<<<<< HEAD
						.catch(error =>
							this.setState({ error, isLoading: false })
						);
=======
>>>>>>> 1a5a5ea6e3d45a903e106ede636bbb99f08d8002
				})
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	renderButton = classes => {
		if (this.state.isLoading) {
			return <LinearProgress className={classes.loading} />;
		} else {
			return (
				<Button
					type="submit"
					variant="contained"
					fullWidth
					color="primary"
					className={classes.submit}
				>
					Sign up
				</Button>
			);
		}
	};
	renderForm = classes => {
		return (
			<ValidatorForm
				className={classes.form}
				instantValidate={false}
				onSubmit={this.postClient}
			>
				<label>More about you~</label>
				<Grid container spacing={2} className={classes.grid}>
					<Grid item xs={12} sm={6}>
						<TextValidator
							variant="outlined"
							required
							fullWidth
							label="First Name"
							value={this.state.firstName}
							onChange={event =>
								this.setState({
									firstName: event.target.value
								})
							}
							validators={["required", "minStringLength:2"]}
							errorMessages={[
								"this field is required",
								"The length must longer than 2"
							]}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextValidator
							variant="outlined"
							required
							fullWidth
							label="Last Name"
							value={this.state.lastName}
							onChange={event =>
								this.setState({
									lastName: event.target.value
								})
							}
							validators={["required", "minStringLength:2"]}
							errorMessages={[
								"this field is required",
								"The length must longer than 2"
							]}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							label="Gender"
							value={this.state.gender}
							onChange={event =>
								this.setState({
									gender: event.target.value
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextValidator
							color="primary"
							variant="outlined"
							required
							fullWidth
							label="postcode"
							value={this.state.postcode}
							onChange={event =>
								this.setState({
									postcode: event.target.value
								})
							}
							validators={["required", "matchRegexp:^[0-9]{4}$"]}
							errorMessages={[
								"this field is required",
								"postcode is not valid"
							]}
						/>
					</Grid>
				</Grid>
				{this.renderButton(classes)}
				{!!this.state.error && (
					<Alert severity="error">{this.state.error}</Alert>
				)}
			</ValidatorForm>
		);
	};

	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<MainNavigation />
				<div className={classes.backGround}>
					<Container
						component="main"
						maxWidth="xs"
						className={classes.container}
					>
						<CssBaseline />

						<Box className={classes.box}>
							<div className={classes.paper}>
								<div className="signUp__logo">
									<img
										className="signUp__logo--pic"
										src={logo}
										alt="logo"
									/>
									<img
										className="signUp__logo--font"
										src={brandName}
										alt="brandname"
									/>
								</div>
								{this.renderForm(classes)}
							</div>
						</Box>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(ClientSignup);
