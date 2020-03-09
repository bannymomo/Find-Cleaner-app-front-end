import React from "react";
import { Redirect, Route } from "react-router-dom";

import { isLoggedIn, getTokenRole } from "../../utils/auth";
import { LOGIN_URL, HOMEPAGE_URL } from "../URLMap";
import { CLIENT_ROLE } from "../../utils/variables";

const ProtectedClientRoute = ({
	component: ProtectedClientComponent,
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
				if (getTokenRole() !== CLIENT_ROLE)
					return (
						<Redirect
							to={{
								pathname: HOMEPAGE_URL,
								state: { from: routeProps.location.pathname }
							}}
						/>
					);

				return <ProtectedClientComponent {...routeProps} />;
			}}
		/>
	);
};

export default ProtectedClientRoute;
