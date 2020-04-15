const ACTION_TYPE_SET_CLIENTS = 'SET_CLIENTS';
const setClients = (clients = []) => ({
    type: ACTION_TYPE_SET_CLIENTS,
    list: clients,
});

const ACTION_TYPE_SET_CATEGORIES = 'SET_CATEGORIES';
const setCategories = (categories = []) => ({
    type: ACTION_TYPE_SET_CATEGORIES,
    categories,
});

export {setClients, setCategories, ACTION_TYPE_SET_CLIENTS, ACTION_TYPE_SET_CATEGORIES};