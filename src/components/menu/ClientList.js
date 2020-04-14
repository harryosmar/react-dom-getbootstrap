import React from 'react';
import Client from './Client.js';
import {connect} from "react-redux";
import {getVisibleClients} from "../../selectors/clients";

class ClientList extends React.Component {
    render() {
        return <div className="row mt-4">
            {this.props.clients.map(client => (
                <Client {
                    ...{
                        ...client,
                        ...{url: client.generateUrl()}
                    }
                }/>
            ))}
        </div>;
    }
}

const mapStateToProps = (state) => (
    {
        clients: getVisibleClients(state.clients, state.filters),
    }
);

export default connect(mapStateToProps)(ClientList);