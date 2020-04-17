import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import Info from "./Info";
import Filter from "./Filter";
import ClientList from "./ClientList";
import Footer from "./Footer";
import FooterMenu from "./FooterMenu";

export default class Index extends React.Component {
    componentDidMount() {
        import('../../styles/components/_client.scss');
        document.body.id = 'page-client';
    }

    render() {
        return <div>
            <Navbar history={this.props.history}/>
            <Header/>
            <div className="body container">
                <Info/>
                <Filter/>
                <ClientList/>
            </div>
            <Footer/>
            <FooterMenu/>
        </div>;
    }
}