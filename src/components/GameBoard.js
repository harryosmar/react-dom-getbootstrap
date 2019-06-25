import React from 'react';
import { connect } from 'react-redux';
import Minesweeper from '../minesweeper/Minesweeper.js';
import {updateDisplayTable} from '../actions/Table.js';

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
                                            className="board__table__tr__td_button"
                                            onClick={(e) => {
                                                e.preventDefault();

                                                if (!this.props.game.start) {
                                                    this.props.start();
                                                }

                                                const isGameOver = !this.props.minesweeper.setPosition(rowIndex, columnIndex);
                                                if (isGameOver) {
                                                    this.props.end();
                                                }

                                                this.props.dispatch(updateDisplayTable(
                                                    this.props.minesweeper.getDisplayTable()
                                                ));
                                            }}
                                            disabled={value !== this.props.minesweeper.getInitialDisplayValue()}
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