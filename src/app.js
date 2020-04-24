import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss'
import AppRouter from "./router/AppRouter";

window.Popper = require("popper.js").default;
window.$ = window.jQuery = require('jquery');
require("bootstrap");

const jsx = (
    <AppRouter/>
);

ReactDOM.render(
    jsx,
    document.getElementById('app-container')
);