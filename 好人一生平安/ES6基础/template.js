//模板字符串
//1、基本用法
let str = `
    <div>
        <h1 class="title">1234</h1>
    </div>
`;
document.querySelector('body').innerHTML = str;

//2、嵌套变量的用法
let name = `Rubio`;
let str = `
<div>
    <h1 class="title">${name}</h1>
</div>
`;
document.querySelector('body').innerHTML = str;

//2、嵌套方法的用法
let getName = () => {
    return 'Rubio test';
}
let str = `
<div>
    <h1 class="title">${getName()}</h1>
</div>
`;
document.querySelector('body').innerHTML = str;

//循环嵌套
let names = ['Rubio','Geely','Jimin'];
let str = `
    <ul>
        ${
            names.map(name => `<li>Hi i am ${name}</li>`).join('')
        }
    </ul>
`;
document.querySelector('body').innerHTML = str;
