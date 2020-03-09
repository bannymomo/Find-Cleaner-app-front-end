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
import TotalOrdersNumber from "./TotalOrdersNumber";
import TotalNewOrdersNumber from "./TotalNewOrdersNumber";
import TotalAssignedOrdersNumber from "./TotalAssignedOrdersNumber";
import FavoriteCleanersNumber from "./FavoriteCleanersNumber";

import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart
} from "./card/variable-charts";

import styles from "../style/card/tempelate-dashboardStyle";

import { CLIENT_BASE_URL } from "../../../routes/URLMap";
import { CardActionArea } from "@material-ui/core";
import { accepted, newOrder } from "../../../utils/variables";

const useStyles = makeStyles(styles);

function Chart(props) {
	const classes = useStyles();
	const animatedProps = useSpring({
		opacity: 1,
		from: { opacity: 0 }
	});

	const clientId = props.match.params.clientId;
	return (
		<div style={{ padding: `${20}px ${20}px ${10}px` }}>
			<GridContainer>
				<GridItem xs={12} sm={6} md={3}>
					<CardActionArea
						component={Link}
						to={`${CLIENT_BASE_URL}/${clientId}/order-history`}
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
								Total orders
							</animated.h3>
							<TotalOrdersNumber />
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
							pathname: `${CLIENT_BASE_URL}/${clientId}/order-history`,
							state: { searchStatus: newOrder }
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
								Awaiting offers
							</animated.h3>
							<TotalNewOrdersNumber />
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
							pathname: `${CLIENT_BASE_URL}/${clientId}/order-history`,
							state: { searchStatus: accepted }
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
								Assigned orders
							</animated.h3>
							<TotalAssignedOrdersNumber />
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
							Favorite cleaners
						</animated.h3>
						<FavoriteCleanersNumber />
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

export default withRouter(Chart);
