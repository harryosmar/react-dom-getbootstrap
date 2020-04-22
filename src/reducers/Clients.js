import {ACTION_TYPE_SET_CLIENTS, ACTION_TYPE_SET_CATEGORIES} from "../actions/Clients";
import ClientDTO from "../dto/client";
import {getCategoryList} from "../selectors/filters";
import {getClientsSession} from "../jwt/token";

const clientDTOs = JSON.parse(getClientsSession()).map((client) => {
    return new ClientDTO(client);
});

const clientsReducerDefaultState = {
    list: clientDTOs,
    categories: getCategoryList(clientDTOs),
};

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