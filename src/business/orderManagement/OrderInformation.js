import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
	Card,
	CardContent,
	Typography,
	InputLabel,
	Box,
	Button,
	Collapse
} from "@material-ui/core";

import "../../components/order/style/orderHistory.scss";
import OrderInformationList from "../../components/order/OrderInformationList";
import { fetchOrderById, changeOrderStatusByBusiness } from "../../api/order";

import ErrorMessage from "../../UI/ErrorMessage";

import {
	BUSINESS_ROLE,
	NEW_ORDER,
	ACCEPTED,
	CANCELLED_BY_BUSINESS,
	DONE
} from "../../utils/variables";
import getStatusText from "../../utils/getStatusText";
import ButtonGoBack from "../../UI/ButtonGoBack";

const listArray = [
	{
		link: "https://www.facebook.com/",
		icon: "fab fa-facebook",
		description: "facebook"
	},
	{
		link: "https://twitter.com/",
		icon: "fab fa-twitter",
		description: "twitter"
	},
	{
		link: "https://www.instagram.com/",
		icon: "fab fa-instagram",
		description: "instagram"
	},
	{
		link: "localhost:3000",
		icon: "fas fa-briefcase",
		description: "and so on"
	}
];

class OrderInformaiton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			role: BUSINESS_ROLE,
			order: {},
			clientName: "",
			business: "",
			error: null,
			isLoading: false,
			isUpdating: false,

			expanded: false
		};
	}

	componentDidMount() {
		const orderId = this.props.match.params.orderId;
		this.loadOrder(orderId);
	}

	loadOrder = orderId => {
		this.setState({ isLoading: true }, () => {
			fetchOrderById(orderId)
				.then(order =>
					this.setState({
						order,
						isLoading: false,
						isUpdating: false
					})
				)
				.then(() =>
					this.setState({
						business: this.state.order.business,
						clientName: `${this.state.order.client.firstName} ${this.state.order.client.lastName}`
					})
				)
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};
	getButtonText = () => {
		let buttonText;
		if (this.state.order.status === NEW_ORDER) {
			buttonText = "Accept Order";
		} else if (this.state.order.status === ACCEPTED) {
			buttonText = "Cancel Order";
		}
		return buttonText;
	};

	getStatusText = () => {
		let buttonText;
		if (this.state.order.status === CANCELLED_BY_BUSINESS) {
			buttonText = "Cancelled";
		} else if (this.state.order.status === DONE) {
			buttonText = "Completed";
		}
		return buttonText;
	};

	isEditDisabled = () => {
		if (this.state.order.status === NEW_ORDER) return false;
		return true;
	};

	isDisabled = value => {
		return value === true ? "order-information__btn-disabled" : "";
	};

	handleChangeStatus = () => {
		let status;
		const orderId = this.state.order._id;
		const businessId = this.props.match.params.businessId;
		if (this.state.order.status === NEW_ORDER) {
			status = ACCEPTED;
			this.setState({ isUpdating: true }, () => {
				changeOrderStatusByBusiness(orderId, businessId, status)
					.then(() => this.loadOrder(orderId))
					.catch(error => this.setState({ error }));
			});
		} else if (this.state.order.status === ACCEPTED) {
			status = CANCELLED_BY_BUSINESS;
			if (window.confirm(`Do you want to cancel this order?`)) {
				this.setState({ isUpdating: true }, () => {
					changeOrderStatusByBusiness(orderId, businessId, status)
						.then(() => this.loadOrder(orderId))
						.catch(error => this.setState({ error }));
				});
			}
		}
	};

	handleExpand = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	handleGoBack = () => {
		this.props.history.go(-1);
	};

	renderContent = () => {
		if (this.state.isLoading || this.state.isUpdating) {
			return (
				<div className="browse-orders-progress__container">
					<CircularProgress size={200} color="secondary" />
				</div>
			);
		} else if (!!this.state.error) {
			return <ErrorMessage error={this.state.error} />;
		} else {
			return (
				<Fragment>
					<Grid
						container
						className="order-information__top"
						spacing={2}
					>
						<Grid item xs={8}>
							<div className="order-information__head">
								<ul className="order-information__status">
									<li className="order-information__status-active">
										{getStatusText(this.state.order.status)}
									</li>
								</ul>
							</div>
							<Typography variant="h4" component="h2">
								House Cleaning
							</Typography>
							<OrderInformationList
								clientName={this.state.clientName}
								location={this.state.order.location}
								dueDate={this.state.order.dueDate}
								business={this.state.business}
								role={this.state.role}
							/>
						</Grid>
						<Grid item xs={4}>
							<ButtonGoBack handleGoBack={this.handleGoBack} />
							<Card>
								<CardContent className="order-information__budget">
									<Typography gutterBottom>Price</Typography>
									<Typography variant="h4" component="p">
										${this.state.order.price}
									</Typography>
								</CardContent>
								<div className="order-information__offer">
									{this.getButtonText() && (
										<Button
											variant="contained"
											color={"primary"}
											onClick={this.handleChangeStatus}
										>
											{this.getButtonText()}
										</Button>
									)}
									{this.getStatusText() && (
										<Button
											disabled={true}
											variant="contained"
											color={"primary"}
										>
											{this.getStatusText()}
										</Button>
									)}
								</div>
							</Card>
							<Box
								border={1}
								borderRadius={5}
								borderColor="#eee"
								className="order-information__share"
							>
								<InputLabel className="order-information__share--label">
									SHARE
								</InputLabel>
								<div className="order-information__share--whole">
									{listArray.map(list => {
										return (
											<a
												key={list.description}
												href={list.link}
												className="order-information__share--single"
											>
												<i className={list.icon}></i>
											</a>
										);
									})}
								</div>
							</Box>
						</Grid>
					</Grid>
					<div className="order-information__details">
						<Typography variant="h6" component="p">
							DETAILS
						</Typography>
						<ul className="order-information__details--list">
							<li>
								Number of bedrooms: {this.state.order.bedrooms}
							</li>
							<li>
								Number of bathrooms:{" "}
								{this.state.order.bathrooms}
							</li>
							<li>
								End-of-lease clean:{" "}
								{this.state.order.endOfLease ? "Yes" : "No"}
							</li>
							<li>
								Oven: {this.state.order.oven ? "Yes" : "No"}
							</li>
							<li>
								Windows:{" "}
								{this.state.order.windows ? "Yes" : "No"}
							</li>
							<li>
								Cabinets:{" "}
								{this.state.order.cabinets ? "Yes" : "No"}
							</li>
							<li>
								Carpet: {this.state.order.carpet ? "Yes" : "No"}
							</li>
						</ul>
						<Typography variant="body1" component="p">
							I need dlkalgj aepwgk'ape [apeg[ap aEOihgao ]]
							jeofiahgiuh ioweja owea a aeg aweoig. dlkalgj
							aepwgk'ape [apeg[ap aEOihgao ]] jeofiahgiuh ioweja
							owea a aeg aweoig. dlkalgj aepwgk'ape [apeg[ap
							aEOihgao ]] jeofiahgiuh ioweja owea a aeg aweoig.rtt
							er, erware ea eaqoh [wp] euigh aerhaer
						</Typography>
						<p
							className="order-information__details--collapse"
							onClick={this.handleExpand}
						>
							View all
						</p>
						<Collapse
							in={this.state.expanded}
							timeout="auto"
							unmountOnExit
						>
							<p>
								ioweja owea a aeg aweoig. dlkalgj aepwgk'ape
								[apeg[ap aEOihgao ]] jeofiahgiuh ioweja owea a
								aeg aweoig. dlkalgj aepwgk'ape [apeg[ap aEOihgao
								]] jeofiahgiuh ioweja owea a aeg aweoig.
								awegaeaer wejfawg we aewoi wo woigjoa.
							</p>
						</Collapse>
					</div>
				</Fragment>
			);
		}
	};

	render() {
		return (
			<div className="order-information">
				<header className="order-information__header">
					ORDER INFORMATION
				</header>
				{this.renderContent()}
			</div>
		);
	}
}

export default OrderInformaiton;
