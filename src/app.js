import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/app.scss'
import configureStore from './store/configureStore.js';
import LoginIndex from './components/login/Index';
import RegisterIndex from './components/register/Index';
import MenuIndex from './components/menu/Index';

window.Popper = require("popper.js").default;
window.$ = window.jQuery = require('jquery');
require("bootstrap");


const store = configureStore();
const appName = 'pintu';
const headerTitle = 'Pusat Informasi dan Pelayanan Terpadu';

ReactDOM.render(
    (
        // <RegisterIndex app_name={appName} header_title={headerTitle}/>
        <MenuIndex app_name={appName} header_title={headerTitle}/>
        // <LoginIndex app_name={appName} header_title={headerTitle}/>
    ),
    document.getElementById('app-container')
);