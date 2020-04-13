import React from 'react';
import Header from "./Header";
import SideBarContent from "./SidebarContent";
import Footer from "./Footer";

const LeftSideBar = (props) => (
    <div className="col-12 col-lg-5 col-xl-4 desktop-content">
        <div className="left-sidebar align-self-center">
            <Header app_name={props.app_name} header_title={props.header_title}/>
            <SideBarContent/>
            <Footer/>
        </div>
    </div>
);

export default LeftSideBar;