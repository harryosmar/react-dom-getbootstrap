const gameReducerDefaultState = {
    start: false,
    end: false,
    reset: false,
    time: 0
};


export default (prevState = gameReducerDefaultState, action) => {
    switch (action.type) {
        case 'START':
            return {...prevState, start: true};
        case 'END':
            return {...prevState, end: true};
        case 'RESET':
            return {...prevState, start: false, end: false, reset: true, time: 0};
        case 'RESET_COMPLETE':
            return {...prevState, reset: false};
        case 'INCREMENT_TIME':
            return {...prevState, time: prevState.time + 1};
        default:
            return prevState;
    }
};