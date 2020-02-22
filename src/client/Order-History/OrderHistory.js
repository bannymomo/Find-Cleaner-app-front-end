import React from "react";
import OrderCard from "../../components/order/OrderCard";
import Container from "@material-ui/core/Container";

class OrderHistory extends React.Component {
	
	state = {
		orderId: 'orderId',
		role: 'client',
		allOrders: [ 'orderId', 'orderId' ]
	}

	render () {
		return (
			<React.Fragment>
				<Container className="order-history__container" maxWidth="sm">
					{
						this.state.allOrders.map( () => (
							<OrderCard 
								orderId={this.state.orderId}
								role={this.state.role}
							/>
						))
					}
				</Container>
			</React.Fragment>
		);
	}
}

export default OrderHistory;
