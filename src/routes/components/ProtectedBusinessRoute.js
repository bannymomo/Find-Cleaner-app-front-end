import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn, getTokenRole } from "../../utils/auth";
import { LOGIN_URL, HOMEPAGE_URL } from "../URLMap";
import { BUSINESS_ROLE } from "../../utils/variables";

const ProtectedBusinessRoute = ({
	component: ProtectedBusinessComponent,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={routeProps => {
				if (!isLoggedIn())
					return (
						<Redirect
							to={{
								pathname: LOGIN_URL,
								state: { from: routeProps.location.pathname }
							}}
						/>
					);
				if (getTokenRole() !== BUSINESS_ROLE)
					return (
						<Redirect
							to={{
								pathname: HOMEPAGE_URL,
								state: { from: routeProps.location.pathname }
							}}
						/>
					);

				return <ProtectedBusinessComponent {...routeProps} />;
			}}
		/>
	);
};

export default ProtectedBusinessRoute;
