import React from 'react';
import LeftSideBar from "../login/LeftSideBar";
import MobileHeader from "../login/MobileHeader";
import BottomBanner from "../login/BottomBanner";
import Form from "./Form";
import ContactFooter from "./ContactFooter";

export default class Index extends React.Component {
    componentDidMount() {
        import('../../styles/base/_single_page.scss');
        document.body.id = 'page-register';
    }

    render() {
        return <div className="row h-100">
            <LeftSideBar app_name={this.props.app_name} header_title={this.props.header_title}/>
            <div className="col-12 col-lg-7 col-xl-8 right-banner">
                <div className="col-12 col-lg-8 col-xl-6 right-form">
                    <MobileHeader app_name={this.props.app_name} header_title={this.props.header_title}/>
                    <Form/>
                    <ContactFooter/>
                </div>
            </div>
            <BottomBanner/>
        </div>;
    }
}