import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "../style/homepage.scss";
import whybroomerpic01 from "../../assets/images/why-broomer-01.png";
import whybroomerpic02 from "../../assets/images/why-broomer-02.png";
import whybroomerpic03 from "../../assets/images/why-broomer-03.png";

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
	}
});

function ProductValues(props) {
	const { classes } = props;

	return (
		<section className={classes.root}>
			<Container className="product-value__container--whole">
				<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
					<div className="homepage-child-components__title--black">
						Why Broomer
					</div>
					<Grid container spacing={5}>
						<Grid item xs={12} md={4}>
							<div className={classes.item}>
								<img
									className="product-values__img--blue"
									src={whybroomerpic01}
									alt="Professional and
									trusted cleaners"
								/>
								<div className="product-values__title--black">
									Professional and
									<br />
									trusted cleaners
								</div>

								<p className="product-values__text--black">
									Broomer has the largest amount and the most
									professional cleaners in Australia. Best
									service and experiences guaranteed.
								</p>
							</div>
						</Grid>
						<Grid item xs={12} md={4}>
							<div className={classes.item}>
								<img
									src={whybroomerpic02}
									alt="insurance"
									className="product-values__img--blue"
								/>
								<div className="product-values__title--black">
									Best platform <br />
									and fire price
								</div>
								<p className="product-values__text--black">
									You can use our mobile app or website to
									book cleaners and also track the process of
									your orders. Best price guaranteed.
								</p>
							</div>
						</Grid>

						<Grid item xs={12} md={4}>
							<div className={classes.item}>
								<img
									className="product-values__img--blue"
									src={whybroomerpic03}
									alt="clock"
								/>
								<div className="product-values__title--black">
									Reliable customer service
									<br />
									<br />
								</div>
								<p className="product-values__text--black">
									Our customer service team is ready to help
									you with any inquiries you have during
									office hours, Monday-Friday.
								</p>
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
