import {ACTION_TYPE_SET_USERNAME} from "../actions/Auth";
import {getUserFromSession} from "../jwt/token";

const user = getUserFromSession();

const authDefaultState = {
    username: user ? user.name : '',
};

export default (prevState = authDefaultState, action) => {
    if (action.type === ACTION_TYPE_SET_USERNAME) {
        return {...prevState, username: action.username};
    }

    return prevState;
};