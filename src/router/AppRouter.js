import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import MenuIndex from "../components/client";
import LoginIndex from "../components/login";
import RegisterIndex from "../components/register";
import {APP_NAME, HEADER_TITLE} from '../config/app';
import NotFound from "../components/pages/NotFound";
import Logout from "../components/pages/Logout";

const AuthRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props =>
                true ? (
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
                true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/register",
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
            <AuthRoute path="/logout" component={Logout}/>
            <AuthRoute exact={true} path="/" component={MenuIndex}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default AppRouter;