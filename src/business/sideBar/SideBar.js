import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import BusinessAvatar from "./Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import SettingsApplicationsRoundedIcon from "@material-ui/icons/SettingsApplicationsRounded";
import { BUSINESS_BASE_URL, HOMEPAGE_URL } from "../../routes/URLMap";
import {
	removeToken,
	removeClientId,
	removeBusinessId
} from "../../utils/auth";
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	tasksButton: {
		margin: "0.3rem 0.5rem",
		padding: "0.7rem 1.6rem"
	}
}));

function ListItemLink(props) {
	return <ListItem button component={Link} {...props} />;
}

function SimpleList(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleClick = () => {
		setOpen(!open);
	};
	const businessId = props.match.params.businessId;
	const handleLogOut = () => {
		removeToken();
		removeClientId();
		removeBusinessId();
	};

	return (
		<div>
			<div className="client__avatar-container--left-top">
				<BusinessAvatar />
				<p>business name</p>
			</div>
			<div className={classes.root}>
				<Divider />
				<div className="business__button-container">
					<Button
						variant="contained"
						type="button"
						color="primary"
						component={Link}
						to={`${BUSINESS_BASE_URL}/${businessId}/browse-order`}
					>
						Browse all Tasks
					</Button>
				</div>
				<List component="nav" aria-label="secondary mailbox folders">
					<ListItemLink
						to={`${BUSINESS_BASE_URL}/${businessId}/dashboard`}
					>
						<ListItemIcon>
							<DashboardRoundedIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItemLink>
					<ListItemLink
						to={`${BUSINESS_BASE_URL}/${businessId}/profile`}
					>
						<ListItemIcon>
							<AccountBoxRoundedIcon />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItemLink>
					<ListItemLink
						to={`${BUSINESS_BASE_URL}/${businessId}/order-history`}
					>
						<ListItemIcon>
							<HistoryRoundedIcon />
						</ListItemIcon>
						<ListItemText primary="Order Management" />
					</ListItemLink>
					<ListItem button onClick={handleClick}>
						<ListItemIcon>
							<SettingsApplicationsRoundedIcon />
						</ListItemIcon>
						<ListItemText primary="Setting" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div">
							<ListItem className={classes.nested}>
								<ListItemLink
									to={`${BUSINESS_BASE_URL}/${businessId}/account`}
								>
									Account
								</ListItemLink>
							</ListItem>
							<ListItem className={classes.nested}>
								<ListItemLink
									to={`${BUSINESS_BASE_URL}/${businessId}/password`}
								>
									Password
								</ListItemLink>
							</ListItem>
							<ListItem className={classes.nested}>
								<ListItemLink
									to={`${HOMEPAGE_URL}`}
									onClick={handleLogOut}
								>
									LogOut
								</ListItemLink>
							</ListItem>
						</List>
					</Collapse>
				</List>
			</div>
		</div>
	);
}

export default withRouter(SimpleList);
