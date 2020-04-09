import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return <nav className="navbar sticky-top navbar-expand-lg px-5">
            <a className="navbar-brand" href="#">pintu</a>
            <ul className="navbar-nav ml-auto navbar-right">
                <li className="nav-item mx-2 desktop-content">
                    <p className="nav-link" style={{'margin-bottom': 0}}>Selamat datang, User</p>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link menu-link" href="login.html">Keluar</a>
                </li>
            </ul>
        </nav>;
    }
};