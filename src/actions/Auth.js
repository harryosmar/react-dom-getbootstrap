const ACTION_TYPE_SET_USERNAME = 'SET_USERNAME';
const setUsername = (username = '') => ({
    type: ACTION_TYPE_SET_USERNAME,
    username,
});

export {setUsername, ACTION_TYPE_SET_USERNAME};