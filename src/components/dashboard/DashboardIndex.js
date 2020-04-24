import React from 'react';
import {Link} from "react-router-dom";

const menus = [
    {
        'label': 'Home',
        'to': '/',
    },
    {
        'label': 'Login',
        'to': '/login',
    },
];

const DashboardIndex = (props) => (
    <div>
        <ul className="nav">
            {menus.map((menu) => (
                <li className="nav-item">
                    <Link className={props.location.pathname === menu.to ? 'nav-link active disabled' : 'nav-link'}
                          to={menu.to}>{menu.label}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default DashboardIndex;