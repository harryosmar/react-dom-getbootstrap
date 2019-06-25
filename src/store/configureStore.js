import { createStore, combineReducers } from 'redux';
import GameReducer from '../reducers/Game.js';
import TableReducer from '../reducers/Table.js';

const store = () => (
    createStore(combineReducers
        ({
            game: GameReducer,
            table: TableReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;