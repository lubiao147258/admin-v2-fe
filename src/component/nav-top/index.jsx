import React from 'react';
import {Link } from 'react-router-dom'




class NavTop extends React.Component{

    constructor(props){
        super(props);
    }

    //退出登录
    onLogout(){

    }

    render(){
        return(
            <div className="navbar navbar-default top-navbar">
            <div className="navbar-header">
                {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button> */}
                <Link className="navbar-brand" to="/"><b>前端</b>事件重构</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle"  href="javascript:;" >
                        <i className="fa fa-user fa-fw"></i> 
                        <span>欢迎，admin：XXX</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <a onClick={() => this.onLogout()}>
                                <i className="fa fa-sign-out fa-fw"></i> 
                               <span>退出登录</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        );
    }
}

export default NavTop;