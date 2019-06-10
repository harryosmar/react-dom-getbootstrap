import Canvas from './Canvas.js';
import ScoreBoard from './ScoreBoard.js';
import Snake from './Snake.js';
import Food from './Food.js';

export default class Controller {
    constructor(speed) {
        this.speed = speed;
        this.Canvas = new Canvas('container');
        this.ScoreBoard = new ScoreBoard('score');
        this.Food = new Food(this.Canvas);
        this.Snake = new Snake(this.Canvas, this.ScoreBoard, this.Food);

        this.interval;
    }

    start() {
        // set score
        this.ScoreBoard.setScoreElement();

        // handle event keyboard pressed
        window.addEventListener('keydown', (e) => {
            this.move(e);
        });

        // start the animation
        this.interval = window.setInterval(
            () => {
                this.Canvas.draw();

                if (!this.Snake.draw()) {
                    this.gameOver();
                }

                this.Food.draw();
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