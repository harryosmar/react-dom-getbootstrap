import {ACTION_TYPE_SET_CATEGORY, ACTION_TYPE_SET_TEXT_FILTER} from "../actions/Filters";

const filtersReducerDefaultState = {
    text: '',
    category: '',
};

export default (prevState = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case ACTION_TYPE_SET_TEXT_FILTER:
            return {...prevState, text: action.text};
        case ACTION_TYPE_SET_CATEGORY:
            return {...prevState, category: action.category};
        default:
            return prevState;
    }
};