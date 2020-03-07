import React from "react";
import OrderCard from "../../components/order/OrderCard";
import OrderNavBar from "../../components/order/OrderNavBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";

import { fetchHisOrders } from "../../api/business";

import { BUSINESS_BASE_URL } from "../../routes/URLMap";
import ErrorMessage from "../../UI/ErrorMessage";

import {
	businessRole,
	accepted,
	cancelledByBusiness,
	done
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
		role: businessRole
	};

	componentDidMount() {
		if (this.props.location.state) {
			this.loadOrders(
				this.state.pagination.page, 
				this.state.pagination.pageSize, 
				this.props.location.state.searchStatus
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
		const pageSize = this.state.pagination.pageSize;
		const status = this.state.searchStatus;
		this.loadOrders(data, pageSize, status);
	};

	handlesearchAccepted = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			accepted
		);
		this.setState({ searchStatus: accepted });
	};

	handlesearchDone = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			done
		);
		this.setState({ searchStatus: done });
	};

	handlesearchCancelled = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			cancelledByBusiness
		);
		this.setState({ cancelledByBusiness });
	};

	render() {
		const businessId = this.props.match.params.businessId;
		const BASE_URL = `${BUSINESS_BASE_URL}/${businessId}`;
		return (
			<Container className="order-history__container">
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<OrderNavBar
							searchAll={this.loadOrders}
							searchAccepted={this.handlesearchAccepted}
							searchDone={this.handlesearchDone}
							searchCancelled={this.handlesearchCancelled}
						/>
					</Grid>
					<Grid item xs={6} className="order-history__cardlist">
						<Pagination
							page={this.state.pagination.page}
							count={this.state.pagination.pages}
							onChange={this.handlePageChange}
							shape="rounded"
						/>
						{!!this.state.error && (
							<ErrorMessage error={this.state.error} />
						)}
						{this.state.isLoading && (
							<div className="order-history-progress__container">
								<CircularProgress
									size={200}
									color="secondary"
								/>
							</div>
						)}
						{!this.state.isLoading && !this.state.orders.length && (
							<p> There isn't any order. </p>
						)}
						{this.state.orders.map(order => (
							<OrderCard
								key={order._id}
								role={this.state.role}
								location={order.location}
								dueDate={order.dueDate}
								price={order.price}
								status={order.status}
								to={`${BASE_URL}/orders/${order._id}`}
							/>
						))}
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default OrderHistory;
