import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BUSINESS_BASE_URL } from "./URLMap";
import BusinessDashboard from "../business/dashBoard/BusinessDashboard";
import Account from "../business/account/Account";
import Password from "../authorization/password/Password";
import BrowseOrder from "../business/browseOrder/BrowseOrder";
import Profile from "../business/profile/Profile";
import OrderHistory from "../business/orderManagement/OrderHistory";
import OrderInformation from "../business/orderManagement/OrderInformation";
import Notification from "../business/notification/Notification";
import Message from "../business/message/Message";

const orderId = "orderId";

const BusinessRoutes = () => (
	<Switch>
		<Redirect
			exact
			from={`${BUSINESS_BASE_URL}/:businessId`}
			to={`${BUSINESS_BASE_URL}/:businessId/dashboard`}
			component={BusinessDashboard}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/dashboard`}
			component={BusinessDashboard}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/profile`}
			component={Profile}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/account`}
			component={Account}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/password`}
			component={Password}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/browse-order`}
			component={BrowseOrder}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/order-history`}
			component={OrderHistory}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/orders/:${orderId}`}
			component={OrderInformation}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/notification`}
			component={Notification}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/:businessId/message`}
			component={Message}
		/>
	</Switch>
);

export default BusinessRoutes;
