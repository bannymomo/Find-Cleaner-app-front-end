import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import TakeOrder from "../../client/takeOrder/TakeOrder";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";
import { POST_ORDER_AT_HOMEPAGE } from "../../utils/variables";

const useStylesModal = makeStyles(theme => ({
	openButton: {
		margin: "0 2rem",
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
		overflow: "scroll",
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #fff",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 4, 2),
		outline: 0
	},
	button: {
		position: "absolute",
		right: 5,
		top: 5,
		border: "none",
		borderRadius: "100px",
		fontSize: "1.2rem",

		"&:hover": {
			color: "#2196f3",
			backgroundColor: "transparent"
		}
	}
}));

const PostOrderBtn = props => {
	//modal
	const modalClasses = useStylesModal();
	const [modalOpen, setModalOpen] = React.useState(false);

	const handleOpen = () => {
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
		localStorage.removeItem(POST_ORDER_AT_HOMEPAGE);
	};

	props.history.listen(() => {
		!localStorage.getItem(POST_ORDER_AT_HOMEPAGE)
			? setModalOpen(false)
			: props.buttonInNav &&
			  handleOpen() &&
			  localStorage.removeItem(POST_ORDER_AT_HOMEPAGE);
	});

	return (
		<div className={modalClasses.root}>
			<Button
				variant="contained"
				type="button"
				onClick={handleOpen}
				color="primary"
			>
				Post a Task
			</Button>
			<Modal
				className={modalClasses.modal}
				open={modalOpen}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 1000,
					open: modalOpen ? true : false
				}}
			>
				<Fade in={modalOpen}>
					<div className={modalClasses.paper}>
						<TakeOrder />
						<Button
							onClick={handleClose}
							color="primary"
							className={modalClasses.button}
						>
							✕
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default withRouter(PostOrderBtn);
