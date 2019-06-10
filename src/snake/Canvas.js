export default class Canvas {
    /**
     * @todo implement typescript for class arg
     */
    constructor(containerId) {
        this.canvas = document.getElementById(containerId);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - 54;
        this.ctx = this.canvas.getContext('2d');
        this.color = 'black';
        this.colorGameOver = 'red';
        this.columns = 5;
        this.rows = 10;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.ctx;
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }

    gameOver() {
        this.ctx.fillStyle = this.colorGameOver;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getColumns() {
        return this.columns;
    }

    getRows() {
        return this.rows;
    }
}