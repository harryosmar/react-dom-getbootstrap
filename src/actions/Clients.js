const ACTION_TYPE_SET_CLIENTS = 'SET_CLIENTS';
const setClients = (clients = []) => ({
    type: ACTION_TYPE_SET_CLIENTS,
    clients,
});

export {setClients, ACTION_TYPE_SET_CLIENTS};