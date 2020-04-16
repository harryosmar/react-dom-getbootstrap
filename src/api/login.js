import {getApiCompleteUrl} from "../config/app";
import qs from 'qs';

const API_LOGIN_PATH = 'login';

const doLogin = ({username = '', password = ''} = {}) => {
    return axios({
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: qs.stringify({
            username,
            password,
        }),
        params: {
            XDEBUG_SESSION_START: 'PHPSTORM',
            response_type: 'code',
            client_id: 'myawesomeapp',
            redirect_uri: 'http://localhost:8085/api/authorize/callback',
            scope: '',
            state: '',
        },
        url: 'authorize',
    });
};

export default doLogin;