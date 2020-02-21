import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../style/homepage.scss";
import { Link } from "react-router-dom";
import { SIGNUP_URL } from "../../routes/URLMap";
import productCurvyLines from "../../assets/images/productCurvyLines.png";

const styles = theme => ({
	root: {
		display: "flex",
		backgroundColor: theme.palette.secondary.light,
		overflow: "hidden"
	},
	container: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(15),
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	item: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(0, 5)
	},
	title: {
		marginBottom: theme.spacing(14)
	},
	number: {
		fontSize: 24,
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium
	},
	image: {
		height: 55,
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4)
	},
	curvyLines: {
		pointerEvents: "none",
		position: "absolute",
		top: -180,
		opacity: 0.7
	},
	button: {
		marginTop: theme.spacing(8)
	}
});

function ProductHowItWorks(props) {
	const { classes } = props;

	return (
		<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
			<section className={classes.root}>
				<Container className={classes.container}>
					<img
						src={productCurvyLines}
						className={classes.curvyLines}
						alt="curvy lines"
					/>

					<Typography
						variant="h4"
						marked="center"
						className={classes.title}
						component="h2"
					>
						<div>How it works</div>
					</Typography>
					<div>
						<Grid container spacing={5}>
							<Grid item xs={12} md={4}>
								<div className={classes.item}>
									<div className={classes.number}>1.</div>
									<img
										src="https://image.flaticon.com/icons/svg/887/887343.svg"
										alt="booking"
										className={classes.image}
									/>

									<Typography variant="h5" align="center">
										<div className="product-how-it-works__title--black">
											What do you need done?
										</div>
										<p>
											Start by telling us about your task.
											Mention when and where you need it
											done, then suggest a fair budget for
											the task.
										</p>
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} md={4}>
								<div className={classes.item}>
									<div className={classes.number}>2.</div>
									<img
										src="https://image.flaticon.com/icons/svg/1189/1189160.svg"
										alt="find-people"
										className={classes.image}
									/>

									<Typography variant="h5" align="center">
										<div className="product-how-it-works__title--black">
											Choose the best person for you
										</div>
										<p>
											Take a look at profiles and reviews
											to pick the best Tasker for your
											task.
										</p>
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} md={4}>
								<div className={classes.item}>
									<div className={classes.number}>3.</div>
									<img
										src="https://image.flaticon.com/icons/svg/2521/2521536.svg"
										alt="task-done"
										className={classes.image}
									/>

									<Typography variant="h5" align="center">
										<div className="product-how-it-works__title--black">
											Task completed
										</div>
										<p>
											With your task complete, you’re free
											to leave a review for the Tasker so
											everyone can know what a great job
											they’ve done!
										</p>
									</Typography>
								</div>
							</Grid>
						</Grid>
					</div>
					<Button
						color="primary"
						size="large"
						variant="contained"
						className={classes.button}
						component={Link}
						to={SIGNUP_URL}
					>
						Get started
					</Button>
				</Container>
			</section>
		</ScrollAnimation>
	);
}

ProductHowItWorks.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHowItWorks);
