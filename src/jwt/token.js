import {APP_CLIENT_ID, getApiPublicKey, getAppPrivateKey} from "../config/app";
import {getSession, removeSession, setSession} from "../auth/session";
import {getClientsFromJSON} from "../transformers/token";
import {generateToken} from "../factories/token";
import {getUserFromToken} from "../transformers/user";

const moment = require('moment');

const getClientRequestAuthorizeToken = () => {
    return generateToken(moment(), getAppPrivateKey(), APP_CLIENT_ID);
};

const SESSION_TOKEN_KEY = 'access_token';
const SESSION_CLIENTS_KEY = 'clients';

const setTokenSession = (jwtToken) => {
    setSession(SESSION_TOKEN_KEY, jwtToken);
};

const setClientsSession = (clients) => {
    setSession(SESSION_CLIENTS_KEY, clients);
};

const removeTokenSession = () => {
    removeSession(SESSION_TOKEN_KEY);
};

const removeClientsSession = () => {
    removeSession(SESSION_CLIENTS_KEY);
};

const getTokenSession = () => {
    return getSession(SESSION_TOKEN_KEY);
};

const getClientsSession = () => {
    return getSession(SESSION_CLIENTS_KEY);
};

const getUserFromSession = () => {
    return getUserFromToken(getTokenSession(), getApiPublicKey());
};

const getClientsFromSession = () => {
    return getClientsFromJSON(
        getClientsSession()
    );
};


export {
    getClientRequestAuthorizeToken,
    setTokenSession,
    removeTokenSession,
    getUserFromSession,
    getClientsFromSession,
    setClientsSession,
    removeClientsSession,
};