import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import MenuIndex from "../components/menu";
import LoginIndex from "../components/login";
import RegisterIndex from "../components/register";
import {APP_NAME, HEADER_TITLE} from '../config/app';
import NotFound from "../components/pages/NotFound";

const AuthRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
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
                false ? (
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
            <Route path="/register">
                <RegisterIndex app_name={APP_NAME} header_title={HEADER_TITLE}/>
            </Route>
            <AuthRoute exact={true} path="/" component={MenuIndex}/>
            <GuestRoute path="/login" component={LoginIndex}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default AppRouter;