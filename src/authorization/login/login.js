import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	LinearProgress
} from "@material-ui/core";
import { Container, Box, CssBaseline, withStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
	setClientId,
	setBusinessId,
	getTokenRole
} from "../../utils/auth";
import { login as loginFn } from "../../api/auth";
import MainNavigation from "../../navigation/MainNavigation";

import styles from "./style/Style";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2196f3"
		},
		secondary: {
			main: "#f50057"
		}
	}
});

class Login extends React.Component {
	state = {
		username: "",
		password: "",
		error: null,
		isLoading: false
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
						setToken(data.token);
						if (getTokenRole() === "client") {
							setClientId(data.clientId);
							const locationState = this.props.location.state;
							const redirectTo =
								(locationState && locationState.from) ||
								`${CLIENT_BASE_URL}/${data.clientId}`;
							this.props.history.replace(redirectTo);
						} else if (getTokenRole() === "business") {
							setBusinessId(data.businessId);
							const locationState = this.props.location.state;
							const redirectTo =
								(locationState && locationState.from) ||
								`${BUSINESS_BASE_URL}/${data.businessId}`;
							this.props.history.replace(redirectTo);
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

	handleKeyPress = event => {
		if (event.key === "Enter") {
			if (!this.state.username) {
				alert("Username is empty, please fill your name");
				return;
			}
			if (!this.state.password) {
				alert("Password is empty, please fill your password");
				return;
			}
			this.login();
		}
	};

	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<MainNavigation />
				<ThemeProvider theme={theme}>
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
									<form className={classes.form} noValidate>
										<label>Log in</label>
										<TextField
											onKeyDown={this.handleKeyPress}
											variant="outlined"
											required
											margin="normal"
											fullWidth
											label="User Name"
											value={this.state.username}
											name="username"
											onChange={this.handleChange}
										/>
										<TextField
											onKeyDown={this.handleKeyPress}
											variant="outlined"
											required
											margin="normal"
											type="password"
											fullWidth
											label="Password"
											name="password"
											value={this.state.password}
											onChange={this.handleChange}
										/>
										<FormControlLabel
											control={
												<Checkbox
													value="remember"
													color="primary"
												/>
											}
											label="Remember me"
										/>
										{this.state.isLoading ? (
											<LinearProgress
												className={classes.loading}
											/>
										) : (
											<Button
												onClick={this.login}
												variant="contained"
												fullWidth
												color={"primary"}
											>
												Sign In
											</Button>
										)}
										<div className="login__text--bottom">
											Not sign up?{" "}
											<Link
												className="login__link--bottom"
												to={{
													pathname: `${SIGNUP_URL}/user/client`,
													role: "client"
												}}
											>
												Create an account.
											</Link>{" "}
										</div>
										{!!this.state.error && (
											<Alert severity="error">
												Account not exits or{" "}
											</Alert>
										)}
									</form>
								</div>
							</Box>
						</Container>
					</div>
				</ThemeProvider>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Login);
