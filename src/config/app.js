const APP_ENV = process.env.APP_ENV;
const APP_NAME = process.env.APP_NAME;
const HEADER_TITLE = process.env.APP_HEADER_TITLE;
const API_BASE_URL = process.env.API_BASE_URL;
const APP_PRIVATE_KEY_ENCODED = process.env.APP_PRIVATE_KEY;
const API_PUBLIC_KEY_ENCODED = process.env.API_PUBLIC_KEY;
const APP_CLIENT_ID = process.env.APP_CLIENT_ID;

const getApiCompleteUrl = (path = '') => {
    return !path ? API_BASE_URL : `${API_BASE_URL}/${path}`;
};

const getAppPrivateKey = () => {
    return atob(APP_PRIVATE_KEY_ENCODED);
};

const getApiPublicKey = () => {
    return atob(API_PUBLIC_KEY_ENCODED);
};

export {APP_ENV, APP_NAME, HEADER_TITLE, API_BASE_URL, APP_CLIENT_ID, getApiCompleteUrl, getAppPrivateKey, getApiPublicKey};