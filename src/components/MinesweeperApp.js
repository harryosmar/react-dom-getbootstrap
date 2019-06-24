import React from 'react';
import { connect } from 'react-redux';
import { startGame, endGame, resetGame, resetGameComplete, incrementGameTime } from '../actions/Game.js';
import GameBoard from './GameBoard.js';
import ScoreBoard from './ScoreBoard.js';
import ControlBoard from './ControlBoard.js';

class MinesweeperApp extends React.Component {
    constructor(props) {
        super(props);
        this.timer;
    }

    componentDidMount() {
        // this.start();
    }

    start = () => {
        this.props.dispatch(startGame());
        this.timer = setInterval(() => { this.props.dispatch(incrementGameTime()); }, 1000);
    };

    end = () => {
        this.props.dispatch(endGame());
        clearInterval(this.timer);
    };

    reset = () => {
        clearInterval(this.timer);
        this.props.dispatch(resetGame());
        // reset all cells here
        this.props.dispatch(resetGameComplete());
    };

    render() {
        return (
            <div>
                <GameBoard start={this.start} end={this.end}/>
                <ScoreBoard />
                <ControlBoard reset={this.reset}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        game: state.game,
    }
);

export default connect(mapStateToProps)(MinesweeperApp);