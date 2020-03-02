import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import BusinessAvatar from "./Avatar";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { BUSINESS_BASE_URL, HOMEPAGE_URL } from "../../routes/URLMap";
import { removeToken, getBusinessId, removeBusinessId } from "../../utils/auth";

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

export default function SimpleList() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleClick = () => {
		setOpen(!open);
	};
	const businessId = getBusinessId();
	const handleLogOut = () => {
		removeToken();
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
				<List component="nav" aria-label="secondary mailbox folders">
					<ListItemLink
						to={`${BUSINESS_BASE_URL}/${businessId}/browse-order`}
					>
						<Button
							className={classes.tasksButton}
							variant="contained"
							type="button"
							color="secondary"
							to="browse-order"
						>
							Browse Tasks
						</Button>
					</ListItemLink>
					<ListItemLink
						to={`${BUSINESS_BASE_URL}/${businessId}/dashboard`}
					>
						<ListItemText primary="Dashboard" />
					</ListItemLink>
					<ListItemLink
						to={`${BUSINESS_BASE_URL}/${businessId}/profile`}
					>
						<ListItemText primary="Profile" />
					</ListItemLink>
					<ListItemLink
						to={`${BUSINESS_BASE_URL}/${businessId}/order-history`}
					>
						<ListItemText primary="Order Management" />
					</ListItemLink>
					<ListItem button onClick={handleClick}>
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
