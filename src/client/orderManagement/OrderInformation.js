import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import WriteOrderComment from "../../components/order/WriteOrderComment";
import ShowOrderComment from "../../components/order/ShowOrderComment";
import {
	CircularProgress,
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

import ErrorMessage from "../../UI/ErrorMessage";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import bedroomPic from "../../assets/images/bedroom.png";
import bathroomPic from "../../assets/images/bathroom.png";
import ovenPic from "../../assets/images/oven.png";
import windowPic from "../../assets/images/window.png";
import carpetPic from "../../assets/images/carpet.png";
import cabinetPic from "../../assets/images/cabinet.png";
import rentalPic from "../../assets/images/rental.png";

import {
	NEW_ORDER,
	CANCELLED_BY_CLIENT,
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
			order: {},
			clientName: "",
			business: "",
			error: null,
			isLoading: false,
			isUpdating: false,
			expanded: false,
			writeCommentModal: false,
			showCommentModal: false,
			commentSubmit: false,
			rate: 0,
			comment: ""
		};
	}

	componentDidMount() {
		const orderId = this.props.match.params.orderId;
		this.loadOrder(orderId);
	}

	loadOrder = orderId => {
		this.setState({ isLoading: true }, () => {
			fetchOrderById(orderId)
				.then(order => {
					this.setState({
						order,
						isLoading: false,
						isUpdating: false
					});
				})
				.then(() =>
					this.setState({
						business: this.state.order.business,
						clientName: `${this.state.order.client.firstName} ${this.state.order.client.lastName}`,
						rate: this.state.order.rate,
						comment: this.state.order.comment
					})
				)
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	getButtonText = () => {
		let buttonText;
		if (this.state.order.status === NEW_ORDER) {
			buttonText = "Cancel Order";
		} else if (this.state.order.status === ACCEPTED) {
			buttonText = "Order is Done";
		}
		return buttonText;
	};

	getEditButtonText = () => {
		let buttonText;
		if (
			this.state.order.status === CANCELLED_BY_CLIENT ||
			this.state.order.status === CANCELLED_BY_BUSINESS
		) {
			buttonText = "Cancelled";
		} else if (this.state.order.status === ACCEPTED) {
			buttonText = "Assigned";
		} else if (this.state.order.status === DONE) {
			buttonText = "Completed";
		} else {
			buttonText = "Edit Order";
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
		const clientId = this.props.match.params.clientId;

		if (this.state.order.status === NEW_ORDER) {
			status = CANCELLED_BY_CLIENT;
			if (window.confirm(`Do you want to cancel this order?`)) {
				this.setState({ isUpdating: true }, () => {
					changeOrderStatusByClient(orderId, clientId, status)
						.then(() => this.loadOrder(orderId))
						.catch(error => this.setState({ error }));
				});
			}
		} else if (this.state.order.status === ACCEPTED) {
			status = DONE;
			this.setState({ isUpdating: true }, () => {
				changeOrderStatusByClient(orderId, clientId, status)
					.then(() => this.loadOrder(orderId))
					.catch(error => this.setState({ error }));
			});
		}
	};

	showWriteCommentModal = () => {
		this.setState({ writeCommentModal: true });
	};

	closeWriteCommentModal = () => {
		this.setState({ writeCommentModal: false });
	};

	showCommentModal = () => {
		this.setState({ showCommentModal: true });
	};

	changeSubmitStatus = (comment, rate) => {
		this.setState({ commentSubmit: true, comment, rate });
	};

	closeCommentModal = () => {
		this.setState({ showCommentModal: false });
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
				<div className="edit-orders-progress__container">
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
									{this.state.order.status === DONE &&
										!this.state.order.comment &&
										!this.state.commentSubmit && (
											<Button
												color={"primary"}
												variant="contained"
												onClick={
													this.showWriteCommentModal
												}
											>
												LEAVE A COMMNET
											</Button>
										)}
									{this.state.order.status === DONE &&
										(this.state.order.comment ||
											this.state.commentSubmit) && (
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
					<WriteOrderComment
						writeCommentModal={this.state.writeCommentModal}
						closeCommentModal={this.closeWriteCommentModal}
						changeSubmitStatus={this.changeSubmitStatus}
					/>
					<ShowOrderComment
						clientName={this.state.clientName}
						business={
							this.state.business ? this.state.business : ""
						}
						rate={this.state.rate}
						comment={this.state.comment}
						showCommentModal={this.state.showCommentModal}
						closeCommentModal={this.closeCommentModal}
						orderId={this.state.order._id}
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
									Bedrooms: {this.state.order.bedrooms}
								</span>
							</li>
							<li className="order-information__details--singlelist">
								<img
									className="order-information__icon--pic"
									src={bathroomPic}
									alt={bathroomPic}
								/>
								<span className="order-information__icon--title">
									Bathrooms: {this.state.order.bathrooms}
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

export default withRouter(OrderInformaiton);
