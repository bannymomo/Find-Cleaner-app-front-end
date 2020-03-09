import React from "react";
import { Link, withRouter } from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import Icon from "@material-ui/core/Icon";
import { useSpring, animated } from "react-spring";

// core components
import GridItem from "./card/GridItem";
import GridContainer from "./card/GridContainer";
import Card from "./card/Card";
import CardHeader from "./card/CardHeader";
import CardBody from "./card/CardBody";
import CardFooter from "./card/CardFooter";
import CardIcon from "./card/CardIcon.js";
import TotalTasksNumber from "./TotalTasksNumber";
import TotalUnfinishedTasksNumber from "./TotalUnfinishedTasksNumber";
import TotalFinishTasksNumber from "./TotalFinishTasksNumber";
import FollowersNumber from "./FollowersNumber";

import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart
} from "./card/variable-charts";

import styles from "../style/card/tempelate-dashboardStyle";

import { BUSINESS_BASE_URL } from "../../../routes/URLMap";
import { CardActionArea } from "@material-ui/core";
import { accepted, done } from "../../../utils/variables";

const useStyles = makeStyles(styles);

function Chart(props) {
	const classes = useStyles();
	const animatedProps = useSpring({
		opacity: 1,
		from: { opacity: 0 }
	});

	const businessId = props.match.params.businessId;

	return (
		<div className="Chart__container--whole">
			<GridContainer>
				<GridItem xs={12} sm={6} md={3}>
					<CardActionArea
						component={Link}
						to={`${BUSINESS_BASE_URL}/${businessId}/order-history`}
					>
						<Card>
							<CardHeader color="warning" stats icon>
								<animated.div style={animatedProps}>
									<CardIcon color="warning">
										<Icon>content_copy</Icon>
									</CardIcon>
								</animated.div>
							</CardHeader>
							<animated.h3
								style={animatedProps}
								className={
									(classes.cardTitle, "card__title--black")
								}
							>
								Total tasks
							</animated.h3>
							<TotalTasksNumber />
							<CardFooter stats>
								<animated.div
									style={animatedProps}
									className={classes.stats}
								>
									<DateRange />
									Last 6 months
								</animated.div>
							</CardFooter>
						</Card>
					</CardActionArea>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<CardActionArea
						component={Link}
						to={{
							pathname: `${BUSINESS_BASE_URL}/${businessId}/order-history`,
							state: { searchStatus: accepted }
						}}
					>
						<Card>
							<CardHeader color="danger" stats icon>
								<animated.div style={animatedProps}>
									<CardIcon color="danger">
										<Icon>info_outline</Icon>
									</CardIcon>
								</animated.div>
							</CardHeader>
							<animated.h3
								style={animatedProps}
								className={
									(classes.cardTitle, "card__title--black")
								}
							>
								Unfinished Tasks
							</animated.h3>
							<TotalUnfinishedTasksNumber />
							<CardFooter stats>
								<animated.div
									style={animatedProps}
									className={classes.stats}
								>
									<DateRange />
									Last 6 months
								</animated.div>
							</CardFooter>
						</Card>
					</CardActionArea>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<CardActionArea
						component={Link}
						to={{
							pathname: `${BUSINESS_BASE_URL}/${businessId}/order-history`,
							state: { searchStatus: done }
						}}
					>
						<Card>
							<CardHeader color="success" stats icon>
								<animated.div style={animatedProps}>
									<CardIcon color="success">
										<Store />
									</CardIcon>
								</animated.div>
							</CardHeader>
							<animated.h3
								style={animatedProps}
								className={
									(classes.cardTitle, "card__title--black")
								}
							>
								Completed Tasks
							</animated.h3>
							<TotalFinishTasksNumber />
							<CardFooter stats>
								<animated.div
									style={animatedProps}
									className={classes.stats}
								>
									<DateRange />
									Last 6 months
								</animated.div>
							</CardFooter>
						</Card>
					</CardActionArea>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="info" stats icon>
							<animated.div style={animatedProps}>
								<CardIcon color="info">
									<Accessibility />
								</CardIcon>
							</animated.div>
						</CardHeader>
						<animated.h3
							style={animatedProps}
							className={
								(classes.cardTitle, "card__title--black")
							}
						>
							Followers
						</animated.h3>
						<FollowersNumber />
						<CardFooter stats>
							<animated.div
								style={animatedProps}
								className={classes.stats}
							>
								<Update />
								Just Updated
							</animated.div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader color="success">
							<ChartistGraph
								className="ct-chart"
								data={dailySalesChart.data}
								type="Line"
								options={dailySalesChart.options}
								listener={dailySalesChart.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Activity</h4>
							<p className={classes.cardCategory}>
								<span className={classes.successText}>
									<ArrowUpward
										className={classes.upArrowCardCategory}
									/>{" "}
									70%
								</span>
								increase this week.
							</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> updated 4 minutes ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader color="warning">
							<ChartistGraph
								className="ct-chart"
								data={emailsSubscriptionChart.data}
								type="Bar"
								options={emailsSubscriptionChart.options}
								responsiveOptions={
									emailsSubscriptionChart.responsiveOptions
								}
								listener={emailsSubscriptionChart.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Income</h4>
							<p className={classes.cardCategory}>
								Last 6 months Performance
							</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> update 30 minutes ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader color="danger">
							<ChartistGraph
								className="ct-chart"
								data={completedTasksChart.data}
								type="Line"
								options={completedTasksChart.options}
								listener={completedTasksChart.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Rating Stars</h4>
							<p className={classes.cardCategory}>
								Last Campaign Performance
							</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> campaign sent 2 days ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}

export default withRouter(Chart);
