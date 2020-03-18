import React, { Fragment } from "react";
import Bedrooms from "./components/Bedrooms";
import Bathrooms from "./components/Bathrooms";
import LeaseEnd from "./components/LeaseEnd";
import OtherClean from "./components/OtherClean";
import Location from "./components/Location";
import Date from "./components/Date";
import Time from "./components/Time";
import Price from "./components/Price";
import Description from "./components/Description";
import { createOrder } from "../../api/order";
import { CLIENT_BASE_URL } from "../../routes/URLMap";
import { POST_ORDER_AT_HOMEPAGE } from "../../utils/variables";
import ErrorMessage from "../../UI/ErrorMessage";
import Grid from "@material-ui/core/Grid";

import { withRouter } from "react-router";
import { matchPath } from "react-router-dom";

import { convertValue } from "../../utils/helper";

import Geocode from "react-geocode";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
Geocode.setApiKey(`${GOOGLE_MAP_API_KEY}`);
Geocode.setLanguage("en");
Geocode.setRegion("au");
class TakeOrder extends React.Component {
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
			price: 0,
			description: "",
			error: null,
			isCreating: false
		};
	}

	calculateTotalPrice = () => {
		let totalPrice =
			this.state.bedrooms * 22 +
			this.state.bathrooms * 28 +
			this.state.endOfLease * 135 +
			this.state.oven * 5 +
			this.state.windows * 68 +
			this.state.cabinets * 36 +
			this.state.carpet * 58 +
			20;
		this.setState({ price: totalPrice });
	};

	handleChange = event => {
		const key = event.target.name;
		const value = event.target.value;
		const convertedValue = convertValue(value, key);

		this.setState({ [key]: convertedValue }, () =>
			this.calculateTotalPrice()
		);
	};

	handleChangeDate = value => {
		this.setState({ dueDate: value });
	};

	handleCreateOrder = (clientId, order) => {
		this.setState({ isCreating: true }, () => {
			createOrder(clientId, order)
				.then(newOrder => {
					this.props.history.push(
						`${CLIENT_BASE_URL}/${clientId}/orders/${newOrder._id}`
					);
					window.location.reload(false);
				})
				.catch(error => this.setState({ error, isCreating: false }));
		});
	};

	handleSubmit = () => {
		const order = { ...this.state };

		const match = matchPath(this.props.history.location.pathname, {
			path: "/clients/:clientId"
		});

		localStorage.removeItem(POST_ORDER_AT_HOMEPAGE);

		let clientId;
		if (match && match.params.clientId) {
			clientId = match.params.clientId;
		}
		clientId = localStorage.getItem("clientId");

		Geocode.fromAddress(`${order.location}`)
			.then(() => {
				!order.dueDate
					? alert("Please choose a due date")
					: this.handleCreateOrder(clientId, order);
			})
			.catch(() => alert("Location is invalid"));
	};

	render() {
		return (
			<div className="client__take-order-page">
				{this.state.error ? (
					<ErrorMessage error={this.state.error} />
				) : (
					<Fragment>
						<Grid
							container
							spacing={1}
							className="client__take-order-container"
						>
							<p id="take-order">
								See how little it will cost...
							</p>
							<Grid item xs={12}>
								<Bedrooms
									bedrooms={this.state.bedrooms}
									handleChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<Bathrooms
									bathrooms={this.state.bathrooms}
									handleChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<LeaseEnd
									endOfLease={this.state.endOfLease}
									handleChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<OtherClean
									oven={this.state.oven}
									windows={this.state.windows}
									cabinets={this.state.cabinets}
									carpet={this.state.carpet}
									handleChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<Location
									location={this.state.location}
									handleChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<Date
									dueDate={this.state.dueDate}
									handleChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<Time
									dueDate={this.state.dueDate}
									handleChangeDate={this.handleChangeDate}
								/>
							</Grid>
							<Grid item xs={12}>
								<Description
									description={this.state.description}
									handleChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<Price
									price={this.state.price}
									handleSubmit={this.handleSubmit}
									isCreating={this.state.isCreating}
								/>
							</Grid>
						</Grid>
					</Fragment>
				)}
			</div>
		);
	}
}

export default withRouter(TakeOrder);
