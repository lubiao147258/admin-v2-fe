import React from 'react';
import { Link , NavLink} from 'react-router-dom';




class NavSide extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact to="/" activeClassName="active-menu">
                                <i className="fa fa-dashboard"></i> 首页
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-sitemap"></i> 商品
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName="active-menu">品类管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/order"><i className="fa fa-sitemap"></i> 订单<span className="fa arrow"></span></Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user"><i className="fa fa-sitemap"></i> 用户<span className="fa arrow"></span></Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/baseInfo"><i className="fa fa-sitemap"></i> 事件上报<span className="fa arrow"></span></Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/baseInfo" activeClassName="active-menu">基本信息</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/attachment" activeClassName="active-menu">附件</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/procress" activeClassName="active-menu">处理流程</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/workOrder" activeClassName="active-menu">关联工单</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/other" activeClassName="active-menu">其他</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>

            </div>
        );
    }
}

export default NavSide;