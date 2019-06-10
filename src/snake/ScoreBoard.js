export default class ScoreBoard {
    /**
     * @todo implement typescript for class arg
     */
    constructor(containerId) {
        this.scoreElement = document.getElementById(containerId);
        /**
         * todo: modify using react state
         */
        this.score = 0;
    }

    increment() {
        this.score++;
        this.setScoreElement();
    }

    reset() {
        this.score = 0;
        this.setScoreElement();
    }

    setScoreElement() {
        this.scoreElement.innerHTML = this.score;
    }
}