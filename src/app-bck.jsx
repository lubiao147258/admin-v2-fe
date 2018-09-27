// let a = 123;
// let test = (value) => {
//     return value *2;
// };
// test(a);

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router , Route , Link , Switch} from 'react-router-dom'

//第一次学习
/*import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss';

ReactDOM.render(
    <div>
        <i className="fa fa-automobile"></i>
        <h1>Hello , world!</h1>,
    </div>,
    document.getElementById('app')
)*/

//第二次学习
// import './index.scss';
// let style = {
//     // color: 'red',
//     // fontSize: '30px'
// }
// let name = 'Rubio';
// let names = ['Rubio','Rosen','Geely','Jimin'];
// let flag = true;
// let jsx = (
//     <div>
//         {/* 变量的使用 */}
//         <p>I am {name}</p>
//         {/* 条件的判断 */}
//         {
//             flag ? <p>I am {name}</p> : <p>I am not {name}</p>
//         }
//         {/* 数组的循环 */}
//         {
//             names.map((name, index) => <p key={index}>Hello I am {name}</p>)
//         }
//     </div>
// );

//第三次学习
// function Component(){
//     return <h1>I am Rubio</h1>
// }

// class ES6Component extends React.Component{
//     render(){
//         return <h1>I am Rubio in es6</h1>
//     }
// }



//Route 学习
class A extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            Component A
            <Switch>
                <Route path={`${this.props.match.path}`} exact render = {(route) => {
                    return <div>不带参数的组件</div>
                }}/>
                <Route path={`${this.props.match.path}/sub`} render = {(route) => {
                    return <div>sub组件</div>
                }}/>
                <Route path={`${this.props.match.path}/:id`} render = {(route) => {
                    return <div>带参数的组件，参数是：{route.match.params.id}</div>
                }}/>
                
            </Switch>
        </div>
    );
        
    }
}

class B extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>Component B</div>
        
    }
}

class Wapper extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>
                    <Link to="/a">组件A</Link><br/>
                    <Link to="/a/123">带参数的组件A</Link><br/>
                    <Link to="/b">组件B</Link><br/>
                    <Link to="/a/sub">/a/sub</Link><br/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Wapper>
            <Route path="/a" component={A}/>
            <Route path="/b" component={B}/>
        </Wapper>
    </Router>,
    document.getElementById('app')
);