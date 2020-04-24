import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginIndex from "../components/login/LoginIndex";
import DashboardIndex from "../components/dashboard/DashboardIndex";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={DashboardIndex}/>
            <Route path="/login" component={LoginIndex}/>
        </Switch>
    </Router>
);

export default AppRouter;