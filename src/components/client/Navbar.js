import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends React.Component {
    render() {
        return <nav className="navbar sticky-top navbar-expand-lg px-5">
            <Link to="/" className="navbar-brand">pintu</Link>
            <ul className="navbar-nav ml-auto navbar-right">
                <li className="nav-item mx-2 desktop-content">
                    <p className="nav-link" style={{'marginBottom': 0}}>Selamat datang, {this.props.username}</p>
                </li>
                <li className="nav-item mx-2">
                    <Link to="/logout" className="nav-link menu-link">Keluar</Link>
                </li>
            </ul>
        </nav>;
    }
}

const mapStateToProps = (state) => (
    {
        username: state.auth.username,
    }
);

export default connect(mapStateToProps)(Navbar);