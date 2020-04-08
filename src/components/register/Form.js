import React from 'react';

export default (props) => (
    <form>
        <div className="form-header">
            <h3>Daftar akun baru</h3>
        </div>
        <div className="form-group">
            <div className="inner-addon left-addon">
                <i className="material-icons icon icon-before-input">person</i>
                <input className="form-control" placeholder="masukkan nama lengkap" type="text"
                       name="name"/>
            </div>
        </div>
        <div className="form-group">
            <div className="inner-addon left-addon">
                <i className="material-icons icon icon-before-input">email</i>
                <input className="form-control" placeholder="masukkan alamat email" type="email"
                       name="email"/>
            </div>
        </div>
        <div className="form-group">
            <div className="inner-addon left-addon">
                <i className="material-icons icon icon-before-input">confirmation_number</i>
                <input className="form-control" placeholder="masukkan token" type="text" name="token"/>
            </div>
        </div>
        <div className="form-group">
            <div className="inner-addon left-addon">
                <i className="material-icons icon icon-before-input">lock</i>
                <i className="material-icons icon icon-after-input">visibility</i>
                <input className="form-control" placeholder="masukkan kata sandi" type="text"
                       name="username"/>
            </div>
        </div>
        <div className="form-group">
            <div className="inner-addon left-addon">
                <i className="material-icons icon icon-before-input">lock</i>
                <i className="material-icons icon icon-after-input">visibility</i>
                <input className="form-control" placeholder="masukkan kembali kata sandi" type="text"
                       name="username"/>
            </div>
        </div>
        <div className="form-action">
            <button type="button" onClick="window.location.href = 'login.html';"
                    className="btn btn-primary">Daftar
            </button>
        </div>
    </form>
);