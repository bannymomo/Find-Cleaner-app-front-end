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
import "./style/orderInformation.scss";
import "../../components/order/style/orderHistory.scss";
import OrderInformationList from "../../components/order/OrderInformationList";
import { fetchOrderById, changeOrderStatusByBusiness } from "../../api/order";
import ShowOrderComment from "../../components/order/ShowOrderComment";
import ErrorMessage from "../../UI/ErrorMessage";
import bedroomPic from "../../assets/images/bedroom.png";
import bathroomPic from "../../assets/images/bathroom.png";
import ovenPic from "../../assets/images/oven.png";
import windowPic from "../../assets/images/window.png";
import carpetPic from "../../assets/images/carpet.png";
import cabinetPic from "../../assets/images/cabinet.png";
import rentalPic from "../../assets/images/rental.png";

import {
	BUSINESS_ROLE,
	NEW_ORDER,
	ACCEPTED,
	CANCELLED_BY_BUSINESS,
	DONE
} from "../../utils/variables";
import getStatusText from "../../utils/getStatusText";

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
			client: "",
			business: "",
			error: null,
			isLoading: false,
			isUpdating: false,
			expanded: false,
			rate: 0,
			comment: "",
			showCommentModal: false
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
				.then(() => {
					this.setState({
						business: this.state.order.business,
						client: this.state.order.client,
						clientName: `${this.state.order.client.firstName} ${this.state.order.client.lastName}`,
						clientPhoto: this.state.order.client.photo,
						rate: this.state.order.rate,
						comment: this.state.order.comment
					});
					if (this.state.order.business)
						this.setState({
							businessPhoto: this.state.order.business.photo
						});
				})
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

	showCommentModal = () => {
		this.setState({ showCommentModal: true });
	};

	closeCommentModal = () => {
		this.setState({ showCommentModal: false });
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
						<Grid item sm={8} xs={12}>
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
								clientPhoto={this.state.clientPhoto}
								businessPhoto={this.state.businessPhoto}
								business={this.state.business}
								role={this.state.role}
							/>
						</Grid>
						<Grid item sm={4} xs={12}>
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
									{this.state.order.comment &&
										this.state.order.status === DONE && (
											<Button
												color={"primary"}
												variant="contained"
												onClick={this.showCommentModal}
											>
												VIEW YOUR COMMENT
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
					<ShowOrderComment
						clientPhoto={this.state.client.photo}
						clientName={this.state.clientName}
						rate={this.state.rate}
						comment={this.state.comment}
						showCommentModal={this.state.showCommentModal}
						closeCommentModal={this.closeCommentModal}
						orderId={this.state.order._id}
						business={this.state.business}
					/>
					<div className="order-information__details">
						<Typography variant="h6" component="p">
							DETAILS
						</Typography>
						<ul className="order-information__details--list">
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={bedroomPic}
									alt={bedroomPic}
								/>
								<span className="order-information__icon--title">
									Number of bedrooms:{" "}
									{this.state.order.bedrooms}
								</span>
							</li>
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={bathroomPic}
									alt={bathroomPic}
								/>
								<span className="order-information__icon--title">
									Number of bathrooms:{" "}
									{this.state.order.bathrooms}
								</span>
							</li>
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={rentalPic}
									alt={rentalPic}
								/>
								<span className="order-information__icon--title">
									End-of-lease clean:{" "}
									{this.state.order.endOfLease ? "Yes" : "No"}
								</span>
							</li>
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={ovenPic}
									alt={ovenPic}
								/>
								<span className="order-information__icon--title">
									Oven: {this.state.order.oven ? "Yes" : "No"}
								</span>
							</li>
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={windowPic}
									alt={windowPic}
								/>
								<span className="order-information__icon--title">
									Windows:{" "}
									{this.state.order.windows ? "Yes" : "No"}
								</span>
							</li>
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={cabinetPic}
									alt={cabinetPic}
								/>
								<span className="order-information__icon--title">
									Cabinets:{" "}
									{this.state.order.cabinets ? "Yes" : "No"}
								</span>
							</li>
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={carpetPic}
									alt={carpetPic}
								/>
								<span className="order-information__icon--title">
									Carpet:{" "}
									{this.state.order.carpet ? "Yes" : "No"}
								</span>
							</li>
						</ul>
						<Typography variant="body1" component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
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
								Ut tristique et egestas quis ipsum suspendisse
								ultrices gravida. Ultricies lacus sed turpis
								tincidunt id aliquet risus feugiat in. Nunc
								faucibus a pellentesque sit amet porttitor. Et
								ligula ullamcorper malesuada proin libero nunc
								consequat interdum. Sed nisi lacus sed viverra
								tellus in hac habitasse platea. Augue lacus
								viverra vitae congue eu consequat ac felis
								donec. Neque vitae tempus quam pellentesque nec
								nam aliquam sem et. Dapibus ultrices in iaculis
								nunc sed augue lacus viverra. Malesuada bibendum
								arcu vitae elementum. Fringilla ut morbi
								tincidunt augue. Ut pharetra sit amet aliquam id
								diam maecenas ultricies. Elit ullamcorper
								dignissim cras tincidunt lobortis feugiat
								vivamus. Tempor orci dapibus ultrices in
								iaculis.
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
