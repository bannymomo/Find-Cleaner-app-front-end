import React from "react";
import OrderCard from "../../components/order/OrderCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Maps from "../../components/order/Maps";

class OrderHistory extends React.Component {
	
	state = {
		orderId: 'orderId',
		role: 'business',
		allOrders: [ 'orderId', 'orderId', 'orderId' ]
	}

	render () {
		return (
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
		);
	}
}

export default OrderHistory;
