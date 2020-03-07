import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import ClientAvatar from "./Avatar";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { CLIENT_BASE_URL, HOMEPAGE_URL } from "../../routes/URLMap";
import PostOrderBtn from "../../components/order/PostOrderBtn";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import SettingsApplicationsRoundedIcon from "@material-ui/icons/SettingsApplicationsRounded";
import {
	removeToken,
	removeBusinessId,
	removeClientId
} from "../../utils/auth";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	divider: {
		marginBottom: theme.spacing(3)
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

	const clientId = props.match.params.clientId;
	const POST_ORDER_AT_HOMEPAGE = "postOrderAtHomepage";
	const handleLogOut = () => {
		removeToken();
		removeClientId();
		removeBusinessId();
		localStorage.removeItem(POST_ORDER_AT_HOMEPAGE);
	};

	return (
		<div>
			<ClientAvatar />
			<div className={classes.root}>
				<Divider className={classes.divider} />
				<div className="clinet__button--container">
					<PostOrderBtn buttonInNav={false} />
				</div>
				<List component="nav" aria-label="secondary mailbox folders">
					<ListItemLink
						to={`${CLIENT_BASE_URL}/${clientId}/dashboard`}
					>
						<ListItemIcon>
							<DashboardRoundedIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItemLink>
					<ListItemLink
						to={`${CLIENT_BASE_URL}/${clientId}/order-history`}
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
									to={`${CLIENT_BASE_URL}/${clientId}/account`}
								>
									Account
								</ListItemLink>
							</ListItem>
							<ListItem className={classes.nested}>
								<ListItemLink
									to={`${CLIENT_BASE_URL}/${clientId}/password`}
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
