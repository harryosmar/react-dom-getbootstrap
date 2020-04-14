import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/app.scss'
import configureStore from './store/configureStore.js';
import AppRouter from "./router/AppRouter";

window.Popper = require("popper.js").default;
window.$ = window.jQuery = require('jquery');
require("bootstrap");

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(
    jsx,
    document.getElementById('app-container')
);