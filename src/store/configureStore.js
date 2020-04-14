import {createStore, combineReducers} from 'redux';
import AuthReducer from '../reducers/Auth.js';
import ClientsReducer from '../reducers/Clients.js';
import FiltersReducer from '../reducers/Filters.js';

const store = () => (
    createStore(combineReducers
        ({
            auth: AuthReducer,
            clients: ClientsReducer,
            filters: FiltersReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;