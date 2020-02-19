import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { BUSINESS_BASE_URL } from "./URLMap";
import Account from "../business/Account/Account";
import Password from "../business/Password/Password";
import BrowseOrder from "../business/BrowseOrder/BrowseOrder";
import Profile from "../business/Profile/Profile";
import OrderHistory from "../business/OrderHistory/OrderHistory";

const BusinessRoutes = () => (
  <Switch>
    <Redirect exact from="/businesses" to={`${BUSINESS_BASE_URL}/profile`} component={Profile} />
    <Route exact path={`${BUSINESS_BASE_URL}/profile`} component={Profile} />
    <Route exact path={`${BUSINESS_BASE_URL}/account`} component={Account} />
    <Route exact path={`${BUSINESS_BASE_URL}/password`} component={Password} />
    <Route exact path={`${BUSINESS_BASE_URL}/browse-order`} component={BrowseOrder} />
    <Route exact path={`${BUSINESS_BASE_URL}/order-history`} component={OrderHistory} />
  </Switch>
)

export default BusinessRoutes;