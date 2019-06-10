import Canvas from './Canvas.js';
import ScoreBoard from './ScoreBoard.js';
import Food from './Food.js';
import Block from './Block.js';

export default class Snake extends Block {
    constructor(Canvas, ScoreBoard, Food) {
        super(Canvas);

        this.trails = [];

        this.xs = 0;
        this.ys = 0;

        this.Canvas = Canvas;
        this.color = 'green';

        this.ScoreBoard = ScoreBoard;

        this.Food = Food;
    }

    draw() {
        this.x += this.xs;
        this.y += this.ys;

        this.checkPosition();

        // add new head position
        this.trails.unshift({
            x: this.x,
            y: this.y
        });

        /**
         * add new tail tail if snake eat the food
         */
        if (this.checkIfEatTheFood()) {
            this.ScoreBoard.increment();
            this.Food.spawn();
            this.grow();
        }

        this.Canvas.getContext().fillStyle = this.color;

        /**
         * draw the trails
         */
        let isHitTrail = false;
        for (let i in this.trails) {
            if (this.isHitTrailIndex(i)) {
                isHitTrail = true;
            }
            this.Canvas.getContext().fillRect(this.trails[i].x, this.trails[i].y, this.width, this.height);
        }

        // remove the last tail
        this.trails.pop();

        // console.log(this.Canvas.getHeight(), this.x, this.y, JSON.stringify(this.trails));

        return !isHitTrail;
    }

    isHitTrailIndex(i) {
        if (this.trails.length > 1 // snake length greater than 1
            && i > 0 // is not it's own head
            && this.trails[i].x === this.x && this.trails[i].y === this.y // position trail equal to the head
        ) {
            return true;
        }

        return false;
    }

    checkIfEatTheFood() {
        console.log(this.x,this.Food.getOffsetX(),this.y,this.Food.getOffsetY())
        return this.x.toFixed(0) === this.Food.getOffsetX() && this.y.toFixed(0) === this.Food.getOffsetY();
    }


    checkPosition() {
        if (this.y < 0) {
            // hit the upper wall
            this.y = this.Canvas.getHeight() - this.height;
        } else if (this.y >= this.Canvas.getHeight()) {
            // hit the bottom wall
            this.y = 0;
        }

        if (this.x < 0) {
            // hit the lef wall
            this.x = this.Canvas.getWidth() - this.width;
        } else if (this.x >= this.Canvas.getWidth()) {
            // hit the right wall
            this.x = 0;
        }
    }

    grow() {
        if (this.xs > 0) {
            // current flow to the right
            // add new tail to the left
            this.trails.push({
                x: this.x - (this.trails.length * this.width),
                y: this.y
            });
        } else if (this.xs < 0) {
            // current flow to the left
            // add new tail to the right
            this.trails.push({
                x: this.x + (this.trails.length * this.width),
                y: this.y
            });
        } else if (this.ys > 0) {
            // current flow to the bottom
            // add new tail to the top
            this.trails.push({
                x: this.x,
                y: this.y - (this.trails.length * this.height)
            });
        } else if (this.ys < 0) {
            // current flow to the top
            // add new tail to the bottom
            this.trails.push({
                x: this.x,
                y: this.y + (this.trails.length * this.height)
            });
        }
    }

    goUp() {
        this.xs = 0;
        this.ys = this.ys !== 0 ? this.ys : -1 * this.height;
    }

    goDown() {
        this.xs = 0;
        this.ys = this.ys !== 0 ? this.ys : this.height;
    }

    goLeft() {
        this.ys = 0;
        this.xs = this.xs !== 0 ? this.xs : -1 * this.width;
    }

    goRight() {
        this.ys = 0;
        this.xs = this.xs !== 0 ? this.xs : this.width;
    }

    pause() {
        this.xs = 0;
        this.xy = 0;
    }
}