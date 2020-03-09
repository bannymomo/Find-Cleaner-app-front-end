import React, { Component, Fragment } from "react";
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
import { BUSINESS_BASE_URL } from "../../../routes/URLMap";
import { createBusiness } from "../../../api/business";
import logo from "../../../assets/images/logo.png";
import brandName from "../../../assets/images/brandname.png";
import "../style/signup.scss";
import MainNavigation from "../../../navigation/MainNavigation";
import {
	setBusinessId,
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
		const businessInfo = {
			businessName: this.state.businessName,
			address: this.state.address,
			telephoneNumber: this.state.telephoneNumber,
			email: this.props.email,
			postcode: this.state.postcode,
			ABNNumber: this.state.ABNNumber
		};
		this.setState({ isLoading: true }, () => {
			createBusiness(businessInfo)
				.then(data => {
					this.setState({ isLoading: false }, () => {
						removeClientId();
						removeBusinessId();
						const businessId = data._id;
						setBusinessId(businessId);
						const redirectTo = `${BUSINESS_BASE_URL}/${businessId}`;
						this.props.history.replace(redirectTo);
					});
				})
				.catch(error => {
					this.setState({ error, isLoading: false });
				});
		});
	};

	renderButton = classes => {
		if (this.state.isLoading) {
			return <LinearProgress className={classes.loading} />;
		} else {
			return (
				<Button
					variant="contained"
					fullWidth
					color="primary"
					className={classes.submit}
					onClick={this.postBusiness}
				>
					Sign up
				</Button>
			);
		}
	};

	renderForm = classes => {
		return (
			<form className={classes.form} noValidate>
				<label>More about you~</label>
				<Grid container spacing={2} className={classes.grid}>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							label="Business Name"
							value={this.state.businessName}
							onChange={event =>
								this.setState({
									businessName: event.target.value
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							label="Address"
							value={this.state.address}
							onChange={event =>
								this.setState({
									address: event.target.value
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
									postcode: event.target.value
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							label="Telephone Number"
							value={this.state.telephoneNumber}
							onChange={event =>
								this.setState({
									telephoneNumber: event.target.value
								})
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							label="ABN Number"
							value={this.state.ABNNumber}
							onChange={event =>
								this.setState({
									ABNNumber: event.target.value
								})
							}
						/>
					</Grid>
				</Grid>
				{this.renderButton(classes)}

				{!!this.state.error && (
					<Alert severity="error">Illegal input data </Alert>
				)}
			</form>
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
