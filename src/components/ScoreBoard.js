import React from 'react';
import { connect } from 'react-redux';

const ScoreBoard = (props) => (
    <div>
        {props.game.time}
    </div>
);

const mapStateToProps = (state) => (
    {
        game: state.game,
    }
);

export default connect(mapStateToProps)(ScoreBoard);