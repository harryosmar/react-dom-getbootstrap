export default (prevState = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return prevState + 1;
        case 'RESET':
            return 0;
        default:
            return prevState;
    }
};