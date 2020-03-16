import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { CLIENT_BASE_URL } from "./URLMap";
import ClientDashboard from "../client/dashBoard/ClientDashBoard";
import Account from "../client/account/Account";
import Password from "../authorization/password/Password";
import TakeOrder from "../client/takeOrder/TakeOrder";
import OrderHistory from "../client/orderManagement/OrderHistory";
import OrderInformation from "../client/orderManagement/OrderInformation";
import OrderEdit from "../client/orderManagement/OrderEdit";
import Notification from "../client/notification/Notification";
import Message from "../client/message/Message";
const ClientRoutes = () => (
	<Switch>
		<Redirect
			exact
			from={`${CLIENT_BASE_URL}/:clientId`}
			to={`${CLIENT_BASE_URL}/:clientId/dashboard`}
			component={ClientDashboard}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/dashboard`}
			component={ClientDashboard}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/account`}
			component={Account}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/password`}
			component={Password}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/take-order`}
			component={TakeOrder}
		/>

		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/order-history`}
			component={OrderHistory}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/orders/:orderId`}
			component={OrderInformation}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/orders/:orderId/edit`}
			component={OrderEdit}
			// render={props => <OrderEdit {...props} isAuthed={true} />}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/notification`}
			component={Notification}
		/>

		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/message`}
			component={Message}
		/>
	</Switch>
);

export default ClientRoutes;
