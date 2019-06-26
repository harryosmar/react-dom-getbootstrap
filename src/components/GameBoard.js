import React from 'react';
import { connect } from 'react-redux';
import Minesweeper from '../minesweeper/Minesweeper.js';
import {updateDisplayTable} from '../actions/Table.js';
import { winTheGame } from '../actions/Game.js';

class GameBoard extends React.Component {
    render() {
        return (
            <div>
                <table className="board__table">
                    <tbody>
                        {this.props.table.display.map(
                            (row, rowIndex) => (
                                <tr key={rowIndex} className="board__table__tr">{ row.map((value, columnIndex) => (
                                    <td
                                        key={columnIndex}
                                        className="board__table__tr__td"
                                    >
                                        <button
                                            className={'board__table__tr__td_button' + (this.props.game.pause ? ' board__table__tr__td_button--pause' : '')}
                                            onClick={(e) => {
                                                e.preventDefault();

                                                if (!this.props.game.start) {
                                                    this.props.start();
                                                }

                                                const isGameOver = !this.props.minesweeper.setPosition(rowIndex, columnIndex);
                                                const isWin = this.props.minesweeper.isWin();
                                                if (isGameOver || isWin) {
                                                    this.props.end();
                                                }

                                                if (isWin) {
                                                    this.props.dispatch(winTheGame());
                                                }

                                                this.props.dispatch(updateDisplayTable(
                                                    this.props.minesweeper.getDisplayTable()
                                                ));
                                            }}
                                            disabled={value !== this.props.minesweeper.getInitialDisplayValue() || this.props.game.isWin === true}
                                        >
                                            {value}
                                        </button>
                                    </td>
                                )) }</tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        game: state.game,
        table: state.table,
    }
);

export default connect(mapStateToProps)(GameBoard);