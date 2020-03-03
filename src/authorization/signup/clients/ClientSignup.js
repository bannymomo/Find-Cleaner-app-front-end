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
import Background from "../../../assets/images/auth-background.png";
import { CLIENT_BASE_URL } from "../../../routes/URLMap";
import logo from "../../../assets/images/logo.png";
import brandName from "../../../assets/images/brandname.png";
import "../style/signup.scss";
import MainNavigation from "../../../navigation/MainNavigation";
import { createClient } from "../../../api/client";
import {
	setClientId,
	removeBusinessId,
	removeClientId
} from "../../../utils/auth";

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
		if (this.state.firstName.length < 2 && this.state.lastName.length < 2) {
			this.setState({ invalidName: true });
			return;
		}
		const clientInfo = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			gender: this.state.gender,
			email: this.props.email,
			postcode: this.state.postcode
		};
		this.setState({ isLoading: true }, () => {
			createClient(clientInfo).then(data => {
				this.setState({ isLoading: false }, () => {
					removeClientId();
					removeBusinessId();
					const clientId = data._id;
					setClientId(clientId);
					const redirectTo = `${CLIENT_BASE_URL}/${clientId}`;
					this.props.history.replace(redirectTo);
				});
			});
		});
	};

	render() {
		const { classes } = this.props;

		return (
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
										<label>More about you~</label>
										<Grid
											container
											spacing={2}
											className={classes.grid}
										>
											<Grid item xs={12} sm={6}>
												<TextField
													variant="outlined"
													required
													fullWidth
													label="First Name"
													value={this.state.firstName}
													onChange={event =>
														this.setState({
															firstName:
																event.target
																	.value
														})
													}
												/>
											</Grid>
											<Grid item xs={12} sm={6}>
												<TextField
													variant="outlined"
													required
													fullWidth
													label="Last Name"
													value={this.state.lastName}
													onChange={event =>
														this.setState({
															lastName:
																event.target
																	.value
														})
													}
												/>
											</Grid>
											{this.state.invalidName ? (
												<Alert severity="error">
													The length must longer than
													3
												</Alert>
											) : null}
											<Grid item xs={12}>
												<TextField
													variant="outlined"
													required
													fullWidth
													label="Gender"
													value={this.state.gender}
													onChange={event =>
														this.setState({
															gender:
																event.target
																	.value
														})
													}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													color="primary"
													variant="outlined"
													required
													fullWidth
													label="postcode"
													value={this.state.postcode}
													onChange={event =>
														this.setState({
															postcode:
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
												variant="contained"
												fullWidth
												color="primary"
												className={classes.submit}
												onClick={this.postClient}
											>
												Sign up
											</Button>
										)}
										{!!this.state.error && (
											<Alert severity="error">
												Account not exits or{" "}
											</Alert>
										)}
									</form>
								</div>
							</Box>
						</Container>
					</ThemeProvider>
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(ClientSignup);
