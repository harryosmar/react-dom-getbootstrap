import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import MinesweeperApp from './components/MinesweeperApp.js';
import GameReducer from './reducers/Game.js';


const store = createStore(
    combineReducers
    ({
        game: GameReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    (
        <Provider store={ store }>
            <MinesweeperApp />
        </Provider>
    ),
    document.getElementById('minesweeper-app-container')
);