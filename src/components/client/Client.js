import React from 'react';

export default class Client extends React.Component {
    render() {
        return <div className="col-6 col-md-4 col-lg-3 my-2 menu-card">
            <a href={this.props.url}>
                <div className="card m-auto">
                    <img className="card-img-top" src={this.props.logo}/>
                    <div className="card-body">
                        <span className="app-category category-1 pl-3 pr-3">{this.props.category}</span>
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </a>
        </div>;
    }
}