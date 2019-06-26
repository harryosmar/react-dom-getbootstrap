import _ from 'lodash';
export default class Minesweeper {
    constructor(rowsLength = 8, columnsLength = 8, minePositions = []) {
        this.columnsLength = columnsLength;
        this.rowsLength = rowsLength;
        this.minePositions = minePositions;

        this.mineValue = 'x';
        this.notMineNorHintValue = ' ';
        this.initialDisplayValue = '';
        this.notMineNorHintDisplayValue = ' ';

        this.table = new Array(this.rowsLength).fill(this.notMineNorHintValue).map(row => new Array(this.columnsLength).fill(this.notMineNorHintValue));
        this.displayTable = new Array(this.rowsLength).fill(this.initialDisplayValue).map(row => new Array(this.columnsLength).fill(this.initialDisplayValue));
        this.winDisplayTable;
        this._initMinesPlacement(minePositions);
    }

    _initMinesPlacement(minePositions = []) {
        minePositions.forEach((minePosition) => {
            const row = Math.floor(minePosition / this.rowsLength);
            const column = minePosition % this.rowsLength;
            this.table[row][column] = this.mineValue;
        });

        this.table = this._generateHintNumbers(this.table);
        this.winDisplayTable = _.cloneDeep(this.table).map(row => row.map(value => value === this.mineValue ? this.initialDisplayValue : value));

        return this.table;
    }

    _getTable() {
        return this.table;
    }

    _getAnglesArr(indexRow, indexColumn) {
        const angles = [];

        angles.push({indexRow: indexRow - 1, indexColumn}); // top
        angles.push({indexRow: indexRow + 1, indexColumn}); // bottom
        angles.push({indexRow, indexColumn: indexColumn - 1}); // left
        angles.push({indexRow, indexColumn: indexColumn + 1}); // rigth
        angles.push({indexRow: indexRow - 1, indexColumn: indexColumn - 1}); // top left
        angles.push({indexRow: indexRow - 1, indexColumn: indexColumn + 1}); // top right
        angles.push({indexRow: indexRow + 1, indexColumn: indexColumn - 1}); // bottom left
        angles.push({indexRow: indexRow + 1, indexColumn: indexColumn + 1}); // bottom right

        return angles;
    }

    _generateHintNumbers(table) {
        table.forEach((row, indexRow) => {
            row.forEach((cellValue, indexColumn) => {

                if (cellValue !== this.mineValue) {
                    let hintNumbers = 0;

                    this._getAnglesArr(indexRow, indexColumn).forEach((angle) => {
                        hintNumbers += typeof table[angle.indexRow] !== 'undefined' && table[angle.indexRow][angle.indexColumn] === this.mineValue ? 1 : 0;
                    });

                    table[indexRow][indexColumn] = hintNumbers === 0 ? this.notMineNorHintValue : hintNumbers;
                }
            });
        });

        return table;
    }

    _openCellResursive(indexRow, indexColumn, table, displayTable, tempTable) {
        this._getAnglesArr(indexRow, indexColumn).forEach((angle) => {
            if (typeof table[angle.indexRow] !== 'undefined'
                && angle.indexColumn >= 0 && angle.indexColumn < this.columnsLength
                && tempTable[angle.indexRow][angle.indexColumn] === 0
            ) {
                const cellAngleValue = this.table[angle.indexRow][angle.indexColumn];
                tempTable[angle.indexRow][angle.indexColumn] = 1;

                if (cellAngleValue === this.notMineNorHintValue) {
                    displayTable[angle.indexRow][angle.indexColumn] = this.notMineNorHintDisplayValue;
                    this._openCellResursive(
                        angle.indexRow,
                        angle.indexColumn,
                        table,
                        displayTable,
                        tempTable
                    );
                } else {
                    displayTable[angle.indexRow][angle.indexColumn] = cellAngleValue;
                }
            }
        });

        return displayTable;
    }

    setPosition(rowNumber, colNumber) {
        const cellValue = this.table[rowNumber][colNumber];
        this.displayTable[rowNumber][colNumber] = cellValue === this.notMineNorHintValue ? this.notMineNorHintDisplayValue : cellValue;

        if (cellValue === this.notMineNorHintValue) {
            // tempTable used to store flag for cell has been processed
            const tempTable = new Array(this.rowsLength).fill(0).map(row => new Array(this.columnsLength).fill(0));
            tempTable[rowNumber][colNumber] = 1;

            this.displayTable = this._openCellResursive(
                rowNumber,
                colNumber,
                this.table,
                this.displayTable,
                tempTable
            );
        }

        const isHitTheMine = cellValue === this.mineValue;

        if (isHitTheMine) {
            this.displayTable = this.table;
        }

        return !isHitTheMine;
    }

    getDisplayTable() {
        return this.displayTable;
    }

    getWinDisplayTable() {
        return this.winDisplayTable;
    }

    getInitialDisplayValue() {
        return this.initialDisplayValue;
    }

    isWin() {
        return _.isEqual(this.getDisplayTable(), this.getWinDisplayTable());
    }
}