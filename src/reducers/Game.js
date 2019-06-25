const gameReducerDefaultState = {
    start: false,
    end: false,
    time: 0,
    columns: 8,
    rows: 8,
};


export default (prevState = gameReducerDefaultState, action) => {
    switch (action.type) {
        case 'START':
            return {...prevState, start: true};
        case 'END':
            return {...prevState, end: true};
        case 'RESET':
            return {...prevState, start: false, end: false, time: 0};
        case 'INCREMENT_TIME':
            return {...prevState, time: prevState.time + 1};
        default:
            return prevState;
    }
};