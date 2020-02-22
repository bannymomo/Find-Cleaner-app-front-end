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
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	tasksButton: {
		margin: "0.3rem 0.5rem",
		borderRadius: "100px",
		padding: "0.7rem 1.6rem",
		fontSize: "0.9rem",
		letterSpacing: "1px",
		fontWeight: "700"
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

	return (
		<div>
			<div className="client__avatar-container--left-top">
				<Avatar />
				<p>business name</p>
			</div>
			<div className={classes.root}>
				<Divider />

				<List component="nav" aria-label="secondary mailbox folders">
					<ListItemLink to="browse-order">
						<Button
							className={classes.tasksButton}
							variant="contained"
							type="button"
							color="secondary"
							to="browse-order"
						>
							Browser Tasks
						</Button>
					</ListItemLink>
					<ListItemLink to="dashboard">
						<ListItemText primary="Dashboard" />
					</ListItemLink>
					<ListItemLink to="profile">
						<ListItemText primary="Profile" />
					</ListItemLink>

					<ListItemLink to="order-history">
						<ListItemText primary="OrderHistory" />
					</ListItemLink>
					<ListItem button onClick={handleClick}>
						<ListItemText primary="Setting" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div">
							<ListItem className={classes.nested}>
								<ListItemLink to="account">
									Account
								</ListItemLink>
							</ListItem>
							<ListItem className={classes.nested}>
								<ListItemLink to="password">
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
