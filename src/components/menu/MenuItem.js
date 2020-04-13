import React from 'react';

export default class MenuItem extends React.Component {
    render() {
        return <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
            <a href="#">
                <div className="card m-auto">
                    <img className="card-img-top" src="img/example_logo.svg" alt="Example Logo"/>
                    <div className="card-body">
                        <span className="app-category category-1 pl-3 pr-3">Kategori A</span>
                        <h5 className="card-title">Sistem Informasi IPTEK Nasional</h5>
                        <p className="card-text">
                            Portal berbasis web untuk
                            menampilkan data mengenai
                            penelitian dan pengembangan
                            di Indonesia.
                        </p>
                    </div>
                </div>
            </a>
        </div>;
    }
}