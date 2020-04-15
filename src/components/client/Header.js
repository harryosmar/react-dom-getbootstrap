import React from 'react';
import {connect} from "react-redux";

const Header = (props) => (
    <div className="header">
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-1">{props.app.name}</h1>
                <p className="lead">{props.app.header.title}</p>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => (
    {
        app: state.app,
    }
);

export default connect(mapStateToProps)(Header);