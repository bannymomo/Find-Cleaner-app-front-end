import React, { Component } from "react";
import OrderCard from "../../components/order/OrderCard";
import { Container, Grid, CircularProgress } from "@material-ui/core";
import Maps from "./components/Maps";
import SearchBar from "./components/Search";
import DatePosted from "./components/DatePosted";
import NewTasks from "./components/NewTasks";
import "./style/browseorders.scss";
import Pagination from "@material-ui/lab/Pagination";
import { fetchAllNewOrders } from "../../api/order";
import { BUSINESS_BASE_URL } from "../../routes/URLMap";
import ErrorMessage from "../../UI/ErrorMessage";
import { BUSINESS_ROLE } from "../../utils/variables";
import MapButton from "./components/MapButton";

class BrowseOrder extends Component {
	state = {
		orders: [],
		error: null,
		isLoading: false,
		pagination: {
			page: 1,
			pageSize: 5
		}
	};

	componentDidMount() {
		this.loadOrders();
	}

	loadOrders = (page, pageSize) => {
		this.setState({ isLoading: true, orders: [] }, () => {
			fetchAllNewOrders(page, pageSize)
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
		this.loadOrders(data);
	};
	sortAscending = () => {
		const { orders } = this.state;

		orders.sort((a, b) => {
			let keyA = new Date(a.dueDate),
				keyB = new Date(b.dueDate);
			return keyA - keyB;
		});
		this.setState({ orders });
	};

	sortDescending = () => {
		const { orders } = this.state;

		orders.sort((a, b) => {
			let keyA = new Date(a.dueDate),
				keyB = new Date(b.dueDate);
			return keyB - keyA;
		});
		this.setState({ orders });
	};

	renderConetent = BASE_URL => {
		if (this.state.isLoading) {
			return (
				<div className="browse-orders-progress__container">
					<CircularProgress size={200} color="secondary" />
				</div>
			);
		}
		if (!!this.state.error) {
			return <ErrorMessage error={this.state.error} />;
		}
		if (!this.state.isLoading && !this.state.orders.length) {
			return <p> There is no opened orders at the moment. </p>;
		}
		return (
			<Grid container spacing={1} className="browse-orders--container">
				<Grid item sm={6} xs={11}>
					{this.state.orders.map(order => (
						<OrderCard
							key={order._id}
							role={BUSINESS_ROLE}
							location={order.location}
							dueDate={order.dueDate}
							price={order.price}
							status={order.status}
							clientPhoto={order.client.photo}
							to={`${BASE_URL}/orders/${order._id}`}
						/>
					))}
				</Grid>
				<Grid item sm={6}>
					<Maps
						orders={this.state.orders}
						className="browse-orders--map"
					/>
				</Grid>
			</Grid>
		);
	};

	render() {
		const businessId = this.props.match.params.businessId;
		const BASE_URL = `${BUSINESS_BASE_URL}/${businessId}`;
		return (
			<React.Fragment>
				<div className="browse-orders">
					<div className="browse-orders--top-bar">
						<DatePosted
							sortAscending={this.sortAscending}
							sortDescending={this.sortDescending}
						/>
						<NewTasks />
						<SearchBar />
						<MapButton orders={this.state.orders} />
					</div>

					<Container className="order-history__container">
						<Pagination
							page={this.state.pagination.page}
							count={this.state.pagination.pages}
							onChange={this.handlePageChange}
							shape="rounded"
						/>
						{this.renderConetent(BASE_URL)}
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default BrowseOrder;
