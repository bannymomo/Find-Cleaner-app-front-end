import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../login/login";
import HomePage from "../homepage/HomePage";
import Business from "../business/Business";
import Client from "../client/Client";

import {
  CLIENT_BASE_URL,
  BUSINESS_BASE_URL,
  LOGIN_URL,
  HOMEPAGE_URL
} from "./URLMap";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={HOMEPAGE_URL} />
      <Route exact path={LOGIN_URL} component={Login} />
      <Route exact path={HOMEPAGE_URL} component={HomePage} />
      <Route path={BUSINESS_BASE_URL} component={Business} />
      <Route path={CLIENT_BASE_URL} component={Client} />
    </Switch>
  );
};

export default Routes;
