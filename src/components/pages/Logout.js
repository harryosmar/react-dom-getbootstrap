import React from "react";
import {removeSession} from "../../auth/session";
import {Redirect} from "react-router-dom";

export default class Logout extends React.Component {
    render() {
        removeSession();

        return <Redirect
            to={{
                pathname: "/login",
                state: {from: this.props.location}
            }}
        />;
    }
}