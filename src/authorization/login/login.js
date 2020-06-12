import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
	Button,
	FormControlLabel,
	Checkbox,
	LinearProgress
} from "@material-ui/core";
import { Container, Box, CssBaseline, withStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import logo from "../../assets/images/logo.png";
import brandName from "../../assets/images/brandname.png";
import "./style/style.scss";
import {
	CLIENT_BASE_URL,
	BUSINESS_BASE_URL,
	SIGNUP_URL
} from "../../routes/URLMap";
import {
	setToken,
	getTokenRole,
	setClientId,
	setBusinessId,
	removeClientId,
	removeBusinessId
} from "../../utils/auth";
import { login as loginFn } from "../../api/auth";
import MainNavigation from "../../navigation/MainNavigation";
import styles from "./style/Style";
import { CLIENT_ROLE, BUSINESS_ROLE, POST_ORDER_AT_HOMEPAGE } from "../../utils/variables";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const FACEBOOK_ID = process.env.REACT_APP_FACEBOOK_ID;
const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;

class Login extends React.Component {
	state = {
		username: "",
		password: "",
		error: null,
		isLoading: false
	};

	loginInitialSetup = data => {
		setToken(data.token);
		removeClientId();
		removeBusinessId();
	};

	clientLogin = data => {
		setClientId(data.clientId);
		const locationState = this.props.location.state;
		const redirectTo = localStorage.getItem(POST_ORDER_AT_HOMEPAGE)
			? `${CLIENT_BASE_URL}/${data.clientId}`
			: (locationState && locationState.from) ||
			  `${CLIENT_BASE_URL}/${data.clientId}`;
		this.props.history.replace(redirectTo);
	};

	businessLogin = data => {
		setBusinessId(data.businessId);
		if (localStorage.getItem(POST_ORDER_AT_HOMEPAGE)) {
			this.props.history.replace(
				`${BUSINESS_BASE_URL}/${data.businessId}/browse-order`
			);
			localStorage.removeItem(POST_ORDER_AT_HOMEPAGE);
			return;
		}
		const locationState = this.props.location.state;
		const redirectTo =
			(locationState && locationState.from) ||
			`${BUSINESS_BASE_URL}/${data.businessId}`;
		this.props.history.replace(redirectTo);
	};

	login = () => {
		const loginInfo = {
			username: this.state.username,
			password: this.state.password
		};

		this.setState({ error: null, isLoading: true }, () => {
			loginFn(loginInfo)
				.then(data => {
					this.setState({ isLoading: false }, () => {
						this.loginInitialSetup(data);
						if (getTokenRole() === CLIENT_ROLE) {
							this.clientLogin(data);
						} else if (getTokenRole() === BUSINESS_ROLE) {
							this.businessLogin(data);
						} else {
							this.props.history.replace(SIGNUP_URL);
						}
					});
				})
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	handleChange = event => {
		const key = event.target.name;
		const value = event.target.value;
		this.setState({ [key]: value });
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
					color={"primary"}
				>
					Sign In
				</Button>
			);
		}
	};

	responseFacebook = response => {
		const username = response.name;
		const password = response.id;
		this.setState({ username, password });
		if (username && password) {
			this.login();
		}
	};

	responseGoogle = response => {
		if (response.Ut) {
			const username = response.Ut.Bd;
			const password = response.Ut.bV;
			this.setState({ username, password });
			if (username && password) {
				this.login();
			}
		}
	};

	renderForm = classes => {
		return (
			<ValidatorForm
				className={classes.form}
				onSubmit={this.login}
			>
				<label>Log in</label>
				<TextValidator
					variant="outlined"
					margin="normal"
					fullWidth
					label="User Name"
					value={this.state.username}
					name="username"
					onChange={this.handleChange}
					validators={["required"]}
					errorMessages={
						["this field is required"]
					}
				/>
				<TextValidator
					variant="outlined"
					margin="normal"
					type="password"
					fullWidth
					label="Password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					validators={["required"]}
					errorMessages={
						["this field is required"]
					}
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				{this.renderButton(classes)}
				<FacebookLogin
					appId={FACEBOOK_ID}
					fields="name,email,picture"
					callback={this.responseFacebook}
					cssClass="login__my-facebook-button-class"
					textButton="LOGIN WITH FACEBOOK"
				/>
				<GoogleLogin
					clientId={GOOGLE_ID}
					buttonText="LOG IN WITH GOOGLE"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
					cookiePolicy={"single_host_origin"}
					className="login__google-button-class"
				/>

				<div className="login__text--bottom">
					Not sign up?
					<Link
						className="login__link--bottom"
						to={{
							pathname: `${SIGNUP_URL}/user/client`,
							role: CLIENT_ROLE
						}}
					>
						Create an account.
					</Link>
				</div>
				{!!this.state.error && (
					<Alert severity="error">
						Login details are incorrect, please try again. <br />
						If you wanna login with Facebook or Google, please sign
						up with them first.
					</Alert>
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
								<div className="login__logo">
									<img
										className="login__logo--pic"
										src={logo}
										alt="logo"
									/>
									<img
										className="login__logo--font"
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

export default withStyles(styles)(Login);
