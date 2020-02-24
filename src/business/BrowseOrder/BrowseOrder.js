
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

class BrowseOrder extends Component {
	state = {
		orderId: 'orderId',
		role: 'business',
		allOrders: [ 'orderId', 'orderId', 'orderId' ]
	}

	render () {
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
								this.state.allOrders.map( () => (
									<OrderCard 
										orderId={this.state.orderId}
										role={this.state.role}
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
