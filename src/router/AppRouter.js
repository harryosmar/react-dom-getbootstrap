import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuIndex from "../components/menu";
import LoginIndex from "../components/login";
import RegisterIndex from "../components/register";
import {APP_NAME, HEADER_TITLE} from '../config/app';
import NotFound from "../components/pages/NotFound";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={MenuIndex}>
                <MenuIndex app_name={APP_NAME} header_title={HEADER_TITLE}/>
            </Route>
            <Route path="/login">
                <LoginIndex app_name={APP_NAME} header_title={HEADER_TITLE}/>
            </Route>
            <Route path="/register">
                <RegisterIndex app_name={APP_NAME} header_title={HEADER_TITLE}/>
            </Route>
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default AppRouter;