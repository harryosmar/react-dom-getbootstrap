import Canvas from './Canvas.js';

export default class Block {
    constructor(Canvas) {
        this.Canvas = Canvas;

        const columns = this.Canvas.getColumns();
        const rows = this.Canvas.getRows();
        const canvasWidth = this.Canvas.getWidth();
        const canvasHeight = this.Canvas.getHeight();

        this.width = canvasWidth / columns;
        this.height = canvasHeight / rows;

        this.x = 0;
        this.y = 0;
    }
}