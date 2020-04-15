import React from 'react';
import Client from './Client.js';
import ClientDTO from '../../dto/client';
import {connect} from "react-redux";
import {getVisibleClients} from "../../selectors/clients";
import {setClients} from "../../actions/Clients";
import {setCategoryFilter} from "../../actions/Filters";

class ClientList extends React.Component {
    render() {
        return <div className="row mt-4">
            {this.props.clients.map(client => (
                <Client key={client.client_id} {
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
        clients: getVisibleClients(state.clients.list, state.filters),
    }
);

export default connect(mapStateToProps)(ClientList);