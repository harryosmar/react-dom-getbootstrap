import {getApiCompleteUrl} from "../config/app";

const axios = require('axios').default;
const API_LOGIN_PATH = 'login';

const doLogin = ({username = '', password = ''} = {}) => {
    return axios.post(
        getApiCompleteUrl(API_LOGIN_PATH),
        {
            username,
            password,
        }
    );
};

export default doLogin;