import React from "react";
import OrderCard from "../../components/order/OrderCard";
import OrderNavBar from "../../components/order/OrderNavBar";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { fetchHisOrders } from "../../api/business";
import { BUSINESS_BASE_URL } from "../../routes/URLMap";
import ErrorMessage from "../../UI/ErrorMessage";
import {
	BUSINESS_ROLE,
	ACCEPTED,
	CANCELLED_BY_BUSINESS,
	DONE
} from "../../utils/variables";
class OrderHistory extends React.Component {
	state = {
		orders: [],
		error: null,
		isLoading: false,
		pagination: {
			page: 1,
			pageSize: 5
		},
		searchStatus: "",
	};

	componentDidMount() {
		const { location: { state } } = this.props;
		const { pagination: { page, pageSize } } =this.state;

		if (state) {
			this.loadOrders(
				page,
				pageSize,
				state.searchStatus
			);
		} else {
			this.loadOrders();
		}
	}

	loadOrders = (page, pageSize, search) => {
		this.setState({ isLoading: true, orders: [] }, () => {
			const businessId = this.props.match.params.businessId;
			fetchHisOrders(businessId, page, pageSize, search)
				.then(this.updateOrderData)
				.catch(error => this.setState({ error, isLoading: false }));
		});
	};

	updateOrderData = orderData => {
		this.setState({
			orders: orderData.orders,
			isLoading: false,
			pagination: orderData.pagination
		});
	};

	handlePageChange = (event, data) => {
		const { pagination: { pageSize }, searchStatus } =this.state;
		this.loadOrders(data, pageSize, searchStatus);
	};

	handleSearch = status => {
		const { pagination: { page, pageSize } } =this.state;
		this.loadOrders(
			page,
			pageSize,
			status
		);
		this.setState({ searchStatus: status });
	}

	renderConetent = BASE_URL => {
		if (this.state.isLoading) {
			return (
				<div className="order-history-progress__container">
					<CircularProgress size={200} color="secondary" />
				</div>
			);
		} 
		if (!!this.state.error) {
			return <ErrorMessage error={this.state.error} />;
		} 
		if (!this.state.isLoading && !this.state.orders.length) {
			return <p> There isn't any order. </p>;
		} 
		return this.state.orders.map(order => (
			<OrderCard
				key={order._id}
				role={BUSINESS_ROLE}
				location={order.location}
				dueDate={order.dueDate}
				price={order.price}
				status={order.status}
				to={`${BASE_URL}/orders/${order._id}`}
			/>
		))
	}

	render() {
		const businessId = this.props.match.params.businessId;
		const BASE_URL = `${BUSINESS_BASE_URL}/${businessId}`;
		return (
			<Container className="order-history__container">
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<OrderNavBar
							searchAll={() => this.handleSearch()}
							searchAccepted={() => this.handleSearch(ACCEPTED)}
							searchDone={() => this.handleSearch(DONE)}
							searchCancelled={() => this.handleSearch(CANCELLED_BY_BUSINESS)}
						/>
					</Grid>
					<Grid item xs={6} className="order-history__cardlist">
						<Pagination
							page={this.state.pagination.page}
							count={this.state.pagination.pages}
							onChange={this.handlePageChange}
							shape="rounded"
						/>
						{this.renderConetent(BASE_URL)}
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default OrderHistory;
