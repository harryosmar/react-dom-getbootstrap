import React from "react";
import {removeSession} from "../../auth/session";
import {Redirect} from "react-router-dom";
import {removeClientsSession, removeTokenSession} from "../../jwt/token";

export default class Logout extends React.Component {
    clearSession = () => {
        removeTokenSession();
        removeClientsSession();
    };

    render() {
        this.clearSession();

        return <Redirect
            to={{
                pathname: "/login",
                state: {from: this.props.location}
            }}
        />;
    }
}