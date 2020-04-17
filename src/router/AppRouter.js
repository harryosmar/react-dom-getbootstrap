import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import MenuIndex from "../components/client";
import LoginIndex from "../components/login";
import RegisterIndex from "../components/register";
import NotFound from "../components/pages/NotFound";
import Logout from "../components/pages/Logout";
import {getUserFromSession} from "../jwt/token";

const AuthRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props =>
                getUserFromSession() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
};

const GuestRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                !getUserFromSession() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
};

const AppRouter = () => (
    <Router>
        <Switch>
            <GuestRoute path="/register" component={RegisterIndex}/>
            <GuestRoute path="/login" component={LoginIndex}/>
            <AuthRoute exact={true} path="/" component={MenuIndex}/>
            <AuthRoute path="/logout" component={Logout}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default AppRouter;