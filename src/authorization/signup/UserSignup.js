import React, { Component, Fragment } from "react";
import {
	Button,
	Grid,
	TextField,
	Container,
	CssBaseline,
	withStyles,
	Box,
	createMuiTheme,
	ThemeProvider,
	LinearProgress
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { signup as signupFn } from "../../api/auth";
import { setToken } from "../../utils/auth";
import ClientSignup from "./clients/ClientSignup";
import BusinessSignup from "./business/BusinessSignup";
import Background from "../../assets/images/auth-background.png";
import logo from "../../assets/images/logo.png";
import brandName from "../../assets/images/brandname.png";
import MainNavigation from "../../navigation/MainNavigation";
import { SIGNUP_URL } from "../../routes/URLMap";
import "./style/signup.scss";
import { Link } from "react-router-dom";

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

const styles = theme => ({
	container: {
		paddingTop: "15vh",
		height: "100vh"
	},
	backGround: {
		backgroundImage: `url(${Background})`,
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
		role: "client",
		error: null,
		isLoading: false
	};
	handleBusinessClick = () => {
		const role = "business";
		this.setState({ role });
	};

	postUserInfo = () => {
		const userInfo = {
			username: this.state.username,
			password: this.state.password,
			role: this.state.role
		};

		this.setState({ isLoading: true }, () => {
			signupFn(userInfo)
				.then(data => {
					this.setState({ basicInfo: true, isLoading: false }, () => {
						setToken(data.token);
						this.setState({
							history: this.props.history,
							basicInfo: true
						});
					});
				})
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	render() {
		const { classes } = this.props;

		return !this.state.basicInfo ? (
			<Fragment>
				<MainNavigation />
				<div className={classes.backGround}>
					<ThemeProvider theme={theme}>
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
									<form className={classes.form} noValidate>
										<label>Sign up</label>
										<Grid
											container
											spacing={2}
											className={classes.grid}
										>
											<Grid item xs={12}>
												<TextField
													variant="outlined"
													required
													fullWidth
													label="User Name"
													value={this.state.username}
													onChange={event =>
														this.setState({
															username:
																event.target
																	.value
														})
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													variant="outlined"
													required
													fullWidth
													label="Email Address"
													value={this.state.email}
													onChange={event =>
														this.setState({
															email:
																event.target
																	.value
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
															password:
																event.target
																	.value
														})
													}
												/>
											</Grid>
										</Grid>
										{this.state.isLoading ? (
											<LinearProgress
												className={classes.loading}
											/>
										) : (
											<Button
												onClick={() =>
													this.postUserInfo()
												}
												variant="contained"
												fullWidth
												color="primary"
												className={classes.submit}
											>
												Continue
											</Button>
										)}
										<Button
											style={{ marginBottom: 10 + "px" }}
											variant="contained"
											fullWidth
											className={classes.button}
											component={Link}
											to={{
												pathname: `${SIGNUP_URL}/user/business`
											}}
											onClick={this.handleBusinessClick}
										>
											I'm a business owner
										</Button>
										{!!this.state.error && (
											<Alert severity="error">
												User already exits~
											</Alert>
										)}
									</form>
								</div>
							</Box>
						</Container>
					</ThemeProvider>
				</div>
			</Fragment>
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
