import React from 'react';
import {connect} from "react-redux";
import {setCategoryFilter, setCategorySearchFilter, setTextFilter} from "../../actions/Filters";
import {getCategoryOptionValue, getCategoryOptionLabel, getFilteredCategoryList} from "../../selectors/filters";

class Filter extends React.Component {
    render() {
        return <div className="row">
            <div className="col-5 col-md-4 col-lg-3">
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                        {getCategoryOptionLabel(this.props.filters.category)}
                        <span className="caret ">
                        </span>
                    </button>
                    <ul className="dropdown-menu">
                        <input className="form-control" type="text" placeholder="Search.."
                               onChange={this.handleChangeCategorySearchText}/>
                        {this.props.categories.map((category, index) => (
                                <li key={index} className="dropdown-item"
                                    onClick={this.handleChangeCategory}>{category}</li>
                            )
                        )}
                    </ul>
                </div>
            </div>
            <div className="col-2 col-md-4 col-lg-6">
            </div>
            <div className="col-5 col-md-4 col-lg-3">
                <div className="md-form mt-0">
                    <input className="form-control search-bar" type="text" placeholder="Search" aria-label="Search"
                           onChange={this.handleChangeSearchText}/>
                </div>
            </div>
        </div>;
    }

    handleChangeCategory = (e) => {
        e.persist();
        this.props.dispatch(
            setCategoryFilter(
                getCategoryOptionValue(e.target.innerText)
            )
        );
    };

    handleChangeSearchText = (e) => {
        e.persist();
        this.props.dispatch(
            setTextFilter(
                getCategoryOptionValue(e.target.value)
            )
        );
    };

    handleChangeCategorySearchText = (e) => {
        e.persist();
        this.props.dispatch(
            setCategorySearchFilter(
                e.target.value
            )
        );
    };
}


const mapStateToProps = (state) => (
    {
        clients: state.clients,
        filters: state.filters,
        categories: getFilteredCategoryList(state.clients.categories, state.filters.categorySearch),
    }
);

export default connect(mapStateToProps)(Filter);