const startGame = () => ({
    type: 'START'
});

const endGame = () => ({
    type: 'END'
});

const resetGame = () => ({
    type: 'RESET'
});

const incrementGameTime = () => ({
    type: 'INCREMENT_TIME'
});

export { startGame, endGame, resetGame, incrementGameTime };