
import React, { Component } from 'react';
import OrderCard from "../../components/order/OrderCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Maps from "../../components/order/Maps";
import SearchBar from "./components/Search";
import DatePosted from "./components/DatePosted";
import NewTasks from "./components/NewTasks";
import "./style/browseorders.scss";
import { Divider } from "@material-ui/core";

import { fetchAllNewOrders } from "../../api/order";

import { BUSINESS_BASE_URL } from "../../routes/URLMap";

class BrowseOrder extends Component {
	state = {
		orders: [],
		error: null,
		isLoading: false,
		pagination: {},
		role: 'business',
	}

	componentDidMount() {
		this.loadOrders();
	}

	loadOrders = (page, pageSize) => {
		this.setState({isLoading: true, orders:[]}, () => {
			// const businessId = this.props.match.params.businessId;
			fetchAllNewOrders(page, pageSize)
				.then(this.updateOrderData)
				.catch(error => this.setState({error}));
		});
	}

	updateOrderData = orderData => {
		this.setState({
			orders: orderData.orders,
			isLoading: false,
			pagination: orderData.pagination
		})
	}

	render () {

		const businessId = this.props.match.params.businessId;
		const BASE_URL = `${BUSINESS_BASE_URL}/${businessId}`;

		return (
			<React.Fragment>
				<div className="browse-orders--top-bar">
					<DatePosted />
					<NewTasks />
					<SearchBar />
				</div>
				<Divider />
        
			<Container className="order-history__container">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						{
							this.state.orders.map( order => (
								<OrderCard 
									key={order._id}
									role={this.state.role}
									location={order.location}
									dueDate={order.dueDate}
									price={order.price}
									to={`${BASE_URL}/orders/${order._id}`}
								/>
							))
						}
					</Grid>
					<Grid item xs={6}>
						<Maps />
					</Grid>
				</Grid>
			</Container>
        	</React.Fragment>
		);
	}
}

export default BrowseOrder;
