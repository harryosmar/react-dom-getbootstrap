import React from 'react';
import { connect } from 'react-redux';

class SnakeScoreBoard extends React.Component {
    render() {
        return (
            <div className="container container-scoreboard">
                Score : <span id="score" className="container-scoreboard__scrore">{this.props.score}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        score: state.score,
    }
);

export default connect(mapStateToProps)(SnakeScoreBoard);