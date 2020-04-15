const APP_ENV = process.env.APP_ENV;
const APP_NAME = process.env.APP_NAME;
const HEADER_TITLE = process.env.APP_HEADER_TITLE;
const API_BASE_URL = process.env.API_BASE_URL;

const getApiCompleteUrl = (path = '') => {
    return !path ? API_BASE_URL : `${API_BASE_URL}/${path}`;
};

export {APP_ENV, APP_NAME, HEADER_TITLE, getApiCompleteUrl};