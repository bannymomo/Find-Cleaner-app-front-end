import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import TakeOrder from "../../client/Take-Order/TakeOrder";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";

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
		left: window.innerWidth >= "1440" ? "43px" : "860px",
		bottom: window.innerWidth >= "1440" ? "85px" : "20px",
		color: "#2196f3",
		borderColor: "#0005",
		textTransform: "Capitalize",
		fontSize: "0.9rem"
	}
}));

const PostOrderBtn = props => {
    
    const POST_ORDER_AT_HOMEPAGE = "postOrderAtHomepage";

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
        ! localStorage.getItem(POST_ORDER_AT_HOMEPAGE) ?
        setModalOpen(false) :
        props.buttonInNav &&
        handleOpen() && 
        localStorage.removeItem(POST_ORDER_AT_HOMEPAGE);     
    })
    
    return (
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
                    timeout: 1000,
                    open: modalOpen ? true : false
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
    )
}

export default withRouter(PostOrderBtn);