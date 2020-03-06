import React from "react";
import Grid from "@material-ui/core/Grid";

import {
	LinearProgress,
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
import { fetchOrderById, changeOrderStatusByClient } from "../../api/order";
// import { fetchClientById } from "../../api/client";

import ErrorMessage from "../../UI/ErrorMessage";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import {
	newOrder,
	cancelledByClient,
	accepted,
	cancelledByBusiness,
	done
} from "../../utils/variables";

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
		// const clientId = this.props.match.params.clientId;
		this.loadOrder(orderId);
		// this.getClientName(clientId);
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
				.catch(error => this.setState({ error }));
		});
	};

	// getClientName = (clientId) => {
	// 	this.setState({ isLoading: true }, () => {
	// 		fetchClientById(clientId)
	// 			.then(client => this.setState({ clientName: `${client.firstName} ${client.lastName}`, isLoading: false }))
	// 			.catch(error => this.setState({ error }));
	// 	});
	// }

	getButtonText = () => {
		let buttonText;
		if (this.state.order.status === newOrder) {
			buttonText = "Cancel Order";
		} else if (this.state.order.status === accepted) {
			buttonText = "Order is Done";
		}
		return buttonText;
	};

	getEditButtonText = () => {
		let buttonText;
		if (
			this.state.order.status === cancelledByClient ||
			this.state.order.status === cancelledByBusiness
		) {
			buttonText = "Cancelled";
		} else if (this.state.order.status === accepted) {
			buttonText = "Assigned";
		} else if (this.state.order.status === done) {
			buttonText = "Completed";
		} else {
			buttonText = "Edit Order";
		}
		return buttonText;
	};

	isActive = value => {
		return this.state.order.status === value
			? "order-information__status-active"
			: "";
	};

	isEditDisabled = () => {
		if (this.state.order.status === newOrder) return false;
		return true;
	};

	isDisabled = value => {
		return value === true ? "order-information__btn-disabled" : "";
	};

	handleChangeStatus = () => {
		let status;
		if (this.state.order.status === newOrder) {
			status = cancelledByClient;
		} else if (this.state.order.status === accepted) {
			status = done;
		}
		this.setState({ isUpdating: true }, () => {
			const orderId = this.state.order._id;
			const clientId = this.props.match.params.clientId;
			changeOrderStatusByClient(orderId, clientId, status)
				.then(() => this.loadOrder(orderId))
				.catch(error => this.setState({ error }));
		});
	};

	handleExpand = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		return (
			<div className="order-information">
				<header className="order-information__header">
					ORDER INFORMATION
				</header>
				{!!this.state.error && (
					<ErrorMessage error={this.state.error} />
				)}
				{(this.state.isLoading || this.state.isUpdating) && (
					<LinearProgress />
				)}
				<Grid container className="order-information__top" spacing={2}>
					<Grid item xs={8}>
						<div className="order-information__head">
							<ul className="order-information__status">
								<li className={this.isActive(newOrder)}>New</li>
								<li
									className={this.isActive(cancelledByClient)}
								>
									Withdrawn
								</li>
								<li
									className={this.isActive(
										cancelledByBusiness
									)}
								>
									Cancelled
								</li>
								<li className={this.isActive(accepted)}>
									Assigned
								</li>
								<li className={this.isActive(done)}>
									Completed
								</li>
							</ul>
						</div>
						<Typography variant="h5" component="h2">
							House Cleaning
						</Typography>
						<OrderInformationList
							clientName={this.state.clientName}
							location={this.state.order.location}
							dueDate={this.state.order.dueDate}
							business={this.state.business}
						/>
					</Grid>
					<Grid item xs={4}>
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
								<Button
									className={this.isDisabled(
										this.isEditDisabled()
									)}
									disabled={this.isEditDisabled()}
									component={Link}
									to={`${this.props.location.pathname}/edit`}
									variant="contained"
									color={"primary"}
								>
									{this.getEditButtonText()}
								</Button>
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
						<li>Number of bedrooms: {this.state.order.bedrooms}</li>
						<li>
							Number of bathrooms: {this.state.order.bathrooms}
						</li>
						<li>
							End-of-lease clean:{" "}
							{this.state.order.endOfLease ? "Yes" : "No"}
						</li>
						<li>Oven: {this.state.order.oven ? "Yes" : "No"}</li>
						<li>
							Windows: {this.state.order.windows ? "Yes" : "No"}
						</li>
						<li>
							Cabinets: {this.state.order.cabinets ? "Yes" : "No"}
						</li>
						<li>
							Carpet: {this.state.order.carpet ? "Yes" : "No"}
						</li>
					</ul>
					<Typography variant="body1" component="p">
						{this.state.order.description}
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
							[apeg[ap aEOihgao ]] jeofiahgiuh ioweja owea a aeg
							aweoig. dlkalgj aepwgk'ape [apeg[ap aEOihgao ]]
							jeofiahgiuh ioweja owea a aeg aweoig. awegaeaer
							wejfawg we aewoi wo woigjoa.
						</p>
					</Collapse>
				</div>
			</div>
		);
	}
}

export default withRouter(OrderInformaiton);
