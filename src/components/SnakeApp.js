import React from 'react';
import { connect } from 'react-redux';
import SnakeCanvas from './SnakeCanvas.js';
import SnakeScoreBoard from './SnakeScoreBoard.js';
import { incrementScore } from '../actions/Score.js';
import Canvas from '../snake/Canvas.js';
import Food from '../snake/Food.js';
import Snake from '../snake/Snake.js';

class SnakeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speed:100,
            columns: 50,
            rows: 25,
        };
    }

    getBlockWidthHeight = (canvasWidth, canvasHeight, columns, rows) => {
        return {
            w: canvasWidth / columns,
            h: canvasHeight / rows
        };
    }

    start = () => {
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
                    this.props.dispatch(incrementScore());
                    this.Food.randomPosition();
                }
                this.Canvas.drawFood(this.Food);
            },
            this.state.speed
        );
    }

    move = (e) => {
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

    gameOver = () => {
        this.Canvas.gameOver();
        clearInterval(this.interval);
    }

    componentDidMount = () => {
        this.Canvas = new Canvas('container', 'black');

        const blockWidthHeight = this.getBlockWidthHeight(this.Canvas.getWidth(), this.Canvas.getHeight(), this.state.columns, this.state.rows)
        this.Food = new Food(blockWidthHeight.w, blockWidthHeight.h, "red", this.Canvas.getWidth(), this.Canvas.getHeight());
        this.Snake = new Snake(blockWidthHeight.w, blockWidthHeight.h, "green", this.Canvas.getWidth(), this.Canvas.getHeight());

        this.interval;
        this.start();
    }

    render() {
        return (
            <div>
                <SnakeCanvas></SnakeCanvas>
                <SnakeScoreBoard></SnakeScoreBoard>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        score: state.score,
    }
);

export default connect(mapStateToProps)(SnakeApp);