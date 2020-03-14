import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { BUSINESS_BASE_URL } from "./URLMap";
import BusinessDashboard from "../business/DashBoard/BusinessDashboard";
import Account from "../business/BusinessSetting/Account/Account";
import Password from "../business/BusinessSetting/Password/Password";
import BrowseOrder from "../business/BrowseOrder/BrowseOrder";
import Profile from "../business/Profile/Profile";
import OrderHistory from "../business/OrderHistory/OrderHistory";
import OrderInformation from "../business/OrderHistory/OrderInformation";
import Notification from "../business/Notification/Notification";
import Message from "../business/Message/Message";

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
