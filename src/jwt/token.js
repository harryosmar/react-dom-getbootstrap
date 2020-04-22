import {APP_CLIENT_ID, getApiPublicKey, getAppPrivateKey} from "../config/app";
import {getSession, removeSession, setSession} from "../auth/session";

const jwt = require('jsonwebtoken');
const moment = require('moment');

const getClientRequestAuthorizeToken = () => {
    const now = moment();
    const expireAt = now.add(5, "minute");
    const token = jwt.sign(
        {exp: expireAt.unix()},
        getAppPrivateKey(),
        {algorithm: 'RS256'}
    );

    // setTokenSession(token);
    // console.log(getPayloadFromApiToken(getTokenSession()));

    return {
        'Authorization': `${token}`,
        'X-Client-ID': APP_CLIENT_ID,
    };
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

const getPayloadFromApiToken = (token) => {
    return jwt.verify(token, getApiPublicKey());
};

const getUserFromSession = () => {
    try {
        const payload = getPayloadFromApiToken(
            getTokenSession()
        );

        return {
            id: payload.uid,
            username: payload.username,
            name: payload.name,
        };
    } catch (error) {
        return false;
    }
};


export {getClientRequestAuthorizeToken, setTokenSession, removeTokenSession, getUserFromSession, setClientsSession, removeClientsSession, getClientsSession};