import React from 'react';




class NavSide extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">

                        <li>
                            <a href="index.html"><i className="fa fa-dashboard"></i> 首页</a>
                        </li>
                        <li>
                            <a href="ui-elements.html" className="active-menu"><i className="fa fa-desktop"></i> 菜单一</a>
                        </li>
                        <li>
                            <a href="chart.html"><i className="fa fa-bar-chart-o"></i> 菜单二</a>
                        </li>
                        <li>
                            <a href="tab-panel.html"><i className="fa fa-qrcode"></i> 菜单三</a>
                        </li>

                        <li>
                            <a href="table.html"><i className="fa fa-table"></i> 菜单四</a>
                        </li>
                        <li>
                            <a href="form.html"><i className="fa fa-edit"></i> 菜单五 </a>
                        </li>


                        <li>
                            <a href="#"><i className="fa fa-sitemap"></i> 菜单六<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link<span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level collapse">
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="empty.html"><i className="fa fa-fw fa-file"></i> 菜单七</a>
                        </li>
                    </ul>

                </div>

            </div>
        );
    }
}

export default NavSide;