import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CountUp from 'react-countup';

import ScrollAnimation from "react-animate-on-scroll";
import VisibilitySensor from "react-visibility-sensor";
import "animate.css/animate.min.css";
import "../style/homepage.scss";
import BackgroundVideo from "../../assets/video/backgroundvideo.mp4";
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { FaTrophy } from "react-icons/fa";

const styles = theme => ({
	root: {
        position: "relative",
        marginTop: 100,
        display: "flex",
        color: "white",
		backgroundColor: theme.palette.secondary.light,
        overflow: "hidden",
    },
    video: {
        position:"absolute",
        minWidth: "100%",
        minHeight: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    overlay: {
        position:" absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        opacity: .8,
        backgroundColor: "#1C1D21"
    },
	container: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(15),
		position: "relative",
		display: "flex",
		flexDirection: "column",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 36,
        lineHeight: "49px",
        textAlign: "center",
        marginBottom: 50
    },
    item: {
        textAlign: "center"
    },
    text: {
        textAlign: "center",
        marginBottom: 40
    },
    number: {
        fontSize: 40,
        fontWeight: 700,
        paddingTop: 23,
        color: theme.palette.primary.main
    },
    icon: {
        fontSize: 30,
        paddingTop: 10
    }
});

function ProductAchievments(props) {
    const { classes } = props;

	return (
		<section className={classes.root}>
            <video autoPlay muted loop className={classes.video}>
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <div className={classes.overlay} />
			<Container className={classes.container}>
				<div className={classes.title}>
					Our Achievments
				</div>
                <p className={classes.text}>
                    LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY
				</p>
                <ScrollAnimation animateIn="fadeIn" duration={2} delay={100}>
                    <Grid container spacing={5}>
						<Grid item xs={12} md={3}>
							<div className={classes.item}>
                                <HomeWorkOutlinedIcon className={classes.icon}/>
								<div className={classes.number}>
                                    <CountUp start={1} end={2987} duration={5} >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
								</div>
								<p className={classes.numberText}>
                                    TASK COMPLETED
								</p>
							</div>
						</Grid>
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                <EmojiTransportationIcon className={classes.icon}/>
								<div className={classes.number}>
                                    <CountUp start={1} end={253} duration={5} >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
								</div>
								<p className={classes.numberText}>
                                    BUSINESSES REGISTERED
								</p>
							</div>
						</Grid>
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                <PeopleAltOutlinedIcon className={classes.icon}/>
								<div className={classes.number}>
                                    <CountUp start={1} end={1274} duration={5} >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
								</div>
								<p className={classes.numberText}>
                                    WORKERS EMPLOYED
								</p>
							</div>
						</Grid>
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                <FaTrophy className={classes.icon}/>
								<div className={classes.number}>
                                    <CountUp start={1} end={119} duration={5} >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
								</div>
								<p className={classes.numberText}>
                                    AWARDS WON
								</p>
							</div>
						</Grid>

					</Grid>
                </ScrollAnimation>
            </Container>
        </section>
    )
}

ProductAchievments.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductAchievments);