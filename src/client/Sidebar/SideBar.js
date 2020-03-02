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
import { CLIENT_BASE_URL, HOMEPAGE_URL } from "../../routes/URLMap";
import TakeOrder from "../Take-Order/TakeOrder";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import SettingsApplicationsRoundedIcon from "@material-ui/icons/SettingsApplicationsRounded";
import { removeToken, removeClientId } from "../../utils/auth";
import { getClientId } from "../../utils/auth";
const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	}
}));

const useStylesModal = makeStyles(theme => ({
	openButton: {
		margin: "1.8rem 2rem 0 ",
		padding: "0.7rem 2rem"
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	paper: {
		boxSizing: "border-box",
		position: "relative",
		width: "960px",
		height: "98%",
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #fff",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: 0
	},
	button: {
		position: "absolute",
		left: window.innerWidth >= "1440" ? "43px" : "860px",
		bottom: window.innerWidth >= "1440" ? "85px" : "20px",
		color: "#2196f3",
		borderColor: "#0005",
		textTransform: "Capitalize",
		fontSize: "0.9rem"
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

	//modal
	const modalClasses = useStylesModal();
	const [modalOpen, setModalOpen] = React.useState(false);

	const handleOpen = () => {
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	const clientId = getClientId();
	const handleLogOut = () => {
		removeToken();
		removeClientId();
	};

	return (
		<div>
			<ClientAvatar />
			<div className={classes.root}>
				<Divider />
				<div className={modalClasses.root}>
					<Button
						className={modalClasses.openButton}
						variant="contained"
						type="button"
						onClick={handleOpen}
						color="secondary"
					>
						Post a Task
					</Button>
					<Modal
						className={modalClasses.modal}
						open={modalOpen}
						closeAfterTransition
						disableScrollLock
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 1000
						}}
					>
						<Fade in={modalOpen}>
							<div className={modalClasses.paper}>
								<TakeOrder />
								<Button
									variant="outlined"
									onClick={handleClose}
									color="primary"
									className={modalClasses.button}
								>
									Close
								</Button>
							</div>
						</Fade>
					</Modal>
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
					<ListItemLink to={`${CLIENT_BASE_URL}/${clientId}/profile`}>
						<ListItemIcon>
							<AccountBoxRoundedIcon />
						</ListItemIcon>
						<ListItemText primary="Profile" />
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
