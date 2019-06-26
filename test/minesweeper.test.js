import Minesweeper from '../src/minesweeper/Minesweeper.js';

test('should be able to create table', () => {
    const minesweeper = new Minesweeper(
        5,
        5,
        [0, 4, 5, 8, 13, 17, 24]
    );

    expect(minesweeper.getDisplayTable()).toEqual([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
    ]);

    expect(minesweeper._getTable()).toEqual([
        ['x', 2, 1, 2, 'x'],
        ['x', 2, 2, 'x', 3],
        [1, 2, 3, 'x', 2],
        [' ', 1, 'x', 3, 2],
        [' ', 1, 1, 2, 'x'],
    ]);
});

test('should be to generate all angles', () => {
    const minesweeper = new Minesweeper(
        8,
        8,
        []
    );

    expect(minesweeper._getAnglesArr(2, 2)).toEqual([
        {indexRow: 1, indexColumn: 2},
        {indexRow: 3, indexColumn: 2},
        {indexRow: 2, indexColumn: 1},
        {indexRow: 2, indexColumn: 3},
        {indexRow: 1, indexColumn: 1},
        {indexRow: 1, indexColumn: 3},
        {indexRow: 3, indexColumn: 1},
        {indexRow: 3, indexColumn: 3}
    ]);
});


test('win should be false when hit the mine and viceversa', () => {
    const minesweeper = new Minesweeper(
        2,
        2,
        [3]
    );
    expect(minesweeper._getTable()).toEqual([
        [1, 1],
        [1, 'x'],
    ]);

    expect(minesweeper.getDisplayTable()).toEqual([
        ['', ''],
        ['', ''],
    ]);

    expect(minesweeper.setPosition(0, 0)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, ''],
        ['', ''],
    ]);

    expect(minesweeper.setPosition(0, 1)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, 1],
        ['', ''],
    ]);

    expect(minesweeper.setPosition(1, 0)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, 1],
        [1, ''],
    ]);

    expect(minesweeper.setPosition(1, 1)).toBe(false);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, 1],
        [1, 'x'],
    ]);
    expect(minesweeper.getWinDisplayTable()).toEqual([
        [1, 1],
        [1, ''],
    ]);
    expect(minesweeper.isWin()).toBe(false);
});

test('win should be true', () => {
    const minesweeper = new Minesweeper(
        2,
        2,
        [3]
    );
    expect(minesweeper._getTable()).toEqual([
        [1, 1],
        [1, 'x'],
    ]);

    expect(minesweeper.getWinDisplayTable()).toEqual([
        [1, 1],
        [1, ''],
    ]);

    expect(minesweeper.getDisplayTable()).toEqual([
        ['', ''],
        ['', ''],
    ]);

    expect(minesweeper.setPosition(0, 0)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, ''],
        ['', ''],
    ]);

    expect(minesweeper.setPosition(0, 1)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, 1],
        ['', ''],
    ]);

    expect(minesweeper.setPosition(1, 0)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, 1],
        [1, ''],
    ]);

    expect(minesweeper.setPosition(1, 0)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, 1],
        [1, ''],
    ]);

    expect(minesweeper.isWin()).toBe(true);
});


test('should be able to open recursively the empty/0 cell value', () => {
    const minesweeper = new Minesweeper(
        8,
        8,
        [1, 5, 7, 20, 21, 28, 31, 41, 42, 56]
    );
    expect(minesweeper._getTable()).toEqual([
        [1, 'x', 1, ' ', 1, 'x', 2, 'x'],
        [1, 1, 1, 1, 3, 3, 3, 1],
        [' ', ' ', ' ', 2, 'x', 'x', 2, 1],
        [' ', ' ', ' ', 2, 'x', 3, 2, 'x'],
        [1, 2, 2, 2, 1, 1, 1, 1],
        [1, 'x', 'x', 1, ' ', ' ', ' ', ' '],
        [2, 3, 2, 1, ' ', ' ', ' ', ' '],
        ['x', 1, ' ', ' ', ' ', ' ', ' ', ' '],
    ]);

    expect(minesweeper.getWinDisplayTable()).toEqual([
        [1, '', 1, ' ', 1, '', 2, ''],
        [1, 1, 1, 1, 3, 3, 3, 1],
        [' ', ' ', ' ', 2, '', '', 2, 1],
        [' ', ' ', ' ', 2, '', 3, 2, ''],
        [1, 2, 2, 2, 1, 1, 1, 1],
        [1, '', '', 1, ' ', ' ', ' ', ' '],
        [2, 3, 2, 1, ' ', ' ', ' ', ' '],
        ['', 1, ' ', ' ', ' ', ' ', ' ', ' '],
    ]);

    expect(minesweeper.getDisplayTable()).toEqual([
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
    ]);


    expect(minesweeper.setPosition(5, 6)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 2, 1, 1, 1, 1],
        ['', '', '', 1, ' ', ' ', ' ', ' '],
        ['', 3, 2, 1, ' ', ' ', ' ', ' '],
        ['', 1, ' ', ' ', ' ', ' ', ' ', ' '],
    ]);

    expect(minesweeper.setPosition(2, 0)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        ['', '', '', '', '', '', '', ''],
        [1, 1, 1, 1, '', '', '', ''],
        [' ', ' ', ' ', 2, '', '', '', ''],
        [' ', ' ', ' ', 2, '', '', '', ''],
        [1, 2, 2, 2, 1, 1, 1, 1],
        ['', '', '', 1, ' ', ' ', ' ', ' '],
        ['', 3, 2, 1, ' ', ' ', ' ', ' '],
        ['', 1, ' ', ' ', ' ', ' ', ' ', ' '],
    ]);

    expect(minesweeper.setPosition(0, 2)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        ['', '', 1, '', '', '', '', ''],
        [1, 1, 1, 1, '', '', '', ''],
        [' ', ' ', ' ', 2, '', '', '', ''],
        [' ', ' ', ' ', 2, '', '', '', ''],
        [1, 2, 2, 2, 1, 1, 1, 1],
        ['', '', '', 1, ' ', ' ', ' ', ' '],
        ['', 3, 2, 1, ' ', ' ', ' ', ' '],
        ['', 1, ' ', ' ', ' ', ' ', ' ', ' '],
    ]);

    expect(minesweeper.setPosition(0, 4)).toBe(true);
    expect(minesweeper.getDisplayTable()).toEqual([
        ['', '', 1, '', 1, '', '', ''],
        [1, 1, 1, 1, '', '', '', ''],
        [' ', ' ', ' ', 2, '', '', '', ''],
        [' ', ' ', ' ', 2, '', '', '', ''],
        [1, 2, 2, 2, 1, 1, 1, 1],
        ['', '', '', 1, ' ', ' ', ' ', ' '],
        ['', 3, 2, 1, ' ', ' ', ' ', ' '],
        ['', 1, ' ', ' ', ' ', ' ', ' ', ' '],
    ]);

    expect(minesweeper.setPosition(0, 5)).toBe(false);
    expect(minesweeper.getDisplayTable()).toEqual([
        [1, 'x', 1, ' ', 1, 'x', 2, 'x'],
        [1, 1, 1, 1, 3, 3, 3, 1],
        [' ', ' ', ' ', 2, 'x', 'x', 2, 1],
        [' ', ' ', ' ', 2, 'x', 3, 2, 'x'],
        [1, 2, 2, 2, 1, 1, 1, 1],
        [1, 'x', 'x', 1, ' ', ' ', ' ', ' '],
        [2, 3, 2, 1, ' ', ' ', ' ', ' '],
        ['x', 1, ' ', ' ', ' ', ' ', ' ', ' '],
    ]);
});