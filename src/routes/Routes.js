import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// import ProtectedRoute from './components/ProtectedRoute'
import Login from "../authorization/login/login";
import UserSignup from "../authorization/signup/UserSignup";
import HomePage from "../homepage/HomePage";
import Business from "../business/Business";
import Client from "../client/Client";
import ProtectedClientRoute from "./components/ProtectedClientRoute";
import ProtectedBusinessRoute from "./components/ProtectedBusinessRoute";
import {
	CLIENT_BASE_URL,
	BUSINESS_BASE_URL,
	LOGIN_URL,
	SIGNUP_URL,
	HOMEPAGE_URL
} from "./URLMap";

const Routes = () => {
	return (
		<Switch>
			<Redirect exact from="/" to={HOMEPAGE_URL} />
			<Route exact path={LOGIN_URL} component={Login} />
			<Route
				exact
				path={`${SIGNUP_URL}/user/client`}
				component={UserSignup}
			/>
			<Route
				exact
				path={`${SIGNUP_URL}/user/business`}
				component={UserSignup}
			/>
			<Route exact path={HOMEPAGE_URL} component={HomePage} />
			<ProtectedBusinessRoute
				path={BUSINESS_BASE_URL}
				component={Business}
			/>
			<ProtectedClientRoute path={CLIENT_BASE_URL} component={Client} />
		</Switch>
	);
};

export default Routes;
