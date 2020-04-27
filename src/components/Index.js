import React from 'react';
window.Popper = require("popper.js").default;
window.$ = window.jQuery = require('jquery');
require("bootstrap");
import '../styles/app.scss';

const Index = () => (
    <p>Hello World</p>
);

export default Index;