import {ACTION_TYPE_SET_TOKEN_EXPIRED_TIME, ACTION_TYPE_SET_USERNAME} from "../actions/Auth";

const authDefaultState = {
    username: '',
    tokenExpiredTime: '',
};


export default (prevState = authDefaultState, action) => {
    switch (action.type) {
        case ACTION_TYPE_SET_USERNAME:
            return {...prevState, username: action.username};
        case ACTION_TYPE_SET_TOKEN_EXPIRED_TIME:
            return {...prevState, tokenExpiredTime: action.tokenExpiredTime};
        default:
            return prevState;
    }
};