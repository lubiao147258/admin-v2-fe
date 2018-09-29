import React from 'react';


import './index.scss';
import MUtil  from 'util/mm.jsx';
import User  from 'service/userService.jsx';

const _mm = new MUtil();
const _user = new User();

class Login extends React.Component {


    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect: _mm.getUrlParam('redirect') || '/',
        }
    }

    componentWillMount(){
        document.title = '登录';
    }

    onInputChange(e){

        let inputValue = e.target.value;
        let inputName = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
    }

    onSubmit(){
        let loginInfo ={
                username:this.state.username,
                password:this.state.password
            };
        let checkResult = _user.checkLoginInfo(loginInfo);
        //验证通过
        if(checkResult.status){
            _user.login(loginInfo).then((res) => {
                this.props.history.push(this.state.redirect);
            },(err) => {
                _mm.errorTips(err);
            });
        }else{
            _mm.errorTips(checkResult.msg);
        }
        
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">登录</div>
                    <div className="panel-body">
                        <div>
                            <div className="div-group">
                                <input type="text" 
                                    name="username"
                                    className="form-control"  
                                    placeholder="请输入用户名"
                                    onChange={(e) => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码"
                                    onChange={(e) => this.onInputChange(e)}
                                 />
                            </div>
                            <button
                                className="btn btn-block btn-primary"
                                onClick={(e) => this.onSubmit(e)}
                            >登录</button>
                        </div>
                    </div>
                </div>
            </div>
                            );
                        }
                    }
                    
export default Login;