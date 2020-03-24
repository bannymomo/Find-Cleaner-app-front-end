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
import Background from "../../../assets/images/auth-background.png";
import { BUSINESS_BASE_URL } from "../../../routes/URLMap";
import { createBusiness } from "../../../api/business";
import { signup as signupFn } from "../../../api/auth";
import { setToken } from "../../../utils/auth";
import logo from "../../../assets/images/logo.png";
import brandName from "../../../assets/images/brandname.png";
import "../style/signup.scss";
import MainNavigation from "../../../navigation/MainNavigation";
import {
	setBusinessId,
	removeBusinessId,
	removeClientId
} from "../../../utils/auth";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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

class BusinessSignup extends Component {
	state = {
		businessName: "",
		address: "",
		postcode: "",
		telephoneNumber: "",
		ABNNumber: "",
		error: null,
		isLoading: false
	};

	postBusiness = () => {
		const userInfo = {
			username: this.props.username,
			password: this.props.password,
			role: this.props.role
		};

		const businessInfo = {
			businessName: this.state.businessName,
			address: this.state.address,
			telephoneNumber: this.state.telephoneNumber,
			email: this.props.email,
			postcode: this.state.postcode,
			ABNNumber: this.state.ABNNumber
		};

		this.setState({ isLoading: true }, () => {
			signupFn(userInfo)
				.then(data => setToken(data.token))
				.then(() => {
					createBusiness(businessInfo).then(data => {
						this.setState({ isLoading: false }, () => {
							removeClientId();
							removeBusinessId();
							const businessId = data._id;
							setBusinessId(businessId);
							const redirectTo = `${BUSINESS_BASE_URL}/${businessId}`;
							this.props.history.replace(redirectTo);
						});
					});
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
				onSubmit={this.postBusiness}
			>
				<label>More about you~</label>
				<Grid container spacing={2} className={classes.grid}>
					<Grid item xs={12}>
						<TextValidator
							variant="outlined"
							fullWidth
							label="Business Name"
							value={this.state.businessName}
							onChange={event =>
								this.setState({
									businessName: event.target.value
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
						<TextValidator
							variant="outlined"
							fullWidth
							label="Address"
							value={this.state.address}
							onChange={event =>
								this.setState({
									address: event.target.value
								})
							}
							validators={["required"]}
							errorMessages={["this field is required"]}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextValidator
							color="primary"
							variant="outlined"
							fullWidth
							label="Postcode"
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
					<Grid item xs={12}>
						<TextValidator
							variant="outlined"
							fullWidth
							label="Telephone Number"
							value={this.state.telephoneNumber}
							onChange={event =>
								this.setState({
									telephoneNumber: event.target.value
								})
							}
							validators={["required", "matchRegexp:^[0-9]{10}$"]}
							errorMessages={[
								"this field is required",
								"phone number is not valid"
							]}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextValidator
							variant="outlined"
							fullWidth
							label="ABN Number"
							value={this.state.ABNNumber}
							onChange={event =>
								this.setState({
									ABNNumber: event.target.value
								})
							}
							validators={["required", "matchRegexp:^[0-9]{11}$"]}
							errorMessages={[
								"this field is required",
								"ABN is not valid"
							]}
						/>
					</Grid>
				</Grid>
				{this.renderButton(classes)}

				{!!this.state.error && (
					<Alert severity="error">{this.state.error} </Alert>
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

export default withStyles(styles)(BusinessSignup);
