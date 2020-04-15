import {APP_NAME, HEADER_TITLE} from "../config/app";

const appDefaultState = {
    name: APP_NAME,
    header: {
        title : HEADER_TITLE
    },
};


export default (prevState = appDefaultState) => {
    return prevState;
};