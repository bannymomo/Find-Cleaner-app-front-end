import React, { Component, Fragment } from "react";
import {
	Button,
	Grid,
	Container,
	CssBaseline,
	withStyles,
	Box,
	LinearProgress
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import { checkUsername } from "../../api/auth";
import ClientSignup from "./clients/ClientSignup";
import BusinessSignup from "./business/BusinessSignup";
import Background from "../../assets/images/auth-background.png";
import logo from "../../assets/images/logo.png";
import brandName from "../../assets/images/brandname.png";
import MainNavigation from "../../navigation/MainNavigation";
import { LOGIN_URL } from "../../routes/URLMap";
import { CLIENT_ROLE, BUSINESS_ROLE } from "../../utils/variables";

import "./style/signup.scss";

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

class User extends Component {
	state = {
		email: "",
		username: "",
		password: "",
		history: "",
		role: "",
		basicInfo: false,
		error: null,
		isLoading: false,
		// isUsernameValid: false,
		// isEmailValid: false,
		// isPasswordValid: false,
	};

	componentDidMount() {
		const pathname = this.props.location.pathname;
		if (pathname.includes(CLIENT_ROLE)) {
			this.setState({ role: CLIENT_ROLE })
		} else {
			this.setState({ role: BUSINESS_ROLE })
		}
	}

	handleContinue = () => {
		this.setState({ isLoading: true, error: null }, () => {
			checkUsername(this.state.username)
				.then(() => 
					this.setState({ isLoading: false, basicInfo: true, history: this.props.history })
				)
				.catch(error => this.setState({ error,  isLoading: false }))
		});
	}

	renderButton = classes => {
		if (this.state.isLoading) {
			return <LinearProgress className={classes.loading} />;
		} else {
			return (
				<Button
					// disabled={
					// 	!this.state.isUsernameValid ||
					// 	!this.state.isEmailValid ||
					// 	!this.state.isPasswordValid
					// }
					type="submit"
					variant="contained"
					fullWidth
					color="primary"
					className={classes.submit}
				>
					Continue
				</Button>
			);
		}
	};

	// validateUsername = (result) => {
	// 	this.setState({ isUsernameValid: result})
	// }
	// validateEmail = (result) => {
	// 	this.setState({ isEmailValid: result})
	// }
	// validatePassword = (result) => {
	// 	this.setState({ isPasswordValid: result})
	// }

	renderForm = classes => {

		return (
			<ValidatorForm
				className={classes.form}
				instantValidate={false}
				onSubmit={this.handleContinue}
            >
				<label className="sign-up__header">
					{this.state.role} Sign up
				</label>
				<Grid container spacing={2} className={classes.grid}>
					<Grid item xs={12}>
						<TextValidator
							variant="outlined"
							fullWidth
							required
							label="User Name"
							value={this.state.username}
							onChange={event =>
								this.setState({
									username: event.target.value
								})
							}
							validators={['required', 'minStringLength: 2']}
							errorMessages={['this field is required', 'username must be at least two characters']}
							// validatorListener={this.validateUsername}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextValidator
							color="primary"
							variant="outlined"
							required
							fullWidth
							label="Email"
							onChange={event =>
								this.setState({
									email: event.target.value
								})
							}
							name="email"
							value={this.state.email}
							validators={['required', 'isEmail']}
							errorMessages={['this field is required', 'email is not valid']}
							// validatorListener={this.validateEmail}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextValidator
							color="primary"
							variant="outlined"
							fullWidth
							required
							label="Password"
							type="password"
							value={this.state.password}
							onChange={event =>
								this.setState({
									password: event.target.value
								})
							}
							validators={['required', 'minStringLength: 2']}
							errorMessages={['this field is required', 'password must be at least two characters']}
							// validatorListener={this.validatePassword}
						/>
					</Grid>
				</Grid>
				{this.renderButton(classes)}
				<div className="signin__text--bottom">
					Already have an account?{" "}
					<Link className="signin__link--bottom" to={LOGIN_URL}>
						Log in.
					</Link>
				</div>
				{!this.state.isLoading && !!this.state.error && (
					<Alert severity="error">User already exits~</Alert>
				)}
            </ValidatorForm>
		);
	};

	render() {
		const { classes } = this.props;
		if (!this.state.basicInfo) {
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

		return this.state.role === CLIENT_ROLE ? (
			<ClientSignup
				email={this.state.email}
				history={this.state.history}
				username={this.state.username}
				password={this.state.password}
				role={this.state.role}
			/>
		) : (
			<BusinessSignup
				email={this.state.email}
				history={this.state.history}
				username={this.state.username}
				password={this.state.password}
				role={this.state.role}
			/>
		);
	}
}

export default withStyles(styles)(User);
