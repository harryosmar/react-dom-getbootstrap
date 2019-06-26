import React from 'react';
import { connect } from 'react-redux';
import { secondsToTime } from '../formatter/timeFormatter.js';

const ScoreBoard = (props) => (
    <div>
        Time {secondsToTime(props.game.time)}
    </div>
);

const mapStateToProps = (state) => (
    {
        game: state.game,
    }
);

export default connect(mapStateToProps)(ScoreBoard);