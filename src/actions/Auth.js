const ACTION_TYPE_SET_USERNAME = 'SET_USERNAME';
const setUsername = (username = '') => ({
    type: ACTION_TYPE_SET_USERNAME,
    username,
});

const ACTION_TYPE_SET_TOKEN_EXPIRED_TIME = 'SET_TOKEN_EXPIRED';
const setTokenExpired = (tokenExpiredTime = '') => ({
    type: ACTION_TYPE_SET_TOKEN_EXPIRED_TIME,
    tokenExpiredTime,
});

export {setUsername, setTokenExpired, ACTION_TYPE_SET_USERNAME, ACTION_TYPE_SET_TOKEN_EXPIRED_TIME};