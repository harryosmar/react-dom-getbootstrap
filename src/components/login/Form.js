import React from 'react';

const Form = (props) => (
    <form>
        <div className="form-group">
            <div className="inner-addon left-addon">
                <i className="material-icons icon icon-before-input">email</i>
                <input className="form-control" placeholder="masukkan email terdaftar"
                       type="email" name="email"/>
            </div>
        </div>
        <div className="form-group">
            <div className="inner-addon left-addon">
                <i className="material-icons icon icon-before-input">lock</i>
                <input className="form-control" placeholder="masukkan kata sandi" type="text"
                       name="username"/>
            </div>
        </div>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="rememberMe"/>
            <label className="custom-control-label" htmlFor="rememberMe">Ingat saya</label>
        </div>
        <div className="form-action">
            <button type="button" onClick="window.location.href = 'menu.html';"
                    className="btn btn-primary">Masuk
            </button>
            <a className="form-link" href="register.html">Daftar</a>
            <div className="form-footer-link">
                <a href="#">Lupa kata sandi?</a>
            </div>
        </div>
    </form>
);

export default Form;