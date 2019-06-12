import Block from './Block.js';

export default class Food extends Block {
    constructor(width, height, color, canvasWidth, canvasHeight) {
        super(width, height, color, canvasWidth, canvasHeight);

        this.randomPosition();
    }
}