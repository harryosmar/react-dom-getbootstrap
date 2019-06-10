import Canvas from './Canvas.js';
import Block from './Block.js';

export default class Food extends Block {
    constructor(Canvas) {
        super(Canvas);

        this.Canvas = Canvas;
        this.color = 'red';
        this.spawn();
    }

    getOffsetX() {
        return this.x.toFixed(0);
    }


    getOffsetY() {
        return this.y.toFixed(0);
    }

    draw() {
        this.Canvas.getContext().fillStyle = this.color;
        this.Canvas.getContext().fillRect(this.x, this.y, this.width, this.height);
    }

    spawn() {
        this.x = Math.floor(Math.floor(Math.random() * this.Canvas.getWidth()) / this.width) * this.width; // random position mod s must be equal to 0
        this.y = Math.floor(Math.floor(Math.random() * this.Canvas.getHeight()) / this.height) * this.height;
    }
}