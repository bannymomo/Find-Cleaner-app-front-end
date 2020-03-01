import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { CLIENT_BASE_URL } from "./URLMap";
import DashBoard from "../client/DashBoard/DashBoard";
import Account from "../client/ClientSetting/Account/Account";
import Password from "../client/ClientSetting/Password/Password";
import TakeOrder from "../client/Take-Order/TakeOrder";
import Profile from "../client/Profile/UserProfile";
import OrderHistory from "../client/Order-History/OrderHistory";
import OrderInformation from "../client/Order-History/OrderInformation";
import OrderEdit from "../client/Order-History/OrderEdit";
import Notification from "../client/Notification/Notification";
import Message from "../client/Message/Message";
const ClientRoutes = () => (
	<Switch>
		<Redirect
			exact
			from={`${CLIENT_BASE_URL}/:clientId`}
			to={`${CLIENT_BASE_URL}/:clientId/dashboard`}
			component={DashBoard}
		/>
		<Route
			exact
			path={`${CLIENT_BASE_URL}/:clientId/dashboard`}
			component={DashBoard}
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
			path={`${CLIENT_BASE_URL}/:clientId/profile`}
			component={Profile}
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
