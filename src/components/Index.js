import React from 'react';

window._ = require('lodash');

require('bootstrap-daterangepicker');
require('datatables.net');
require('jquery-validation');


window.Popper = require("popper.js").default;
window.$ = window.jQuery = require('jquery');
require("bootstrap");

// dashboard

import Cookies from 'js-cookie';

window.Cookies = Cookies;
import moment from 'moment';

window.moment = moment;
require('tooltip.js');
import PerfectScrollbar from 'perfect-scrollbar';

window.PerfectScrollbar = PerfectScrollbar;
import Sticky from 'sticky-js';

window.Sticky = Sticky;
require('wnumb');
require('metronic-template');
window.KTAppOptions = {
    "colors": {
        "state": {
            "brand": "#5d78ff",
            "dark": "#282a3c",
            "light": "#ffffff",
            "primary": "#5867dd",
            "success": "#34bfa3",
            "info": "#36a3f7",
            "warning": "#ffb822",
            "danger": "#fd3995"
        },
        "base": {
            "label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
            "shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
        }
    }
};
require('metronic-template/theme/classic/assets/vendors/general/jquery-validation/dist/additional-methods.min.js');
require('metronic-template/theme/classic/assets/vendors/custom/js/vendors/jquery-validation.init.js');
require('bootstrap-switch');

import '../styles/app.scss';

const Index = () => (
    <div>
        <div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed ">
            <div className="kt-header-mobile__logo"></div>
            <div className="kt-header-mobile__toolbar">
                <button className="kt-header-mobile__toggler kt-header-mobile__toggler--left"
                        id="kt_aside_mobile_toggler">
                    <span></span></button>
                <button className="kt-header-mobile__toggler" id="kt_header_mobile_toggler"><span></span></button>
                <button className="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler">
                    <i className="flaticon-more"></i></button>
            </div>
        </div>
        <div className="kt-grid kt-grid--hor kt-grid--root">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                <button className="kt-aside-close " id="kt_aside_close_btn"><i className="la la-close"/></button>
                <div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
                     id="kt_aside">
                    <div className="kt-aside__brand kt-grid__item " id="kt_aside_brand">
                        <div className="kt-aside__brand-logo"/>
                        <div className="kt-aside__brand-tools">
                            <button className="kt-aside__brand-aside-toggler" id="kt_aside_toggler">
                            </button>
                        </div>
                    </div>
                    <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
                         id="kt_aside_menu_wrapper">
                        <div id="kt_aside_menu" className="kt-aside-menu " data-ktmenu-vertical="1"
                             data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                            <ul className="kt-menu__nav ">
                                <li className="kt-menu__item " aria-haspopup="true">
                                    <a href="http://www.traveliteindonesia.com:8081/booking" className="kt-menu__link ">
                                        <i className="kt-menu__link-icon flaticon2-shopping-cart-1"></i>
                                        <span className="kt-menu__link-text">Booking</span>
                                    </a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true">
                                    <a href="http://www.traveliteindonesia.com:8081" className="kt-menu__link ">
                                        <i className="kt-menu__link-icon fa fa-dashboard"></i>
                                        <span className="kt-menu__link-text">Dashboard</span>
                                    </a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true">
                                    <a href="http://www.traveliteindonesia.com:8081/invoice" className="kt-menu__link ">
                                        <i className="kt-menu__link-icon fa fa-money"></i>
                                        <span className="kt-menu__link-text">Invoice</span>
                                    </a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true">
                                    <a href="http://www.traveliteindonesia.com:8081/lg" className="kt-menu__link ">
                                        <i className="kt-menu__link-icon fa fa-exchange"></i>
                                        <span className="kt-menu__link-text">Exchange Order</span>
                                    </a>
                                </li>
                                <li className="kt-menu__item " aria-haspopup="true">
                                    <a href="http://www.traveliteindonesia.com:8081/memo_internal"
                                       className="kt-menu__link ">
                                        <i className="kt-menu__link-icon fa fa-file-text"></i>
                                        <span className="kt-menu__link-text">Internal Memo</span>
                                    </a>
                                </li>
                                <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                    data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                        <i className="kt-menu__link-icon fa fa-shopping-cart"></i>
                                        <span className="kt-menu__link-text">TMS</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                    </a>
                                    <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                        <ul className="kt-menu__subnav">
                                            <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                                <span className="kt-menu__link">
                                    <span className="kt-menu__link-text">TMS</span>
                                </span>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/tms_customer"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">TMS Customer</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/tms_dp_report"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">DP Report</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/tms_dp"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">DP List</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/tms_dp_create"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Create DP</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/tms"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">TMS</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                    data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                        <i className="kt-menu__link-icon fa fa-bitcoin"></i>
                                        <span className="kt-menu__link-text">Finance</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                    </a>
                                    <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                        <ul className="kt-menu__subnav">
                                            <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                                <span className="kt-menu__link">
                                    <span className="kt-menu__link-text">Finance</span>
                                </span>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/refund"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Refund</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/dsslip"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Down Payment (Supplier)</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/dpslip"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Down Payment (Customer)</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                    data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                        <i className="kt-menu__link-icon "></i>
                                        <span className="kt-menu__link-text">Accounting</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                    </a>
                                    <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                        <ul className="kt-menu__subnav">
                                            <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                                <span className="kt-menu__link">
                                    <span className="kt-menu__link-text">Accounting</span>
                                </span>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/journalentry"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Journal Entry</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                    data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                        <i className="kt-menu__link-icon fa fa-dollar"></i>
                                        <span className="kt-menu__link-text">Cashier</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                    </a>
                                    <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                        <ul className="kt-menu__subnav">
                                            <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                                <span className="kt-menu__link">
                                    <span className="kt-menu__link-text">Cashier</span>
                                </span>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/cashierinv"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Cashier Invoice</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/cashierout"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Cashier Out</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/cashierin"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Cashier In</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                    data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                        <i className="kt-menu__link-icon fa fa-wrench"></i>
                                        <span className="kt-menu__link-text">Management</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                    </a>
                                    <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                        <ul className="kt-menu__subnav">
                                            <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                                <span className="kt-menu__link">
                                    <span className="kt-menu__link-text">Management</span>
                                </span>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="javascript:;" className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">User Management</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/traveller"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Traveller</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/supplier"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Supplier</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/product"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Product</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/hotel"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Hotel</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/custgroup"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Customer Group</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/customer"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Customer</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                    data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                        <i className="kt-menu__link-icon fa fa-puzzle-piece"></i>
                                        <span className="kt-menu__link-text">System Parameter</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                    </a>
                                    <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                        <ul className="kt-menu__subnav">
                                            <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                                <span className="kt-menu__link">
                                    <span className="kt-menu__link-text">System Parameter</span>
                                </span>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/do_code"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Document Maintenance</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/hotelroomtype"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Hotel Room Type</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/currency"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Currency</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/countrycity"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Country City</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/airline"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Airline</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/airport"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Airport</span>
                                                </a>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="http://www.traveliteindonesia.com:8081/company"
                                                   className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">Company</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                    data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                        <i className="kt-menu__link-icon fa fa-tasks"></i>
                                        <span className="kt-menu__link-text">Report</span>
                                        <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                    </a>
                                    <div className="kt-menu__submenu "><span className="kt-menu__arrow"></span>
                                        <ul className="kt-menu__subnav">
                                            <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                                <span className="kt-menu__link">
                                    <span className="kt-menu__link-text">Report</span>
                                </span>
                                            </li>
                                            <li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true"
                                                data-ktmenu-submenu-toggle="hover">
                                                <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                                                    <i className="kt-menu__link-icon "></i>
                                                    <span className="kt-menu__link-text">List Of Sales</span>
                                                    <i className="kt-menu__ver-arrow la la-angle-right"></i>
                                                </a>
                                                <div className="kt-menu__submenu "><span
                                                    className="kt-menu__arrow"></span>
                                                    <ul className="kt-menu__subnav">
                                                        <li className="kt-menu__item  kt-menu__item--parent"
                                                            aria-haspopup="true">
                                                    <span className="kt-menu__link">
                                                        <span className="kt-menu__link-text">List Of Sales</span>
                                                    </span>
                                                        </li>
                                                        <li className="kt-menu__item " aria-haspopup="true">
                                                            <a href="http://www.traveliteindonesia.com:8081/sales_report"
                                                               className="kt-menu__link ">
                                                                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                                <span className="kt-menu__link-text">Sales Report</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="kt-menu__item " aria-haspopup="true">
                                                <a href="javascript:;" className="kt-menu__link ">
                                                    <i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                                                    <span className="kt-menu__link-text">List Of Parameter</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    ;
                </div>
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                    <div id="kt_header" className="kt-header kt-grid__item  kt-header--fixed ">
                        <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
                            <i className="la la-close"/>
                        </button>
                        <div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
                            <div id="kt_header_menu"
                                 className="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">


                            </div>
                        </div>
                        <div className="kt-header__topbar">

                            <div className="kt-header__topbar-item dropdown">
                                <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px"
                                     aria-expanded="true">
                                </div>
                                <div
                                    className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
                                    <form>
                                        <div className="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b">
                                            <h3 className="kt-head__title">
                                                User Notifications
                                                &nbsp;
                                                <span
                                                    className="btn btn-success btn-sm btn-bold btn-font-md">23 new</span>
                                            </h3>

                                            <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x"
                                                role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active show" data-toggle="tab"
                                                       href="#topbar_notifications_notifications" role="tab"
                                                       aria-selected="true">Alerts</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab"
                                                       href="#topbar_notifications_events"
                                                       role="tab" aria-selected="false">Events</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab"
                                                       href="#topbar_notifications_logs"
                                                       role="tab" aria-selected="false">Logs</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-content">
                                            <div className="tab-pane active show"
                                                 id="topbar_notifications_notifications"
                                                 role="tabpanel">
                                                <div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll"
                                                     data-scroll="true" data-height="300" data-mobile-height="200">
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-line-chart kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New order has been received
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                2 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-box-1 kt-font-brand"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer is registered
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-chart2 kt-font-danger"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Application has been approved
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-image-file kt-font-warning"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New file has been uploaded
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                5 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-drop kt-font-info"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New user feedback received
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                8 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                System reboot has been successfully completed
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                12 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-favourite kt-font-danger"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New order has been placed
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                15 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#"
                                                       className="kt-notification__item kt-notification__item--read">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-safe kt-font-primary"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Company meeting canceled
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                19 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-psd kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New report has been received
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                23 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon-download-1 kt-font-danger"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Finance report has been generated
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                25 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon-security kt-font-warning"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer comment recieved
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                2 days ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-pie-chart kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer is registered
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 days ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                                                <div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll"
                                                     data-scroll="true" data-height="300" data-mobile-height="200">
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-psd kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New report has been received
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                23 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon-download-1 kt-font-danger"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Finance report has been generated
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                25 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-line-chart kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New order has been received
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                2 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-box-1 kt-font-brand"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer is registered
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-chart2 kt-font-danger"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Application has been approved
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-image-file kt-font-warning"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New file has been uploaded
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                5 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-drop kt-font-info"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New user feedback received
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                8 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-pie-chart-2 kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                System reboot has been successfully completed
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                12 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-favourite kt-font-brand"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New order has been placed
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                15 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#"
                                                       className="kt-notification__item kt-notification__item--read">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-safe kt-font-primary"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Company meeting canceled
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                19 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-psd kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New report has been received
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                23 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon-download-1 kt-font-danger"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Finance report has been generated
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                25 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon-security kt-font-warning"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer comment recieved
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                2 days ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            <i className="flaticon2-pie-chart kt-font-success"></i>
                                                        </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer is registered
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 days ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                                                <div className="kt-grid kt-grid--ver" style="min-height: 200px;">
                                                    <div
                                                        className="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
                                                        <div
                                                            className="kt-grid__item kt-grid__item--middle kt-align-center">
                                                            All caught up!
                                                            <br/>No new notifications.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="kt-header__topbar-item dropdown">
                                <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px"
                                     aria-expanded="true">
                                </div>
                                <div
                                    className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                                    <form>
                                        <div className="kt-head kt-head--skin-dark">
                                            <h3 className="kt-head__title">
                                                User Quick Actions
                                                <span className="kt-space-15"></span>
                                                <span className="btn btn-success btn-sm btn-bold btn-font-md">23 tasks pending</span>
                                            </h3>
                                        </div>

                                        <div className="kt-grid-nav kt-grid-nav--skin-light">
                                            <div className="kt-grid-nav__row">
                                                <a href="#" className="kt-grid-nav__item">
                                                    <span className="kt-grid-nav__title">Accounting</span>
                                                    <span className="kt-grid-nav__desc">eCommerce</span>
                                                </a>
                                                <a href="#" className="kt-grid-nav__item">
                                                    <span className="kt-grid-nav__title">Administration</span>
                                                    <span className="kt-grid-nav__desc">Console</span>
                                                </a>
                                            </div>
                                            <div className="kt-grid-nav__row">
                                                <a href="#" className="kt-grid-nav__item">
                                                    <span className="kt-grid-nav__title">Projects</span>
                                                    <span className="kt-grid-nav__desc">Pending Tasks</span>
                                                </a>
                                                <a href="#" className="kt-grid-nav__item">
                                                    <span className="kt-grid-nav__title">Customers</span>
                                                    <span className="kt-grid-nav__desc">Latest cases</span>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="kt-header__topbar-item kt-header__topbar-item--langs">
                                <div className="kt-header__topbar-wrapper" data-toggle="dropdown"
                                     data-offset="10px,0px">
        <span className="kt-header__topbar-icon">
            <span className="icon-languange"></span>
        </span>
                                </div>
                                <div
                                    className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
                                    <ul className="kt-nav kt-margin-t-10 kt-margin-b-10">
                                        <li className="kt-nav__item kt-nav__item--active">
                                            <a href="#" className="kt-nav__link">
                    <span className="kt-nav__link-icon">
                        <span className="kt-nav__link-icon-indonesia"></span>
                    </span>
                                                <span className="kt-nav__link-text">Indonesia</span>
                                            </a>
                                        </li>
                                        <li className="kt-nav__item">
                                            <a href="#" className="kt-nav__link">
                    <span className="kt-nav__link-icon">
                        <span className="kt-nav__link-icon-english"></span>
                    </span>
                                                <span className="kt-nav__link-text">English</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="kt-header__topbar-item kt-header__topbar-item--user">
                                <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
                                    <div className="kt-header__topbar-user">
                                        <span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                                        <span className="kt-header__topbar-username kt-hidden-mobile">Sean</span>
                                        <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg"/>
                                        <span
                                            className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">S</span>
                                    </div>
                                </div>

                                <div
                                    className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                                    <div
                                        className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x">
                                        <div className="kt-user-card__avatar">
                                            <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg"/>
                                            <span
                                                className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">S</span>
                                        </div>
                                        <div className="kt-user-card__name">
                                            Sean Stone
                                        </div>
                                        <div className="kt-user-card__badge">
                                            <span
                                                className="btn btn-success btn-sm btn-bold btn-font-md">23 messages</span>
                                        </div>
                                    </div>

                                    <div className="kt-notification">
                                        <a href="demo1/custom/apps/user/profile-1/personal-information.html"
                                           className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <i className="flaticon2-calendar-3 kt-font-success"></i>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title kt-font-bold">
                                                    My Profile
                                                </div>
                                                <div className="kt-notification__item-time">
                                                    Account settings and more
                                                </div>
                                            </div>
                                        </a>
                                        <a href="demo1/custom/apps/user/profile-3.html"
                                           className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <i className="flaticon2-mail kt-font-warning"></i>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title kt-font-bold">
                                                    My Messages
                                                </div>
                                                <div className="kt-notification__item-time">
                                                    Inbox and tasks
                                                </div>
                                            </div>
                                        </a>
                                        <a href="demo1/custom/apps/user/profile-2.html"
                                           className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <i className="flaticon2-rocket-1 kt-font-danger"></i>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title kt-font-bold">
                                                    My Activities
                                                </div>
                                                <div className="kt-notification__item-time">
                                                    Logs and notifications
                                                </div>
                                            </div>
                                        </a>
                                        <a href="demo1/custom/apps/user/profile-3.html"
                                           className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <i className="flaticon2-hourglass kt-font-brand"></i>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title kt-font-bold">
                                                    My Tasks
                                                </div>
                                                <div className="kt-notification__item-time">
                                                    latest tasks and projects
                                                </div>
                                            </div>
                                        </a>

                                        <a href="demo1/custom/apps/user/profile-1/overview.html"
                                           className="kt-notification__item">
                                            <div className="kt-notification__item-icon">
                                                <i className="flaticon2-cardiogram kt-font-warning"></i>
                                            </div>
                                            <div className="kt-notification__item-details">
                                                <div className="kt-notification__item-title kt-font-bold">
                                                    Billing
                                                </div>
                                                <div className="kt-notification__item-time">
                                                    billing & statements <span
                                                    className="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill kt-badge--rounded">2 pending</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="kt-notification__custom kt-space-between">
                                            <a href="http://www.traveliteindonesia.com:8081/logout"
                                               className="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</a>
                                            <a href="demo1/custom/user/login-v2.html" target="_blank"
                                               className="btn btn-clean btn-sm btn-bold">Upgrade Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
                         id="kt_content">
                        <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                            <div className="kt-container  kt-container--fluid ">
                                <div className="kt-subheader__main">
                                    <span className="kt-subheader__separator kt-hidden"></span>
                                    <div className="kt-subheader__breadcrumbs">
                                        <a href="#" className="kt-subheader__breadcrumbs-home"><i
                                            className="flaticon2-shelter"></i></a>
                                        <span className="kt-subheader__breadcrumbs-separator"></span>
                                        <a href="http://www.traveliteindonesia.com:8081"
                                           className="kt-subheader__breadcrumbs-link">
                                            Home
                                        </a>
                                    </div>
                                </div>
                                <div className="kt-subheader__toolbar">
                                    <div className="kt-subheader__wrapper">
                                        <button type="button" className="btn btn-primary btn_submit"
                                                id="btn_submit">Submit
                                        </button>
                                        <button type="button" className="btn btn-success btn_add" id="btn_add">Add
                                        </button>
                                        <button type="button" className="btn btn-danger btn_cancel"
                                                id="btn_cancel">Cancel
                                        </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                            <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
                                <div className="kt-portlet__body">
                                    <div className="kt-portlet borders-color">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group row">
                                                    <div className="col-lg-8">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control form-control-sm"
                                                                   name="generalSearch" id="generalSearch"
                                                                   placeholder="Search for..."/>
                                                            <div className="input-group-prepend">
                                                                <button type="reset"
                                                                        className="btn btn-sm btn-secondary-travelite"
                                                                        name="btnfilter" id="btnfilter"><i
                                                                    className="la la-search"/></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table id="hotel"
                                                       className="table table-striped table-bordered table-hover table-checkable table-responsive-sm  dataTable no-footer">
                                                    <thead>
                                                    <tr>
                                                        <th>Hotel ID</th>
                                                        <th>Hotel Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>

                                                    </tbody>
                                                </table>

                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <form className="kt-form kt-form--fit kt-form--label-right"
                                                      id='form_hotel' name='form_hotel'>
                                                    <div className="kt-portlet borders-color" id="input_hotel">
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label"
                                                                   aria-placeholder="hotel name">Hotel Name
                                                                <span className="kt-font-danger kt-font-bold">*</span>
                                                            </label>
                                                            <div className="col-5">
                                                                <input className="form-control form-control-sm"
                                                                       type="text" value="" id="hotelname"
                                                                       name="hotelname"/>
                                                            </div>
                                                            <label className="col-2 col-form-label" aria-placeholder="">Status
                                                                <span className="kt-font-danger kt-font-bold"></span>
                                                            </label>
                                                            <div className="col-3">
                                                                <input data-switch="true" type="checkbox"
                                                                       data-on-text="ACTIVE" data-off-text="INACTIVE"
                                                                       data-on-color="success" checked data-size="small"
                                                                       data-off-color="danger" name="hotelstatus"
                                                                       id="hotelstatus"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Address
                                                                <span className="kt-font-danger kt-font-bold">*</span>
                                                            </label>
                                                            <div className="col-5">
                                                                <textarea className="form-control form-control-sm"
                                                                          type="text" id="address1"
                                                                          name="address1"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">City
                                                                <span className="kt-font-danger kt-font-bold">*</span>
                                                            </label>
                                                            <div className="col-5">
                                                                <select className="form-control form-control-sm"
                                                                        type="text" value="" id="cityid" name="cityid">
                                                                </select>
                                                                <span className="form-text text-muted"></span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Post Code</label>
                                                            <div className="col-5">
                                                                <input className="form-control form-control-sm"
                                                                       type="text" value="" id="postcode"
                                                                       name="postcode"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Phone
                                                                <span className="kt-font-danger kt-font-bold">*</span>
                                                            </label>
                                                            <div className="col-2">
                                                                <input className="form-control form-control-sm"
                                                                       type="text" value="" id="phonecode1"
                                                                       name="phonecode1"/>
                                                            </div>
                                                            <div className="col-2">
                                                                <input className="form-control form-control-sm"
                                                                       type="text" value="" id="phone1" name="phone1"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Fax
                                                            </label>
                                                            <div className="col-2">
                                                                <input className="form-control form-control-sm"
                                                                       type="text" value="" id="faxcode"
                                                                       name="faxcode"/>
                                                            </div>
                                                            <div className="col-2">
                                                                <input className="form-control form-control-sm"
                                                                       type="text" value="" id="fax1" name="fax1"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Email</label>
                                                            <div className="col-6">
                                                                <input className="form-control form-control-sm"
                                                                       type="email" value="" id="email" name="email"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Set as
                                                                Supplier</label>
                                                            <div className="col-8">
                <span className="kt-switch kt-switch--outline kt-switch--icon kt-switch--success">
                    <label>
                        <input type="checkbox" checked="checked" name="setsuppflag" id="setsuppflag"/>
                        <span/>
                    </label>
                </span>
                                                            </div>
                                                        </div>
                                                        <div className="kt-portlet__head">
                                                            <div className="kt-portlet__head-label">
                                                                <h3 className="kt-portlet__head-title">
                                                                    BILLING ADDRESS
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Billing Address
                                                                <span className="kt-font-danger kt-font-bold">*</span>
                                                            </label>

                                                            <div className="col-5">
                                                                <textarea className="form-control form-control-sm"
                                                                          type="text" id="billingaddress"
                                                                          name="billingaddress"></textarea>
                                                            </div>
                                                            <div className="kt-space-10"></div>
                                                            <div className="col-2">
                                                                <button type="button" className="btn btn-primary btn-sm"
                                                                        data-container="body" data-toggle="kt-tooltip"
                                                                        data-placement="right" title="same with address"
                                                                        id="btn_paste" name="btn_paste">
                                                                    paste
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">City
                                                                <span className="kt-font-danger kt-font-bold">*</span>
                                                            </label>
                                                            <div className="col-5">
                                                                <select className="form-control form-control-sm"
                                                                        type="text" value="" id="billingcityid"
                                                                        name="billingcityid">
                                                                </select>
                                                                <span className="form-text text-muted"></span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Post Code</label>
                                                            <div className="col-5">
                                                                <input className="form-control form-control-sm"
                                                                       type="text" value="" id="billingpostcode"
                                                                       name="billingpostcode"/>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" value="" id="countryid" name="countryid"/>
                                                        <input type="hidden" value="" id="status" name="status"/>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kt-footer  kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop"
                         id="kt_footer">
                        <div className="kt-container  kt-container--fluid ">
                            <div className="kt-footer__copyright">
                                2019&nbsp;&copy;&nbsp;<a href="http://keenthemes.com/metronic" target="_blank"
                                                         className="kt-link">SSI(Sentrasolusi Informatika)</a>
                            </div>
                            <div className="kt-footer__menu">
                                <a href="http://keenthemes.com/metronic" target="_blank"
                                   className="kt-footer__menu-link kt-link">About</a>
                                <a href="http://keenthemes.com/metronic" target="_blank"
                                   className="kt-footer__menu-link kt-link">Team</a>
                                <a href="http://keenthemes.com/metronic" target="_blank"
                                   className="kt-footer__menu-link kt-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="kt_scrolltop" className="kt-scrolltop">
            <i className="fa fa-arrow-up"></i>
        </div>
    </div>
);

export default Index;