import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../style/homepage.scss";

const styles = theme => ({
	root: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(4)
	},
	images: {
		marginTop: theme.spacing(8),
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

	return (
		<Container className={classes.root} component="section">
			<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
				<Typography
					variant="h4"
					marked="center"
					align="center"
					component="h2"
				>
					For all services and all desires
				</Typography>
				<div className={classes.images}>
					{images.map(image => (
						<ButtonBase
							key={image.title}
							className={classes.imageWrapper}
							style={{
								width: image.width
							}}
						>
							<div
								className={classes.imageSrc}
								style={{
									backgroundImage: `url(${image.url})`
								}}
							/>
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
						</ButtonBase>
					))}
				</div>
			</ScrollAnimation>
		</Container>
	);
}

ProductCategories.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategories);
