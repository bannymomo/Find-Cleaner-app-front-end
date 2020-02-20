import React from "react";
// import { Route, Switch } from "react-router-dom";
// import { CLIENT_BASE_URL } from "../../routes/URLMap";
import OrderCard from "./component/OrderCard";
// import OrderInformation from "./component/OrderInformation";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
	container: {
		marginTop: 20,
		marginBottom: 20
	}
});

const OrderHistory = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Container className={classes.container} maxWidth="sm">
				<OrderCard />
				<OrderCard />
			</Container>
			{/* <Container className={classes.container}>
				<Switch>
					<Route
						exact
						path={`${CLIENT_BASE_URL}/order-history/orderId`}
						component={OrderInformation}
					/>
				</Switch>
				<OrderInformation />
			</Container> */}
		</React.Fragment>
	);
};

export default OrderHistory;
