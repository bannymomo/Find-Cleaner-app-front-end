import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
	CLIENT_BASE_URL,
	BUSINESS_BASE_URL,
	SIGNUP_URL,
	SERVICE_URL
} from "../../routes/URLMap";

import { getBusinessId, getClientId, isLoggedIn } from "../../utils/auth";

const useStyles = makeStyles(theme => ({
	supports: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around"
	},

	supportButton: {
		fontSize: "0.9rem",
		display: "block",
		padding: 0,
		borderRadius: 100,
		height: "4rem",
		width: "100%",
		border: "1px solid #3f88de",
		color: "#3f88de",
		textAlign: "center",
		lineHeight: "4rem",
		textTransform: "none",

		[theme.breakpoints.only("sm")]: {
			fontSize: "0.6rem",
			height: "3rem",
			lineHeight: "3rem"
		},
		"&:hover": {
			color: "#fff",
			backgroundColor: "#3f88de"
		}
	},
	margin: {
		marginBottom: theme.spacing(1.5)
	}
}));
export default function SupportList(props) {
	const classes = useStyles();
	const loginClient = getClientId();
	const loginBusiness = getBusinessId();

	const serviceSupports = [
		{ name: "Home Cleaning", link: `${SERVICE_URL}` },
		{ name: "End-of-Lease Cleaning", link: `${SERVICE_URL}` },
		{ name: "Other Cleaning Service", link: `${SERVICE_URL}` }
	];
	const RegisterSupports = [
		{
			name: "Client Sign Up",
			link: `${SIGNUP_URL}/user/client`
		},

		{
			name: "Business Register",
			link: `${SIGNUP_URL}/user/business`
		}
	];

	const mainSupports = [
		{
			name: "Client Dashboard",
			link: `${CLIENT_BASE_URL}/${loginClient}/dashboard`
		},
		{
			name: "Client Account Edit",
			link: `${CLIENT_BASE_URL}/${loginClient}/account`
		},
		{
			name: "Client Change Password",
			link: `${CLIENT_BASE_URL}/${loginClient}/password`
		},
		{
			name: "Client Edit Order",
			link: `${CLIENT_BASE_URL}/${loginClient}/order-history`
		},
		{
			name: "Client Notification",
			link: `${CLIENT_BASE_URL}/${loginClient}/notification`
		},
		{
			name: "Client Message",
			link: `${CLIENT_BASE_URL}/${loginClient}/message`
		}
	];

	const subSupports = [
		{
			name: "Browse All Tasks",
			link: `${BUSINESS_BASE_URL}/${loginBusiness}/browse-order`
		},
		{
			name: "Business Profile",
			link: `${BUSINESS_BASE_URL}/${loginBusiness}/profile`
		},
		{
			name: "Business Order History",
			link: `${BUSINESS_BASE_URL}/${loginBusiness}/order-history`
		},
		{
			name: "Business Dashboard",
			link: `${BUSINESS_BASE_URL}/${loginBusiness}/dashboard`
		},
		{
			name: "Business Account Edit",
			link: `${BUSINESS_BASE_URL}/${loginBusiness}/account`
		},
		{
			name: "Business Change Password",
			link: `${BUSINESS_BASE_URL}/${loginBusiness}/password`
		}
	];

	return (
		<List>
			<ListItem
				alignItems="flex-start"
				className="list-array__container--whole"
			>
				<Grid container spacing={3} className={classes.margin}>
					{serviceSupports.map(support => (
						<Grid
							item
							sm={4}
							xs={12}
							className={classes.supports}
							key={support.name}
						>
							<Button
								component={Link}
								to={support.link}
								className={classes.supportButton}
							>
								{support.name}
							</Button>
						</Grid>
					))}
				</Grid>

				<Grid container spacing={3} className={classes.margin}>
					{mainSupports.map(support => (
						<Grid
							item
							sm={4}
							xs={12}
							className={classes.supports}
							key={support.name}
						>
							{loginClient && isLoggedIn() ? (
								<Button
									component={Link}
									to={support.link}
									className={classes.supportButton}
								>
									{support.name}
								</Button>
							) : (
								<Button
									component={Link}
									to={`${SIGNUP_URL}/user/client`}
									className={classes.supportButton}
								>
									{support.name}
								</Button>
							)}
						</Grid>
					))}
				</Grid>
				<Grid container spacing={3} className={classes.margin}>
					{subSupports.map(support => (
						<Grid
							item
							sm={4}
							xs={12}
							className={classes.supports}
							key={support.name}
						>
							{loginBusiness && isLoggedIn() ? (
								<Button
									component={Link}
									to={support.link}
									className={classes.supportButton}
								>
									{support.name}
								</Button>
							) : (
								<Button
									component={Link}
									to={`${SIGNUP_URL}/user/business`}
									className={classes.supportButton}
								>
									{support.name}
								</Button>
							)}
						</Grid>
					))}
				</Grid>
				<Grid container spacing={3}>
					{RegisterSupports.map(support => (
						<Grid
							item
							sm={6}
							xs={12}
							className={classes.supports}
							key={support.name}
						>
							<Button
								component={Link}
								to={support.link}
								className={classes.supportButton}
							>
								{support.name}
							</Button>
						</Grid>
					))}
				</Grid>
			</ListItem>
		</List>
	);
}
