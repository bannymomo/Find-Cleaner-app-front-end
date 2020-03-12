import React from "react";
import Bedrooms from "../Take-Order/components/Bedrooms";
import Bathrooms from "../Take-Order/components/Bathrooms";
import LeaseEnd from "../Take-Order/components/LeaseEnd";
import OtherClean from "../Take-Order/components/OtherClean";
import Location from "../Take-Order/components/Location";
import TotalPrice from "../Take-Order/components/TotalPrice";
import Description from "../Take-Order/components/Description";
import Time from "../Take-Order/components/Time";
import { updateOrderById } from "../../api/order";
import { CLIENT_BASE_URL } from "../../routes/URLMap";
import Button from "@material-ui/core/Button";
import { fetchOrderById } from "../../api/order";
import ErrorMessage from "../../UI/ErrorMessage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";
import DateTime from "../Take-Order/components/DateTime";
import "./order.scss";

class OrderEdit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bedrooms: 0,
			bathrooms: 0,
			endOfLease: false,
			oven: false,
			windows: false,
			cabinets: false,
			carpet: false,
			location: "",
			dueDate: "",
			description: "",
			price: 0,

			error: null,
			isLoading: false,
			isUpdating: false
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
						bedrooms: order.bedrooms,
						bathrooms: order.bathrooms,
						endOfLease: order.endOfLease,
						oven: order.oven,
						windows: order.windows,
						cabinets: order.cabinets,
						carpet: order.carpet,
						location: order.location,
						dueDate: order.dueDate,
						price: order.price,
						description: order.description,
						isLoading: false,
						isUpdating: false
					})
				)

				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	handleChange = event => {
		const key = event.target.name;
		let value = event.target.value;

		if (key === "bedrooms" || key === "bathrooms") {
			value = parseInt(value);
		} else if (
			key === "location" ||
			key === "dueDate" ||
			key === "description"
		) {
		} else {
			value = value === "false";
		}

		// this.setState({ [key]: value });
		this.setState({ [key]: value }, () => {
			let totalPrice =
				this.state.bedrooms * 22 +
				this.state.bathrooms * 28 +
				this.state.endOfLease * 135 +
				this.state.oven * 5 +
				this.state.windows * 68 +
				this.state.cabinets * 36 +
				this.state.carpet * 18;
			this.setState({ price: totalPrice });
		});
	};

	handleChangeDate = value => {
		// value = value.toString();
		this.setState({ dueDate: value });
	};
	handleSubmit = () => {
		const order = { ...this.state };

		const orderId = this.props.match.params.orderId;
		const clientId = this.props.match.params.clientId;
		this.setState({}, () => {
			updateOrderById(orderId, order)
				.then(order => {
					this.props.history.push(
						`${CLIENT_BASE_URL}/${clientId}/orders/${orderId}`
					);
				})
				.catch(error => this.setState({ error }));
		});
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
				<div className="client__take-order-page">
					<p id="take-order">Update your order here...</p>
					<Bedrooms
						bedrooms={this.state.bedrooms}
						handleChange={this.handleChange}
					/>
					<Bathrooms
						bathrooms={this.state.bathrooms}
						handleChange={this.handleChange}
					/>
					<LeaseEnd
						endOfLease={this.state.endOfLease}
						handleChange={this.handleChange}
					/>
					<OtherClean
						oven={this.state.oven}
						windows={this.state.windows}
						cabinets={this.state.cabinets}
						carpet={this.state.carpet}
						handleChange={this.handleChange}
					/>
					<Location
						location={this.state.location}
						handleChange={this.handleChange}
					/>
					<DateTime
						// dueDate={this.state.dueDate}
						// handleChangeDate={this.handleChangeDate}
						dueDate={this.state.dueDate}
						handleChange={this.handleChange}
					/>
					<Time
						dueDate={this.state.dueDate}
						handleChangeDate={this.handleChangeDate}
					/>
					<Description
						description={this.state.description}
						handleChange={this.handleChange}
					/>
					<TotalPrice price={this.state.price} />
					<Button
						className="submitButton"
						size="large"
						variant="contained"
						color="secondary"
						onClick={this.handleSubmit}
					>
						Update my order
					</Button>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="client__order-edit-page">
				{this.renderContent()}
			</div>
		);
	}
}

export default withRouter(OrderEdit);
