import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { BUSINESS_BASE_URL } from "./URLMap";
import Dashboard from "../business/Dashboard/Dashboard";
import Account from "../business/Account/Account";
import Password from "../business/Password/Password";
import BrowseOrder from "../business/BrowseOrder/BrowseOrder";
import Profile from "../business/Profile/Profile";
import OrderHistory from "../business/OrderHistory/OrderHistory";
import OrderInformation from "../components/order/OrderInformation";
import { getBusinessId } from "../utils/auth";

const orderId = "orderId";
const businessId = getBusinessId();

const BusinessRoutes = () => (
	<Switch>
		<Redirect
			exact
			from={`${BUSINESS_BASE_URL}/${businessId}`}
			to={`${BUSINESS_BASE_URL}/${businessId}/dashboard`}
			component={Dashboard}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/${businessId}/dashboard`}
			component={Dashboard}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/${businessId}/profile`}
			component={Profile}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/${businessId}/account`}
			component={Account}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/${businessId}/password`}
			component={Password}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/${businessId}/browse-order`}
			component={BrowseOrder}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/${businessId}/order-history`}
			component={OrderHistory}
		/>
		<Route
			exact
			path={`${BUSINESS_BASE_URL}/${businessId}/orders/${orderId}`}
			component={OrderInformation}
		/>
	</Switch>
);

export default BusinessRoutes;
