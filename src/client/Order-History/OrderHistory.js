import React from "react";
import OrderCard from "../../components/order/OrderCard";
import OrderNavBar from "../../components/order/OrderNavBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';
import LinearProgress from '@material-ui/core/LinearProgress';

import { fetchHisOrders } from "../../api/client";

import { CLIENT_BASE_URL } from "../../routes/URLMap";
import ErrorMessage from "../../UI/ErrorMessage";

import { 
	clientRole,
    newOrder, 
    cancelledByClient, 
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
			page:1,
			pageSize:5,
		},
		searchStatus: '',
		role: clientRole,
	}

	componentDidMount() {
		this.loadOrders();
	}

	loadOrders = (page, pageSize, search) => {
		this.setState({ isLoading: true, orders: [] }, () => {
			const clientId = this.props.match.params.clientId;
			fetchHisOrders(clientId, page, pageSize, search)
				.then(this.updateOrderData)
				.catch(error => this.setState({ error }));
		});
	};

	updateOrderData = orderData => {
		this.setState({
			orders: orderData.orders,
			isLoading: false,
			pagination: orderData.pagination
		})
	}
	
	handlePageChange = (event, data) => {
		const pageSize = this.state.pagination.pageSize;
		const status = this.state.searchStatus
		this.loadOrders(data, pageSize, status);
	}

	handleSearchNew = () => {
		this.loadOrders(this.state.pagination.page, this.state.pagination.pageSize, newOrder);
		this.setState({ searchStatus: newOrder });
	}
	
	handlesearchAccepted = () => {
		this.loadOrders(this.state.pagination.page, this.state.pagination.pageSize, accepted);
		this.setState({ searchStatus: accepted });
	}

	handlesearchDone = () => {
		this.loadOrders(this.state.pagination.page, this.state.pagination.pageSize, done);
		this.setState({ searchStatus: done });
	}

	handleSearchWithdraw = () => {
		this.loadOrders(this.state.pagination.page, this.state.pagination.pageSize, cancelledByClient);
		this.setState({ searchStatus: cancelledByClient });
	}

	handlesearchCancelled = () => {
		this.loadOrders(this.state.pagination.page, this.state.pagination.pageSize, cancelledByBusiness);
		this.setState({ cancelledByBusiness });
	}


	render() {
		const clientId = this.props.match.params.clientId;
		const BASE_URL = `${CLIENT_BASE_URL}/${clientId}`;

		return (
			<Container className="order-history__container">
				<Grid container spacing={2}>
					<Grid item xs={4}>
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
					<Grid item xs={6}  className="order-history__cardlist">
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
								<LinearProgress />
						)}
						{!this.state.isLoading && !this.state.orders.length && (
							<p> You don't have any order yet. </p>
						)}
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
				</Grid>
			</Container>
		);
	}
}

export default OrderHistory;
