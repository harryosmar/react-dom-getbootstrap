import ClientDTO from "../dto/client";
import {getCategoryList} from "../selectors/filters";

const nullClients = {
    list: [],
    categories: [],
};

const getClientsFromJSON = (clientsJson) => {
    try {
        const clientsArr = JSON.parse(clientsJson);

        if (!clientsArr) {
            return nullClients;
        }

        const clients = clientsArr.map((client) => {
            return new ClientDTO(client);
        });

        return {
            list: clients,
            categories: getCategoryList(clients),
        };
    } catch (e) {
        return nullClients;
    }
};

export {getClientsFromJSON};