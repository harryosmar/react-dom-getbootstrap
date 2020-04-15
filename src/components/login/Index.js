import React from 'react';
import LeftSideBar from "./LeftSideBar";
import MobileHeader from "./MobileHeader";
import Form from "./Form";
import BottomBanner from "./BottomBanner";

export default class Index extends React.Component {
    componentDidMount() {
        import('../../styles/components/_single_page.scss');
        document.body.id = 'page-login';
    }

    render() {
        return <div className="row h-100">
            <LeftSideBar app_name={this.props.app_name} header_title={this.props.header_title}/>
            <div className="col-12 col-lg-7 col-xl-8 right-banner">
                <div className="col-12 col-lg-8 col-xl-6 right-form">
                    <MobileHeader app_name={this.props.app_name} header_title={this.props.header_title}/>
                    <Form/>
                </div>
            </div>
            <BottomBanner/>
        </div>;
    }
}