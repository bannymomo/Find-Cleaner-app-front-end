import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "../UI/Avatar";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { CLIENT_BASE_URL } from "../routes/URLMap";
import TakeOrder from "../client/Take-Order/TakeOrder";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

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
		borderRadius: "100px",
		padding: "0.7rem 2rem",
		fontSize: "0.9rem",
		letterSpacing: "1px",
		fontWeight: "700"
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	paper: {
		position: "relative",
		width: "60%",
		height: "92vh",
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #fff",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: 0
	},
	button: {
		position: "absolute",
		right: "0.5rem",
		bottom: "0.5rem",
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
		setModalOpen(!modalOpen);
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<div>
			<div className="client__avatar-container--left-top">
				<Avatar />
				<p>client name</p>
			</div>
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
					<ListItemLink to={`${CLIENT_BASE_URL}/dashboard`}>
						<ListItemText primary="Dashboard" />
					</ListItemLink>
					<ListItemLink to={`${CLIENT_BASE_URL}/profile`}>
						<ListItemText primary="Profile" />
					</ListItemLink>
					<ListItemLink to={`${CLIENT_BASE_URL}/order-history`}>
						<ListItemText primary="OrderHistory" />
					</ListItemLink>
					<ListItem button onClick={handleClick}>
						<ListItemText primary="Setting" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div">
							<ListItem className={classes.nested}>
								<ListItemLink to={`${CLIENT_BASE_URL}/account`}>
									Account
								</ListItemLink>
							</ListItem>
							<ListItem className={classes.nested}>
								<ListItemLink
									to={`${CLIENT_BASE_URL}/password`}
								>
									Password
								</ListItemLink>
							</ListItem>
						</List>
					</Collapse>
				</List>
			</div>
		</div>
	);
}
