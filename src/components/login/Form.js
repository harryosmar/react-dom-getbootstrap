import React from 'react';
import Link from "react-router-dom/Link";
import doLogin from "../../api/login";
import {isValidEmail} from "../../validation/validator";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: '',
            loading: false,
        };
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({username}));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    };

    validate = ({username = '', password = ''} = {}) => {
        if (!username || !password) {
            this.setState(() => ({error: 'Email dan Password harus diisi'}));
            return false;
        }

        if (!isValidEmail(username)) {
            this.setState(() => ({error: 'Email tidak valid'}));
            return false;
        }

        this.setState(() => ({error: ''}));
        return true;
    };

    onSubmit = (e) => {
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;
        const isValid = this.validate({username, password});

        if (isValid) {
            this.setState(() => ({loading: true}));

            doLogin({username, password})
                .then((response) => {
                    this.setState(() => ({loading: false}));
                })
                .catch((error) => {
                    this.setState(() => ({loading: false, error: error.message}));
                });

        }
    };

    render() {
        return <div>
            {this.state.error && (<div className="alert alert-danger" role="alert">{this.state.error}</div>)}
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="inner-addon left-addon">
                        <i className="material-icons icon icon-before-input">email</i>
                        <input className="form-control" placeholder="masukkan email terdaftar" type="email" name="email"
                               value={this.state.username} onChange={this.onUsernameChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="inner-addon left-addon">
                        <i className="material-icons icon icon-before-input">lock</i>
                        <input className="form-control" placeholder="masukkan kata sandi" type="password"
                               name="password"
                               value={this.state.password} onChange={this.onPasswordChange}/>
                    </div>
                </div>
                <div className="form-action">
                    <button className="btn btn-primary" disabled={this.state.loading}>Masuk</button>
                    <Link to="/register" className="form-link">Daftar</Link>
                    <div className="form-footer-link">
                        <a href="#">Lupa kata sandi?</a>
                    </div>
                </div>
            </form>
        </div>
    }
}