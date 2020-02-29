import React from "react";
import OrderCard from "../../components/order/OrderCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Maps from "../../components/order/Maps";
import Pagination from '@material-ui/lab/Pagination';

import { fetchHisOrders } from "../../api/business";

import { BUSINESS_BASE_URL } from "../../routes/URLMap";

class OrderHistory extends React.Component {
	
	state = {
		orders: [],
		error: null,
		isLoading: false,
		pagination: {
			page:1,
			pageSize:5
		},
		role: 'business',
	}

	componentDidMount() {
		this.loadOrders();
	}

	loadOrders = (page, pageSize) => {
		this.setState({isLoading: true, orders:[]}, () => {
			const businessId = this.props.match.params.businessId;
			fetchHisOrders(businessId, page, pageSize)
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

	handlePageChange = (event, data) => {
		this.loadOrders(data)
	}

	render () {

		const businessId = this.props.match.params.businessId;
		const BASE_URL = `${BUSINESS_BASE_URL}/${businessId}`;
	
		return (
			<Container className="order-history__container">
				<Pagination 
				page={this.state.pagination.page}
				count={this.state.pagination.pages}
				onChange={this.handlePageChange} 
				shape="rounded" />
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
									status={order.status}
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

		);
	}
}

export default OrderHistory;

