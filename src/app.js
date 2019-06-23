import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import SnakeApp from './components/SnakeApp.js';
import ScoreReducer from './reducers/Score.js';


const store = createStore(
    combineReducers
    ({
        score: ScoreReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    (
        <Provider store={ store }>
            <SnakeApp />
        </Provider>
    ),
    document.getElementById('snake-app-container')
);