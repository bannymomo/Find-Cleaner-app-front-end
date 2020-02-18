import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Bedrooms from "./components/Bedrooms";
import Bathrooms from "./components/Bathrooms";
import LeaseEnd from "./components/LeaseEnd";
import OtherClean from "./components/OtherClean";
import Location from "./components/Location";
import Date from "./components/Date";
import Time from "./components/Time";

const useStyles = makeStyles(theme => ({
	root: {
		height: "48.4rem",
		flexGrow: 1,
		minWidth: 300,
		backgroundColor: "#555",
		transform: "translateZ(0)",
		//the position fixed scoping doesn't work in IE 11.
		//Disable this modal to preserve the others
		"@media all and (-ms-high-contrast: none)": {
			display: "none"
		}
	},

	modal: {
		display: "flex",
		padding: theme.spacing(1),
		alignItems: "center",
		justifyContent: "center"
	},

	paper: {
		width: "80%",
		height: "90%",
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #fff",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: 0
	}
}));

const TakeOrder = () => {
	const classes = useStyles();
	const rootRef = React.useRef(null);

	return (
		<div className="client__take-order-page">
			<div className={classes.root} ref={rootRef}>
				<Modal
					disablePortal
					disableEnforceFocus
					disableAutoFocus
					open
					aria-labelledby="take-order"
					className={classes.modal}
					container={() => rootRef.current}
				>
					<div className={classes.paper}>
						<p id="take-order">See how little it will cost...</p>
						<Bedrooms />
						<Bathrooms />
						<LeaseEnd />
						<OtherClean />
						<Location />
						<Date />
						<Time />
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default TakeOrder;
