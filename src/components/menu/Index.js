import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import Info from "./Info";
import Filter from "./Filter";
import MenuList from "./MenuList";
import Footer from "./Footer";
import FooterMenu from "./FooterMenu";

export default class Index extends React.Component {

    componentDidMount() {
        import('../../styles/base/_menu.scss');
    }

    render() {
        return <div>
            <Navbar/>
            <Header/>
            <div className="body container">
                <Info/>
                <Filter/>
                <MenuList/>
            </div>
            <Footer/>
            <FooterMenu/>
        </div>;
    }
}