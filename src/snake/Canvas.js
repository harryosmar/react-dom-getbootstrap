import Snake from './Snake.js';
import Food from './Food.js';

export default class Canvas {
    /**
     * @todo implement typescript for class arg
     */
    constructor(containerId, bgColor) {
        this.canvas = document.getElementById(containerId);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - 54;
        this.ctx = this.canvas.getContext('2d');
        this.bgColor = bgColor;
        this.colorGameOver = 'red';
    }

    draw() {
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSnake(snake) {
        const trails = snake.getTrails();
        this.ctx.fillStyle = snake.getColor();

        for (let i in trails) {
            this.ctx.fillRect(trails[i].x, trails[i].y, snake.getWidth(), snake.getHeight());
        }
    }

    drawFood(food) {
        this.ctx.fillStyle = food.getColor();
        this.ctx.fillRect(food.getOffsetX(), food.getOffsetY(), food.getWidth(), food.getHeight());
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
}