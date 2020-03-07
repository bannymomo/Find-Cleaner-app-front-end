import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { CLIENT_BASE_URL } from "../../routes/URLMap";
import { BUSINESS_BASE_URL } from "../../routes/URLMap";
// import { ORDER_BASE_URL } from "../../routes/URLMap";
// import { LOGIN_URL } from "../../routes/URLMap";
import { SIGNUP_URL } from "../../routes/URLMap";
import { SERVICE_URL } from "../../routes/URLMap";
import { getBusinessId, getClientId } from "../../utils/auth";
import { isLoggedIn } from "../../utils/auth";

const useStyles = makeStyles(theme => ({
	supports: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around"
	},

	supportButton: {
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
		"&:hover": {
			color: "#fff",
			backgroundColor: "#3f88de"
		}
	}
}));
export default function SupportList(props) {
	const classes = useStyles();
	const loginClient = getClientId();
	const loginBussiness = getBusinessId();

	const supports = [
		{ name: "Homecleaning", link: `${SERVICE_URL}` },
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
		},
		{
			name: "End-of-lease Cleaning",
			link: `${SERVICE_URL}`
		},

		{ name: "Business Register", link: `${SIGNUP_URL}` },
		{
			name: "Business Browse All Tasks",
			link: `${BUSINESS_BASE_URL}/${loginBussiness}/browse-order`
		},
		{
			name: "Business Profile",
			link: `${BUSINESS_BASE_URL}/${loginBussiness}/profile`
		},
		{
			name: "Business Order History",
			link: `${BUSINESS_BASE_URL}/${loginBussiness}/order-history`
		},
		{
			name: "Business Dashboard",
			link: `${BUSINESS_BASE_URL}/${loginBussiness}/dashboard`
		},
		{
			name: "Business Account Edit",
			link: `${BUSINESS_BASE_URL}/${loginBussiness}/account`
		},
		{
			name: "Business Change Password",
			link: `${BUSINESS_BASE_URL}/${loginBussiness}/password`
		}
	];

	return (
		<List>
			<ListItem
				alignItems="flex-start"
				className="list-array__container--whole"
			>
				<Grid container spacing={3}>
					{supports.map(support => (
						<Grid
							item
							xs={4}
							className={classes.supports}
							key={support.name}
						>
							{loginBussiness && isLoggedIn() ? (
								<Button
									component={Link}
									to={support.link}
									className={classes.supportButton}
								>
									{support.name}
								</Button>
							) : loginClient && isLoggedIn() ? (
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
									to={support.link}
									className={classes.supportButton}
								>
									{support.name}
								</Button>
							)}
						</Grid>
					))}
				</Grid>
			</ListItem>
		</List>
	);
}
