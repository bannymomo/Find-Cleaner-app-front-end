import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
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
				"https://cdn.pixabay.com/photo/2014/02/17/14/28/vacuum-cleaner-268179_1280.jpg",
			title: "Dusting",
			width: "40%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2017/04/18/08/41/hands-2238235_1280.jpg",
			title: "Washing",
			width: "20%"
		},
		{
			url:
				"https://hips.hearstapps.com/hbu.h-cdn.co/assets/16/20/2048x1363/gallery-1463688033-hotel-bed-karate-chop.jpg?resize=768:*",
			title: "Bed making",
			width: "40%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2018/01/07/04/21/lavender-3066531_1280.jpg",
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
				"https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351_1280.jpg",
			title: "Kitchen cleaning",
			width: "40%"
		},
		{
			url:
				"https://cdn.pixabay.com/photo/2015/05/09/17/09/towel-759980_1280.jpg",
			title: "Home & Gardening",
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
		<div style={{ padding: 70 + "px" }} id="product-categories">
			<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
				<Container className={classes.root} component="section">
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
				</Container>
			</ScrollAnimation>
		</div>
	);
}

ProductCategories.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategories);
