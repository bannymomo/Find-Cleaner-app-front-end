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
import Typography from "@material-ui/core/Typography";

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
		marginTop: theme.spacing(18)
	},

	pos: {
		fontSize: "1.1rem",
		textAlign: "left",
		lineHeight: "4rem",
		color: "#0008",
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			textAlign: "center"
		}
	}
});

function ProductHowItWorks(props) {
	const { classes } = props;
	const bull = <span className="bullet">✔</span>;

	return (
		<section className={classes.root}>
			<Container className={classes.container}>
				<ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
					<div className="homepage-child-components__title--black">
						How it works
					</div>
					<div>
						<Grid
							container
							spacing={8}
							className="product-how-it-works"
						>
							<Grid item xs={12} md={4}>
								<div className="product-how-it-works__single-card--grey">
									<div className="card__side card__side--front">
										<img
											src={howitworks01}
											alt="how-it-works-pic-01"
										/>
										<div className="card__side--front--title">
											Post a task
										</div>
										<p className="card__side--front--content">
											Answer a few simple questions about
											your job to receive competitive
											quotes.
										</p>
									</div>
									<div className="card__side card__side--back card__side ">
										<div className="card__side--back--title">
											Let us know ...
										</div>
										<Typography
											className={classes.pos}
											color="textSecondary"
										>
											{bull} what type of service you need
											<br />
											{bull} where you need a cleaning
											<br />
											{bull} when you need the service
										</Typography>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} md={4}>
								<div className="product-how-it-works__single-card--grey">
									<div className="card__side card__side--front">
										<img
											src={howitworks02}
											alt="how-it-works-pic-02"
										/>
										<div className="card__side--front--title">
											Compare quotes
										</div>
										<p className="card__side--front--content">
											Chat with businesses who respond to
											your job and discuss the finer
											details.
										</p>
									</div>
									<div className="card__side card__side--back card__side ">
										<div className="card__side--back--title">
											What will happen next...
										</div>
										<Typography
											className={classes.pos}
											color="textSecondary"
										>
											{bull} Job will be taken by a
											cleaner
											<br />
											{bull} Contact with each other
											<br />
											{bull} Make a good deal !
										</Typography>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} md={4}>
								<div className="product-how-it-works__single-card--grey">
									<div className="card__side card__side--front">
										<img
											src={howitworks03}
											alt="how-it-works-pic-03"
										/>
										<div className="card__side--front--title">
											Get your job done
										</div>
										<p className="card__side--front--content">
											Select the best business for the job
											and leave a review once your job is
											complete.
										</p>
									</div>
									<div className="card__side card__side--back card__side ">
										<div className="card__side--back--title">
											Get your job done !
										</div>
										<Typography
											className={classes.pos}
											color="textSecondary"
										>
											{bull} Select a qualified cleaner/
											team
											<br />
											{bull} Check for cleanliness
											<br />
											{bull} Give a rating and review -
											Done!
										</Typography>
									</div>
								</div>
							</Grid>
						</Grid>
					</div>
				</ScrollAnimation>
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
	);
}

ProductHowItWorks.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHowItWorks);
