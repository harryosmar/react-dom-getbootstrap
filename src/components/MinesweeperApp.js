import React from 'react';
import { connect } from 'react-redux';
import { startGame, endGame, resetGame, incrementGameTime } from '../actions/Game.js';
import GameBoard from './GameBoard.js';
import ScoreBoard from './ScoreBoard.js';
import ControlBoard from './ControlBoard.js';
import Minesweeper from '../minesweeper/Minesweeper.js';
import {setRealTable, updateDisplayTable} from '../actions/Table.js';

class MinesweeperApp extends React.Component {
    constructor(props) {
        super(props);

        this.timer;
        this.minesweeper;
        this.generateMinesweeper();
    }

    componentDidMount() {
        this.generateMinesweeper();
    }

    generateMinesweeper = () => {
        const minesPosition = new Array(this.props.game.rows * this.props.game.columns).fill(null).map( (value, index) => index);
        this.minesweeper = new Minesweeper(this.props.game.rows, this.props.game.columns, _.sampleSize(minesPosition, 10));

        this.props.dispatch(setRealTable(this.minesweeper._getTable()));
        this.props.dispatch(updateDisplayTable(this.minesweeper.getDisplayTable()));

        return this.minesweeper;
    }

    start = () => {
        this.props.dispatch(startGame());
        this.resume();
    };

    pause = () => {
        clearInterval(this.timer);
    }

    resume = () => {
        this.timer = setInterval(() => { this.props.dispatch(incrementGameTime()); }, 1000);
    }

    end = () => {
        this.props.dispatch(endGame());
        this.pause();
    };

    reset = () => {
        this.pause();
        this.props.dispatch(resetGame());
        this.generateMinesweeper();
    };

    render() {
        return (
            <div className="container clearfix">
                <div className="container__left">
                    <div className="board">
                        <GameBoard start={this.start} end={this.end} minesweeper={this.minesweeper}/>
                    </div>
                </div>
                <div className="container__right">
                    <div className="timer">
                        <ScoreBoard />
                    </div>
                    <div className="control">
                        <ControlBoard reset={this.reset} pause={this.pause} resume={this.resume}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        game: state.game,
        table: state.table,
    }
);

export default connect(mapStateToProps)(MinesweeperApp);