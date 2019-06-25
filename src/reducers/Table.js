const tableDefaultState = {
    display: [],
    real: []
};


export default (prevState = tableDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_DISPLAY_TABLE':
            return {...prevState, display: action.table};
        case 'SET_REAL_TABLE':
            return {...prevState, real: action.table};
        default:
            return prevState;
    }
};