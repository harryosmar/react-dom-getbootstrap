import React from "react";
import {removeSession} from "../../auth/session";
import {Redirect} from "react-router-dom";
import {removeClientsSession, removeTokenSession} from "../../jwt/token";
import {connect} from "react-redux";
import {setUsername} from "../../actions/Auth";
import {setCategories, setClients} from "../../actions/Clients";

class Logout extends React.Component {
    clearSession = () => {
        removeTokenSession();
        removeClientsSession();
    };

    componentWillMount() {
        this.clearSession();
        this.props.dispatch(setUsername(''));
        this.props.dispatch(setClients([]));
        this.props.dispatch(setCategories([]));
    }

    render() {
        return <Redirect
            to={{
                pathname: "/login",
                state: {from: this.props.location}
            }}
        />;
    }
}

const mapStateToProps = (state) => (
    {
        clients: state.clients,
        auth: state.auth,
    }
);

export default connect(mapStateToProps)(Logout);