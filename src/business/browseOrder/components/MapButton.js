import React from "react";
import { Backdrop, Button, Modal, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Maps from "../../../components/order/Maps";
import "../../../components/order/style/orderHistory.scss";

const useStylesModal = makeStyles(theme => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		position: "relative",
		width: 600,
		height: 500,
		[theme.breakpoints.down("xs")]: {
			width: "100vw"
		}
	},
	mapButton: {
		position: "absolute",
		right: -30,
		backgroundColor: "white",
		minWidth: 30,
		top: 0,
		border: "none",
		borderRadius: 0,
		fontSize: "1rem",
		[theme.breakpoints.down("xs")]: {
			right: 0,
			backgroundColor: "rgba(255, 255, 255, 0)"
		},
		"&:hover": {
			color: "#2196f3",
			backgroundColor: "white",
			[theme.breakpoints.down("xs")]: {
				backgroundColor: "rgba(255, 255, 255, 0)"
			}
		}
	}
}));

export default function OrderInformationList(props) {
	const modalClasses = useStylesModal();

	const [openMap, setOpenMap] = React.useState(false);

	const handleClose = () => {
		setOpenMap(false);
	};
	const handleToggleMap = () => {
		setOpenMap(!openMap);
	};

	return (
		<div className="order-information__map">
			<Button
				className="browse-orders--top-bar--map-button"
				onClick={handleToggleMap}
			>
				View Map
			</Button>
			<Modal
				className={modalClasses.modal}
				open={openMap}
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 1000,
					open: openMap
				}}
			>
				<Fade in={openMap}>
					<div className={modalClasses.map}>
						<Maps address={props.orders.location} />
						<Button
							onClick={handleClose}
							className={modalClasses.mapButton}
						>
							✕
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
