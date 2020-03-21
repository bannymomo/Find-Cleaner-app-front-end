import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../style/homepage.scss";
import styled from "styled-components";
import TakeOrder from "../../client/takeOrder/TakeOrder";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { isLoggedIn, getClientId, getBusinessId } from "../../utils/auth";
import { LOGIN_URL, BUSINESS_BASE_URL } from "../../routes/URLMap";
import { withRouter } from "react-router-dom";
import { POST_ORDER_AT_HOMEPAGE } from "../../utils/variables";

const styles = theme => ({
	root: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(15)
		}
	},
	images: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(4),
		display: "flex",
		flexWrap: "wrap"
	},
	imageWrapper: {
		position: "relative",
		display: "block",
		padding: 0,
		borderRadius: 0,
		height: "40vh",
		[theme.breakpoints.down("sm")]: {
			width: "100% !important",
			height: 100
		},
		"&:hover": {
			zIndex: 1
		},
		"&:hover $imageBackdrop": {
			opacity: 0.15
		},
		"&:hover $imageMarked": {
			opacity: 0
		},
		"&:hover $imageTitle": {
			border: "4px solid currentColor"
		}
	},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.common.white
	},
	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%"
	},
	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		background: theme.palette.common.black,
		opacity: 0.5,
		transition: theme.transitions.create("opacity")
	},
	imageTitle: {
		position: "relative",
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
	},
	imageMarked: {
		height: 3,
		width: 18,
		background: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity")
	}
});

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

function ProductCategories(props) {
	const { classes } = props;

	const images = [
		{
			url:
				"https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792_1280.jpg",
			title: "Home & Gardening",
			width: "40%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2017/05/23/16/23/soap-dispenser-2337697_1280.jpg",
			title: "Washing",
			width: "25%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2017/08/24/12/23/coffee-2676642_1280.jpg",
			title: "Bed making",
			width: "35%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2015/03/26/10/01/bathroom-690774_1280.jpg",
			title: "Bathroom cleaning",
			width: "38%"
		},
		{
			url:
				"https://www.melbournefridgeworks.com.au/thumbnaillarge/Womencleaningfridge.jpg",
			title: "Fridge cleaning",
			width: "38%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2016/10/26/21/05/modern-kitchen-1772638_1280.jpg",
			title: "Oven cleaning",
			width: "24%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2014/11/24/14/39/potato-544073_1280.jpg",
			title: "Kitchen cleaning",
			width: "40%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2014/02/17/14/28/vacuum-cleaner-268179_1280.jpg",
			title: "Dusting",
			width: "20%"
		},
		{
			url:
				"https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80",
			title: "And much more",
			width: "40%"
		}
	];

	const modalClasses = useStylesModal();
	const businessId = getBusinessId();
	const [modalOpen, setModalOpen] = React.useState(false);
	const handleOpen = () => {
		if (isLoggedIn() && getClientId()) {
			setModalOpen(true);
		} else if (isLoggedIn() && getBusinessId()) {
			props.history.push(
				`${BUSINESS_BASE_URL}/${businessId}/browse-order`
			);
		} else {
			props.history.push(LOGIN_URL);
			localStorage.setItem(POST_ORDER_AT_HOMEPAGE, true);
		}
	};

	const handleClose = () => {
		setModalOpen(false);
		localStorage.removeItem(POST_ORDER_AT_HOMEPAGE);
	};

	return (
		<Container className={classes.root} component="section">
			<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
				<div className="homepage-child-components__title--black">
					For all the needs to make your <br />
					home or office neat and tidy
				</div>
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
								onClick={handleClose}
								color="primary"
								className={modalClasses.button}
							>
								✕
							</Button>
						</div>
					</Fade>
				</Modal>
				<div className={classes.images}>
					{images.map(image => {
						const StyledButtonBase = styled(ButtonBase)`
							width: ${image.width};
						`;
						const StyledDiv = styled.div`
							background-image: url(${image.url});
						`;
						return (
							<StyledButtonBase
								key={image.title}
								className={classes.imageWrapper}
								onClick={handleOpen}
							>
								<StyledDiv className={classes.imageSrc} />
								<div className={classes.imageBackdrop} />
								<div className={classes.imageButton}>
									<Typography
										component="h3"
										variant="h6"
										color="inherit"
										className={classes.imageTitle}
									>
										{image.title}
										<div className={classes.imageMarked} />
									</Typography>
								</div>
							</StyledButtonBase>
						);
					})}
				</div>
			</ScrollAnimation>
		</Container>
	);
}

ProductCategories.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ProductCategories));
