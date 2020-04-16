import {APP_CLIENT_ID, getAppPrivateKey} from "../config/app";

const jwt = require('jsonwebtoken');
const moment = require('moment');

const getRequestToken = () => {
    const now = moment();
    const expireAt = now.add(5, "minute");
    const token = jwt.sign(
        {exp: expireAt.unix()},
        getAppPrivateKey(),
        {algorithm: 'RS256'}
    );

    return {
        'Authorization': `${token}`,
        'X-Client-ID': APP_CLIENT_ID,
    };
};

export {getRequestToken};