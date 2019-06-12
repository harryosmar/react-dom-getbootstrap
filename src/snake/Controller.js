import Canvas from './Canvas.js';
import ScoreBoard from './ScoreBoard.js';
import Snake from './Snake.js';
import Food from './Food.js';
import Score from './Score.js';
import { throwStatement } from '@babel/types';

export default class Controller {
    constructor(speed, columns, rows) {
        this.speed = speed;
        this.Canvas = new Canvas('container', 'black');
        this.ScoreBoard = new ScoreBoard('score', new Score());

        const blockWidthHeight = this.getBlockWidthHeight(this.Canvas.getWidth(), this.Canvas.getHeight(), columns, rows)
        this.Food = new Food(blockWidthHeight.w, blockWidthHeight.h, "red", this.Canvas.getWidth(), this.Canvas.getHeight());
        this.Snake = new Snake(blockWidthHeight.w, blockWidthHeight.h, "green", this.Canvas.getWidth(), this.Canvas.getHeight());

        this.interval;
    }

    getBlockWidthHeight(canvasWidth, canvasHeight, columns, rows) {
        return {
            w: canvasWidth / columns,
            h: canvasHeight / rows
        };
    }

    start() {
        // set score
        this.ScoreBoard.setScore();

        // handle event keyboard pressed
        window.addEventListener('keydown', (e) => {
            this.move(e);
        });

        // start the animation
        this.interval = window.setInterval(
            () => {
                this.Canvas.draw();

                if (this.Snake.isHitTrail(this.Snake.getTrails(), this.Snake.getOffsetX(), this.Snake.getOffsetY())) {
                    this.gameOver();
                }

                const isEatTheFood = this.Snake.isEatTheFood(this.Food.getOffsetX(), this.Food.getOffsetY());
                this.Snake.move(
                    isEatTheFood
                );

                this.Canvas.drawSnake(this.Snake);

                if (isEatTheFood) {
                    this.ScoreBoard.increment();
                    this.Food.randomPosition();
                }
                this.Canvas.drawFood(this.Food);
            },
            this.speed
        );
    }

    move(e) {
        switch (e.keyCode) {
            case 38: //up
                this.Snake.goUp();
                break;
            case 40: //down
                this.Snake.goDown();
                break;
            case 37: //left
                this.Snake.goLeft();
                break;
            case 39: //right
                this.Snake.goRight();
                break;
            case 32: //space
                this.Snake.pause();
                break;
        }
    }

    gameOver() {
        this.Canvas.gameOver();
        clearInterval(this.interval);
    }
}