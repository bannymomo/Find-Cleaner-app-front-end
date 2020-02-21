import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { BUSINESS_BASE_URL } from "./URLMap";
import Account from "../business/Account/Account";
import Password from "../business/Password/Password";
import BrowseOrder from "../business/BrowseOrder/BrowseOrder";
import Profile from "../business/Profile/Profile";
import OrderHistory from "../business/OrderHistory/OrderHistory";
import OrderInformation from "../components/order/OrderInformation";

import Dashboard from "../business/Dashboard/Dashboard";

const orderId = "orderId";

const BusinessRoutes = () => (
  <Switch>
    <Redirect
      exact
      from="/businesses"
      to={`${BUSINESS_BASE_URL}/dashboard`}
      component={Dashboard}
    />
    <Route
      exact
      path={`${BUSINESS_BASE_URL}/dashboard`}
      component={Dashboard}
    />
    <Route exact path={`${BUSINESS_BASE_URL}/profile`} component={Profile} />
    <Route exact path={`${BUSINESS_BASE_URL}/account`} component={Account} />
    <Route exact path={`${BUSINESS_BASE_URL}/password`} component={Password} />
    <Route
      exact
      path={`${BUSINESS_BASE_URL}/browse-order`}
      component={BrowseOrder}
    />
    <Route
      exact
      path={`${BUSINESS_BASE_URL}/order-history`}
      component={OrderHistory}
    />
    <Route
			exact
			path={`${BUSINESS_BASE_URL}/order-history/${orderId}`}
			component={OrderInformation}
		/>
  </Switch>
);

export default BusinessRoutes;
