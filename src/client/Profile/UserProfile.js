import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "./components/GridItem";
import GridContainer from "./components/GridContainer";
import CustomInput from "./components/CustomInput";
import Button from "./components/Button";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import "./style/user-profile.scss";

const styles = {
	cardCategoryWhite: {
		color: "rgba(255,255,255,.62)",
		margin: "0",
		fontSize: "14px",
		marginTop: "0",
		marginBottom: "0"
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	}
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
	const classes = useStyles();
	return (
		<div>
			<h3 className="user-profile__header--top">User Profile</h3>
			<div className="user-profile__container--outside">
				<GridContainer>
					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="rose">
								<h4 className={classes.cardTitleWhite}>
									Edit Profile
								</h4>
								<p className={classes.cardCategoryWhite}>
									Complete your profile
								</p>
							</CardHeader>
							<CardBody>
								<GridContainer>
									<GridItem xs={12} sm={12} md={5}>
										<CustomInput
											labelText="Company (disabled)"
											id="company-disabled"
											formControlProps={{
												fullWidth: true
											}}
											inputProps={{
												disabled: true
											}}
										/>
									</GridItem>
									<GridItem xs={12} sm={12} md={3}>
										<CustomInput
											labelText="Username"
											id="username"
											formControlProps={{
												fullWidth: true
											}}
										/>
									</GridItem>
									<GridItem xs={12} sm={12} md={4}>
										<CustomInput
											labelText="Email address"
											id="email-address"
											formControlProps={{
												fullWidth: true
											}}
										/>
									</GridItem>
								</GridContainer>
								<GridContainer>
									<GridItem xs={12} sm={12} md={6}>
										<CustomInput
											labelText="First Name"
											id="first-name"
											formControlProps={{
												fullWidth: true
											}}
										/>
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<CustomInput
											labelText="Last Name"
											id="last-name"
											formControlProps={{
												fullWidth: true
											}}
										/>
									</GridItem>
								</GridContainer>
								<GridContainer>
									<GridItem xs={12} sm={12} md={4}>
										<CustomInput
											labelText="City"
											id="city"
											formControlProps={{
												fullWidth: true
											}}
										/>
									</GridItem>
									<GridItem xs={12} sm={12} md={4}>
										<CustomInput
											labelText="Country"
											id="country"
											formControlProps={{
												fullWidth: true
											}}
										/>
									</GridItem>
									<GridItem xs={12} sm={12} md={4}>
										<CustomInput
											labelText="Postal Code"
											id="postal-code"
											formControlProps={{
												fullWidth: true
											}}
										/>
									</GridItem>
								</GridContainer>
								<GridContainer>
									<GridItem xs={12} sm={12} md={12}>
										<InputLabel
											style={{ color: "#AAAAAA" }}
										>
											About me
										</InputLabel>
										<CustomInput
											labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
											id="about-me"
											formControlProps={{
												fullWidth: true
											}}
											inputProps={{
												multiline: true,
												rows: 5
											}}
										/>
									</GridItem>
								</GridContainer>
							</CardBody>
							<CardFooter>
								<Button color="rose">Update Profile</Button>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
