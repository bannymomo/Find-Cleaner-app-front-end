import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../style/homepage.scss";
import productCurvyLines from "../../assets/images/productCurvyLines.png";

const styles = theme => ({
	root: {
		display: "flex",
		overflow: "hidden",
		backgroundColor: theme.palette.secondary.light
	},
	container: {
		marginTop: theme.spacing(15),
		marginBottom: theme.spacing(30),
		display: "flex",
		position: "relative"
	},
	item: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(0, 5)
	},

	title: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5)
	},
	curvyLines: {
		pointerEvents: "none",
		position: "absolute",
		top: -180
	}
});

function ProductValues(props) {
	const { classes } = props;

	return (
		<section className={classes.root}>
			<Container className={classes.container}>
				<img
					src={productCurvyLines}
					className={classes.curvyLines}
					alt="curvy lines"
				/>
				<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
					<Grid container spacing={5}>
						<Grid item xs={12} md={4}>
							<div className={classes.item}>
								<img
									className="product-values__img--black"
									src="https://image.flaticon.com/icons/svg/2532/2532447.svg"
									alt="Verified badges"
								/>
								<Typography
									variant="h6"
									className={classes.title}
								>
									Verified badges
								</Typography>
								<Typography variant="h5">
									{
										"Badges give members a bit more verified info when deciding who to work with on a task. Each badge has certain requirements that must be met and verified before they’re shown on the member's profile."
									}
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={4}>
							<div className={classes.item}>
								<img
									src="https://image.flaticon.com/icons/svg/181/181092.svg"
									alt="insurance"
									className="product-values__img--black"
								/>
								<Typography
									variant="h6"
									className={classes.title}
								>
									Top rated insurance
								</Typography>
								<Typography variant="h5">
									{
										"Insurance is there to ease any worries - making sure the Tasker has liability insurance from CGU while performing most task activities."
									}
								</Typography>
							</div>
						</Grid>

						<Grid item xs={12} md={4}>
							<div className={classes.item}>
								<img
									className="product-values__img--black"
									src="https://image.flaticon.com/icons/svg/1067/1067566.svg"
									alt="clock"
								/>
								<Typography
									variant="h6"
									className={classes.title}
								>
									Here if you need us
								</Typography>
								<Typography variant="h5">
									{
										"Our comprehensive Help Centre and dedicated Support are on hand 24/7 to help with any questions, queries or issues you might have."
									}
								</Typography>
							</div>
						</Grid>
					</Grid>
				</ScrollAnimation>
			</Container>
		</section>
	);
}

ProductValues.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
