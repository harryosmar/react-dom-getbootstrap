const setRealTable = (table) => ({
    type: 'SET_REAL_TABLE',
    table: table
});

const updateDisplayTable = (table) => ({
    type: 'UPDATE_DISPLAY_TABLE',
    table: table
});

export { setRealTable, updateDisplayTable};