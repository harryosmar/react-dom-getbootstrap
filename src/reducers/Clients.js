import {ACTION_TYPE_SET_CLIENTS, ACTION_TYPE_SET_CATEGORIES} from "../actions/Clients";
import {getClientsFromSession} from "../jwt/token";

const clientsReducerDefaultState = getClientsFromSession();

export default (prevState = clientsReducerDefaultState, action) => {
    switch (action.type) {
        case ACTION_TYPE_SET_CLIENTS:
            return {...prevState, list: action.list};
        case ACTION_TYPE_SET_CATEGORIES:
            return {...prevState, categories: action.categories};
        default:
            return prevState;
    }
};