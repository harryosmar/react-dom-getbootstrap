import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import MinesweeperApp from './components/MinesweeperApp.js';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={ store }>
            <MinesweeperApp />
        </Provider>
    ),
    document.getElementById('minesweeper-app-container')
);