import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

//基础jsx、样式
let style = {
    // color: 'red',
    // fontSize: '30px'
}
let jsx = <div className="jsx" style={style}>jsx.....</div>;
let obj = {};

//逻辑处理
let name = 'Rubio';
let names = ['Rubio','Rosen','Geely','Jimin'];
let flag = true;
let jsx = (
    <div>
        {/* 变量的使用 */}
        <p>I am {name}</p>
        {/* 条件的判断 */}
        {
            flag ? <p>I am {name}</p> : <p>I am not {name}</p>
        }
        {/* 数组的循环 */}
        {
            names.map((name, index) => <p key={index}>Hello I am {name}</p>)
        }
    </div>
);

ReactDOM.render(
    jsx,
    document.getElementById('app')
);