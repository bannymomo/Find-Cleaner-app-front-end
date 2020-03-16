import React from "react";
import OrderCard from "../../components/order/OrderCard";
import OrderNavBar from "../../components/order/OrderNavBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import OrderStatus from "../../components/order/OrderStatus";
import { fetchHisOrders } from "../../api/client";

import { CLIENT_BASE_URL } from "../../routes/URLMap";
import ErrorMessage from "../../UI/ErrorMessage";

import {
	CLIENT_ROLE,
	NEW_ORDER,
	CANCELLED_BY_CLIENT,
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
		role: CLIENT_ROLE
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
			const clientId = this.props.match.params.clientId;
			fetchHisOrders(clientId, page, pageSize, search)
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

	handleSearchNew = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			NEW_ORDER
		);
		this.setState({ searchStatus: NEW_ORDER });
	};

	handlesearchAccepted = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			ACCEPTED
		);
		this.setState({ searchStatus: ACCEPTED });
	};

	handlesearchDone = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			DONE
		);
		this.setState({ searchStatus: DONE });
	};

	handleSearchWithdraw = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			CANCELLED_BY_CLIENT
		);
		this.setState({ searchStatus: CANCELLED_BY_CLIENT });
	};

	handlesearchCancelled = () => {
		this.loadOrders(
			this.state.pagination.page,
			this.state.pagination.pageSize,
			CANCELLED_BY_BUSINESS
		);
		this.setState({ CANCELLED_BY_BUSINESS });
	};

	renderContent = BASE_URL => {
		if (this.state.isLoading) {
			return (
				<div className="order-history-progress__container">
					<CircularProgress
						size="60%"
						color="secondary"
						className="circular-progress"
					/>
				</div>
			);
		} else if (!!this.state.error) {
			return <ErrorMessage error={this.state.error} />;
		} else if (!this.state.isLoading && !this.state.orders.length) {
			return <p> There isn't any order. </p>;
		} else {
			return this.state.orders.map(order => (
				<OrderCard
					key={order._id}
					role={this.state.role}
					location={order.location}
					dueDate={order.dueDate}
					price={order.price}
					status={order.status}
					to={`${BASE_URL}/orders/${order._id}`}
				/>
			));
		}
	};
	render() {
		const clientId = this.props.match.params.clientId;
		const BASE_URL = `${CLIENT_BASE_URL}/${clientId}`;

		return (
			<Container className="order-history__container">
				<Grid container spacing={2}>
					<Grid item sm={4} className="order-history__nav-sidebar">
						<OrderNavBar
							role={this.state.role}
							searchAll={this.loadOrders}
							searchNew={this.handleSearchNew}
							searchAccepted={this.handlesearchAccepted}
							searchDone={this.handlesearchDone}
							searchWithdraw={this.handleSearchWithdraw}
							searchCancelled={this.handlesearchCancelled}
						/>
					</Grid>
					<Grid item xs={11} className="order-history__nav-selector">
						<OrderStatus
							role={this.state.role}
							searchAll={this.loadOrders}
							searchNew={this.handleSearchNew}
							searchAccepted={this.handlesearchAccepted}
							searchDone={this.handlesearchDone}
							searchWithdraw={this.handleSearchWithdraw}
							searchCancelled={this.handlesearchCancelled}
						/>
					</Grid>
					<Grid
						item
						sm={6}
						xs={11}
						className="order-history__cardlist"
					>
						<Pagination
							page={this.state.pagination.page}
							count={this.state.pagination.pages}
							onChange={this.handlePageChange}
							shape="rounded"
						/>
						{this.renderContent(BASE_URL)}
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default OrderHistory;
