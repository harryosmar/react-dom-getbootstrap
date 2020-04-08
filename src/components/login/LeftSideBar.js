import React from 'react';
import LoginHeader from "./Header";
import LoginSideBarContent from "./SidebarContent";
import LoginFooter from "./Footer";
import MobileLoginHeader from "./MobileHeader";

export default (props) => (
    <div className="col-12 col-lg-5 col-xl-4 desktop-content">
        <div className="left-sidebar align-self-center">
            <LoginHeader app_name={props.app_name} header_title={props.header_title}/>
            <LoginSideBarContent/>
            <LoginFooter/>
        </div>
    </div>
);