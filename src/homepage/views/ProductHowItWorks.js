import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "../../UI/Button";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../style/homepage.scss";
import { Link } from "react-router-dom";
import { SIGNUP_URL } from "../../routes/URLMap";
import howitworks01 from "../../assets/images/how-it-works-pic-01.png";
import howitworks02 from "../../assets/images/how-it-works-pic-02.png";
import howitworks03 from "../../assets/images/how-it-works-pic-03.png";
import { BUSINESS_ROLE } from "../../utils/variables";

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
					<div className="homepage-child-components__title--black">
						How it works
					</div>

					<div>
						<Grid container spacing={10}>
							<Grid item xs={12} md={4}>
								<div className="product-how-it-works__single-container--grey">
									<img
										src={howitworks01}
										alt="how-it-works-pic-01"
									/>
									<div>Post a task</div>
									<p>
										Answer a few simple questions about your
										job to receive competitive quotes.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={4}>
								<div className="product-how-it-works__single-container--grey">
									<img
										src={howitworks02}
										alt="how-it-works-pic-02"
									/>
									<div>Compare quotes</div>
									<p>
										Chat with businesses who respond to your
										job and discuss the finer details.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={4}>
								<div className="product-how-it-works__single-container--grey">
									<img
										src={howitworks03}
										alt="how-it-works-pic-03"
									/>
									<div>Get your job done</div>
									<p>
										Select the best business for the job and
										leave a review once your job is
										complete.
									</p>
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
						to={{
							pathname: `${SIGNUP_URL}/user/business`,
							role: BUSINESS_ROLE
						}}
					>
						Register your business
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
