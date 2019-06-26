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

const winTheGame = () => ({
    type: 'WIN'
});

const tooglePause = () => ({
    type: 'TOOGLE_PAUSE'
});

export { startGame, endGame, resetGame, incrementGameTime, winTheGame, tooglePause };