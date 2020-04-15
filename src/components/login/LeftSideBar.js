import React from 'react';
import Header from "./Header";
import SideBarContent from "./SidebarContent";
import Footer from "./Footer";
import {getVisibleClients} from "../../selectors/clients";
import {connect} from "react-redux";

const LeftSideBar = (props) => (
    <div className="col-12 col-lg-5 col-xl-4 desktop-content">
        <div className="left-sidebar align-self-center">
            <Header app_name={props.app.name} header_title={props.app.header.title}/>
            <SideBarContent/>
            <Footer/>
        </div>
    </div>
);

const mapStateToProps = (state) => (
    {
        app: state.app,
    }
);

export default connect(mapStateToProps)(LeftSideBar);