import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./style/client.scss";
import { CLIENT_BASE_URL } from "../routes/URLMap";
import SideBar from "./SideBar";
import DashBoard from "./DashBoard/DashBoard";
import Account from "./Account/Account";
import Password from "./Password/Password";
import TakeOrder from "./Take-Order/TakeOrder";
import Profile from "./Profile/Profile";
import OrderHistory from "./Order-History/OrderHistory";
class Client extends Component {
  render() {
    return (
      <div className="client__container--whole-page">
        <div className="client__sidebar--page-left">
          <SideBar />
        </div>
        <div className="client__content-container--page-right">
          <Switch>
            <Redirect
              exact
              from="/clients"
              to={`${CLIENT_BASE_URL}/dashboard`}
              component={DashBoard}
            />
            <Route
              exact
              path={`${CLIENT_BASE_URL}/dashboard`}
              component={DashBoard}
            />
            <Route
              exact
              path={`${CLIENT_BASE_URL}/account`}
              component={Account}
            />
            <Route
              exact
              path={`${CLIENT_BASE_URL}/password`}
              component={Password}
            />
            <Route
              exact
              path={`${CLIENT_BASE_URL}/take-order`}
              component={TakeOrder}
            />
            <Route
              exact
              path={`${CLIENT_BASE_URL}/profile`}
              component={Profile}
            />
            <Route
              // exact
              path={`${CLIENT_BASE_URL}/order-history`}
              component={OrderHistory}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Client;
