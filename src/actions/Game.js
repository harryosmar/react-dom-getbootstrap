const startGame = () => ({
    type: 'START'
});

const endGame = () => ({
    type: 'END'
});

const resetGame = () => ({
    type: 'RESET'
});

const resetGameComplete = () => ({
    type: 'RESET_COMPLETE'
});


const incrementGameTime = () => ({
    type: 'INCREMENT_TIME'
});

export { startGame, endGame, resetGame, resetGameComplete, incrementGameTime };