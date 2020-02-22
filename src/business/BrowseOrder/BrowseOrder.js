
import React, { Component } from 'react';
import OrderCard from "../../components/order/OrderCard";
import Container from "@material-ui/core/Container";
import SearchBar from "./components/Search";
import DatePosted from "./components/DatePosted";
import NewTasks from "./components/NewTasks";
import "./style/browseorders.scss";
import { Divider } from "@material-ui/core";

class BrowseOrder extends Component {
	state = {
		orderId: 'orderId',
		allOrders: [ 'orderId', 'orderId', 'orderId' ]
	}

	render () {
		return (
      <div>
				<div className="browse-orders--top-bar">
					<DatePosted />
					<NewTasks />
					<SearchBar />
				</div>
				<Divider />
        <React.Fragment>
          <Container className="order-history__container" maxWidth="sm">
            {
              this.state.allOrders.map( () => (
                <OrderCard orderId={this.state.orderId}/>
              ))
            }
          </Container>
        </React.Fragment>
			</div>
		);
	}
}

export default BrowseOrder;
