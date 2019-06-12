import Block from './Block.js';

export default class Snake extends Block {
    constructor(width, height, color, canvasWidth, canvasHeight) {
        super(width, height, color, canvasWidth, canvasHeight);

        this.trails = [{x:this.x, y: this.y}];
        this.xs = 0;
        this.ys = 0;
    }

    move(isEatTheFood = false) {
        // add new head position
        this.trails.unshift(
            this.getNewHeadPosition(this.xs, this.ys)
        );

        // remove the last tail
        if(!isEatTheFood) {
            this.trails.pop();
        }

        return this.trails;
    }

    getTrails() {
        return this.trails;
    }

    isHitTrail(trails, headOffsetX, headOffsetY) {
        // snake length greater than 1
        if (trails.length <= 1) {
            return false;
        }

        for (let i = 1; i < trails.length; i++) {
            if (this.isHitTrailIndex(
                    trails[i],
                    headOffsetX,
                    headOffsetY
                )
            ) {
                return true;
            }
        }

        return false;
    }

    isHitTrailIndex(trail, headOffsetX, headOffsetY) {
        // position trail equal to the head
        if (trail.x.toFixed(0) === headOffsetX.toFixed(0)
            && trail.y.toFixed(0) === headOffsetY.toFixed(0)
        ) {
            return true;
        }

        return false;
    }

    getNewHeadPosition(xs, ys) {
        this.x += xs;
        this.y += ys;

        if (this.y < 0) {
            // hit the upper wall
            this.y = this.canvasHeight - this.height;
        } else if (this.y >= this.canvasHeight) {
            // hit the bottom wall
            this.y = 0;
        }

        if (this.x < 0) {
            // hit the lef wall
            this.x = this.canvasWidth - this.width;
        } else if (this.x >= this.canvasWidth) {
            // hit the right wall
            this.x = 0;
        }

        return {
            x: this.x,
            y: this.y
        };
    }

    isEatTheFood(foodOffsetX, foodOffsetY) {
        return this.x.toFixed(0) === foodOffsetX.toFixed(0)
            && this.y.toFixed(0) === foodOffsetY.toFixed(0);
    }

    goUp() {
        this.xs = 0;
        this.ys = this.ys > 0 ? this.ys : -1 * this.height;
    }

    goDown() {
        this.xs = 0;
        this.ys = this.ys < 0 ? this.ys : this.height;
    }

    goLeft() {
        this.ys = 0;
        this.xs = this.xs > 0 ? this.xs : -1 * this.width;
    }

    goRight() {
        this.ys = 0;
        this.xs = this.xs < 0 ? this.xs : this.width;
    }

    pause() {
        this.xs = 0;
        this.xy = 0;
    }
}