export default class Score {
    constructor() {
        /**
         * todo: modify using react state
         */
        this.score = 0;
    }

    increment() {
        return ++this.score;
    }

    reset() {
        this.score = 0;
    }

    getScore() {
        return this.score;
    }
}