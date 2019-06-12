import Score from './Score.js';

export default class ScoreBoard {
    constructor(containerId, Score) {
        this.scoreElement = document.getElementById(containerId);
        this.Score = Score;
    }

    increment() {
        this.scoreElement.innerHTML = this.Score.increment();
    }

    reset() {
        this.scoreElement.innerHTML = this.Score.reset();
    }

    setScore() {
        this.scoreElement.innerHTML = this.Score.getScore();
    }
}