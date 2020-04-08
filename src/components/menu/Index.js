import React from 'react';

export default class Index extends React.Component {

    componentDidMount() {
        import('../../styles/base/_menu.scss');
    }

    render() {
        return <div>
            <nav className="navbar sticky-top navbar-expand-lg px-5">
                <a className="navbar-brand" href="#">pintu</a>
                <ul className="navbar-nav ml-auto navbar-right">
                    <li className="nav-item mx-2 desktop-content">
                        <p className="nav-link" style={{'margin-bottom': 0}}>Selamat datang, User</p>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link menu-link" href="login.html">Keluar</a>
                    </li>
                </ul>
            </nav>
            <div className="header">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-1">pintu</h1>
                        <p className="lead">Pusat Informasi dan Pelayanan Terpadu </p>
                    </div>
                </div>
            </div>
            <div className="body container">
                <div className="row">
                    <div className="col info-box">
                        <a id="close">&times;</a>
                        Proin suscipit ut ex a pretium. Maecenas vitae dolor ornare, efficitur odio a, elementum erat.
                        Donec aliquam, elit et volutpat interdum, enim purus iaculis magna, in pulvinar sapien ex
                        consequat
                        dui.
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 col-md-4 col-lg-3">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Filter Kategori
                                <span className="caret "></span></button>
                            <ul className="dropdown-menu">
                                <input className="form-control" type="text" placeholder="Search.."/>
                                <li className="dropdown-item">Category 1</li>
                                <li className="dropdown-item">Category 2</li>
                                <li className="dropdown-item">Category 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 col-md-4 col-lg-6">
                    </div>
                    <div className="col-5 col-md-4 col-lg-3">
                        <div className="md-form mt-0">
                            <input className="form-control search-bar" type="text" placeholder="Search"
                                   aria-label="Search"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
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
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
                        <a href="#">
                            <div className="card m-auto">
                                <img className="card-img-top" src="img/example_logo.svg" alt="Example Logo"/>
                                <div className="card-body">
                                    <span className="app-category category-2 pl-3 pr-3">Kategori B</span>
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
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
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
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
                        <a href="#">
                            <div className="card m-auto">
                                <img className="card-img-top" src="img/example_logo.svg" alt="Example Logo"/>
                                <div className="card-body">
                                    <span className="app-category category-3 pl-3 pr-3">Kategori C</span>
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
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
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
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
                        <a href="#">
                            <div className="card m-auto">
                                <img className="card-img-top" src="img/example_logo.svg" alt="Example Logo"/>
                                <div className="card-body">
                                    <span className="app-category category-2 pl-3 pr-3">Kategori B</span>
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
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
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
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
                        <a href="#">
                            <div className="card m-auto">
                                <img className="card-img-top" src="img/example_logo.svg" alt="Example Logo"/>
                                <div className="card-body">
                                    <span className="app-category category-3 pl-3 pr-3">Kategori C</span>
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
                    </div>
                </div>
            </div>
            <div className="footer mt-5 p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <p>
                                <b>
                                    KEMENTERIAN RISET DAN TEKNOLOGI <br/>
                                    BADAN RISET DAN INOVASI NASIONAL
                                </b> <br/>
                                Gedung II BPPT Jalan MH Thamrin Nomor 8, <br/>
                                Jakarta Pusat, 10340 <br/>
                                <br/>
                                Pusat Layanan: 126 <br/>
                                Laman : www.ristekbrin.go.id
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                        </div>
                        <div className="col-md-4 col-12 my-auto text-center">
                            <h1 className="display-4">pintu</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-information p-3">
                <div className="row">
                    <div className="col-4 text-center">
                        <a href="#" className="bottom-link">Kebijakan Privasi</a>
                    </div>
                    <div className="col-4 text-center">
                        <b>© RISTEK-BRIN 2020</b>
                    </div>
                    <div className="col-4 text-center">
                        <a href="#" className="bottom-link">Ketentuan Penggunaan</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}