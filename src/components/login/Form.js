import React from 'react';
import Link from "react-router-dom/Link";
import doLogin from "../../api/login";
import {isValidEmail} from "../../validation/validator";
import {setClientsSession, setTokenSession} from "../../jwt/token";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            usernameStatus: false,
            password: '',
            passwordStatus: false,
            error: '',
            loading: false,
        };
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({username}));
        this.validateUsername(username);
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
        this.validatePassword(password);
    };

    validateUsername = (username) => {
        if (!username) {
            this.setState(() => ({error: 'Email dan Password harus diisi', usernameStatus: false}));
            return false;
        }

        if (!isValidEmail(username)) {
            this.setState(() => ({error: 'Email tidak valid', usernameStatus: false}));
            return false;
        }

        this.setState(() => ({usernameStatus: true}));
        return true;
    };

    validatePassword = (password) => {
        if (!password) {
            this.setState(() => ({error: 'Email dan Password harus diisi', passwordStatus: false}));
            return false;
        }

        this.setState(() => ({passwordStatus: true}));
        return true;
    };

    validateForm = ({username = '', password = ''} = {}) => {
        const isValidUsername = this.validateUsername(username);
        const isValidPassword = this.validatePassword(password);

        if (isValidUsername && isValidPassword) {
            this.setState(() => ({error: ''}));

            return true;
        }

        return false;
    };

    onSubmit = (e) => {
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;
        const isValid = this.validateForm({username, password});

        if (isValid) {
            this.setState(() => ({loading: true}));

            doLogin({username, password})
                .then((response) => {
                    this.setState(() => ({loading: false}));
                    setTokenSession(response.data.token);
                    setClientsSession(JSON.stringify(response.data.clients));
                    this.props.history.push('/')
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response) {
                        console.error(error.response);
                        this.setState(() => ({loading: false, error: error.response.data.message}));
                    } else {
                        this.setState(() => ({loading: false, error: error.message}));
                    }
                });

        }
    };

    getInputLabelClassName = (value, status) => {
        const className = "material-icons icon icon-before-input";

        if (!value) {
            return className;
        }

        if (!status) {
            return `${className} text-danger`;
        }

        return `${className} text-success`;
    };

    getInputClassName = (value, status) => {
        const className = "form-control";

        if (!value) {
            return className;
        }

        if (!status) {
            return `${className} is-invalid`;
        }

        return `${className} is-valid`;
    };

    render() {
        return <div>
            {this.state.error && (
                <div className="row alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="material-icons icon icon-before-input text-danger">error</i>&nbsp;
                    {this.state.error}
                </div>
            )}
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="inner-addon left-addon">
                        <i className={this.getInputLabelClassName(this.state.username, this.state.usernameStatus)}>email</i>
                        <input className={this.getInputClassName(this.state.username, this.state.usernameStatus)}
                               placeholder="masukkan email terdaftar" type="email"
                               name="email"
                               value={this.state.username} onChange={this.onUsernameChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="inner-addon left-addon">
                        <i className={this.getInputLabelClassName(this.state.password, this.state.passwordStatus)}>lock</i>
                        <input className={this.getInputClassName(this.state.password, this.state.passwordStatus)}
                               placeholder="masukkan kata sandi" type="password"
                               name="password"
                               value={this.state.password} onChange={this.onPasswordChange}/>
                    </div>
                </div>
                <div className="form-action">
                    <button className="btn btn-primary"
                            disabled={this.state.loading}>{this.state.loading ? 'Loading...' : 'masuk'}
                    </button>
                    <Link to="/register" className="form-link">Daftar</Link>
                    <div className="form-footer-link">
                        <a href="#">Lupa kata sandi?</a>
                    </div>
                </div>
            </form>
        </div>
    }
}