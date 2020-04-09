import React from 'react';

export default (props) => (
    <div className="row">
        <div className="col-5 col-md-4 col-lg-3">
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Filter Kategori
                    <span className="caret "></span>
                </button>
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
);