export default class Block {
    constructor(width, height, color, canvasWidth, canvasHeight) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.x = 0;
        this.y = 0;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getOffsetX() {
        return this.x;
    }


    getOffsetY() {
        return this.y;
    }

    getColor() {
        return this.color;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    randomPosition() {
        this.x = Math.floor(Math.floor(Math.random() * this.canvasWidth) / this.width) * this.width;
        this.y = Math.floor(Math.floor(Math.random() * this.canvasHeight) / this.height) * this.height;
    }
}