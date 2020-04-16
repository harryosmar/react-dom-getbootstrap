import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/app.scss'
import configureStore from './store/configureStore.js';
import AppRouter from "./router/AppRouter";
import {API_BASE_URL, APP_ENV} from "./config/app";

window.Popper = require("popper.js").default;
window.$ = window.jQuery = require('jquery');
require("bootstrap");

const axios = require('axios').default;
axios.defaults.baseURL = API_BASE_URL;
window.axios = axios;

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