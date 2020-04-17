import React from "react";
import {removeSession} from "../../auth/session";
import {Redirect} from "react-router-dom";
import {removeTokenSession} from "../../jwt/token";

export default class Logout extends React.Component {
    render() {
        removeTokenSession();

        return <Redirect
            to={{
                pathname: "/login",
                state: {from: this.props.location}
            }}
        />;
    }
}