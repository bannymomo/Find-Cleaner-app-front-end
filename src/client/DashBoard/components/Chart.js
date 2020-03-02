import React from "react";
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

import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart
} from "./card/variable-charts";

import styles from "../style/card/tempelate-dashboardStyle";

const useStyles = makeStyles(styles);

export default function Chart() {
	const classes = useStyles();
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 }
	});
	return (
		<div style={{ padding: `${20}px ${20}px ${10}px` }}>
			<GridContainer>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="warning" stats icon>
							<animated.div style={props}>
								<CardIcon color="warning">
									<Icon>content_copy</Icon>
								</CardIcon>
							</animated.div>
							<p className={classes.cardCategory}>2023</p>
						</CardHeader>
						<animated.h3
							style={props}
							className={
								(classes.cardTitle, "card__title--black")
							}
						>
							Total orders
						</animated.h3>

						<CardFooter stats>
							<animated.div
								style={props}
								className={classes.stats}
							>
								<DateRange />
								Last 6 months
							</animated.div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="danger" stats icon>
							<animated.div style={props}>
								<CardIcon color="danger">
									<Icon>info_outline</Icon>
								</CardIcon>
							</animated.div>
							<p className={classes.cardCategory}>75</p>
						</CardHeader>
						<animated.h3
							style={props}
							className={
								(classes.cardTitle, "card__title--black")
							}
						>
							Awaiting offers
						</animated.h3>

						<CardFooter stats>
							<animated.div
								style={props}
								className={classes.stats}
							>
								<DateRange />
								Last 6 months
							</animated.div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="success" stats icon>
							<animated.div style={props}>
								<CardIcon color="success">
									<Store />
								</CardIcon>
							</animated.div>
							<p className={classes.cardCategory}>45</p>
						</CardHeader>
						<animated.h3
							style={props}
							className={
								(classes.cardTitle, "card__title--black")
							}
						>
							Completed Orders
						</animated.h3>

						<CardFooter stats>
							<animated.div
								style={props}
								className={classes.stats}
							>
								<DateRange />
								Last 6 months
							</animated.div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="info" stats icon>
							<animated.div style={props}>
								<CardIcon color="info">
									<Accessibility />
								</CardIcon>
							</animated.div>
							<p className={classes.cardCategory}>355+</p>
						</CardHeader>
						<animated.h3
							style={props}
							className={
								(classes.cardTitle, "card__title--black")
							}
						>
							Favorite cleaners
						</animated.h3>

						<CardFooter stats>
							<animated.div
								style={props}
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
									55%
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
							<h4 className={classes.cardTitle}>Bill</h4>
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
							<h4 className={classes.cardTitle}>
								Completed Tasks
							</h4>
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
