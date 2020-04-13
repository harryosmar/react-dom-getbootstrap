import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './styles/app.scss'
import configureStore from './store/configureStore.js';
import AppRouter from "./router/AppRouter";
import {APP_NAME, HEADER_TITLE} from "./config/app";
import MenuIndex from "./components/menu";

window.Popper = require("popper.js").default;
window.$ = window.jQuery = require('jquery');
require("bootstrap");

const store = configureStore();

const jsx = <AppRouter/>;
// const jsx = <MenuIndex app_name={""} header_title={""}/>;


ReactDOM.render(
    jsx,
    document.getElementById('app-container')
);