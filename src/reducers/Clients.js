import {ACTION_TYPE_SET_CLIENTS} from "../actions/Clients";


const clientsReducerDefaultState = [];


export default (prevState = clientsReducerDefaultState, action) => {
    if (action.type === ACTION_TYPE_SET_CLIENTS) {
        return action.clients;
    }

    return prevState;
};