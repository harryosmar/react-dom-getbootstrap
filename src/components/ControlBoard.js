import React from 'react';
import { connect } from 'react-redux';
import { tooglePause } from '../actions/Game.js';

class ControlBoard extends React.Component {

    onClickStartOver = (e) => {
        e.preventDefault();
        this.props.reset();
    }

    onClickTooglePause = (e) => {
        e.preventDefault();
        this.props.dispatch(tooglePause());
        !this.props.game.pause ? this.props.pause() : this.props.resume()
    }

    render() {
        return (
            <div>
                <button
                    className="control__button"
                    disabled={!this.props.game.start}
                    onClick={this.onClickStartOver}
                >
                    {this.props.game.end ? (this.props.game.isWin ? 'You Win. Play Again' : 'Play Again') : 'Start Over'}
                </button>
                <button
                    className="control__button"
                    onClick={this.onClickTooglePause}
                    disabled={!this.props.game.start || this.props.game.end}
                >
                    {this.props.game.pause ? 'Resume' : 'Pause'}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        game: state.game,
    }
);
export default connect(mapStateToProps)(ControlBoard);