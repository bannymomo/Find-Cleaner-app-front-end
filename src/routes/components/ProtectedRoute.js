import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isLoggedIn } from '../../utils/auth';
import { LOGIN_URL } from '../URLMap';

const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps => {
                if (!isLoggedIn()) return (
                    <Redirect to={{
                        pathname: LOGIN_URL,
                        state: { from: routeProps.location.pathname },
                    }} />
                );

                return <ProtectedComponent {...routeProps} />
            }}
        />
    );
};

export default ProtectedRoute;