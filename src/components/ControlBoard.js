import React from 'react';
import { connect } from 'react-redux';

class ControlBoard extends React.Component {

    onClickStartOver = (e) => {
        e.preventDefault();
        this.props.reset();
    }

    render() {
        return (
            <div>
                <button
                    className="control__button"
                    disabled={!this.props.game.start}
                    onClick={this.onClickStartOver}
                >
                    {this.props.game.end ? 'Play Again' : 'Start Over'}
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