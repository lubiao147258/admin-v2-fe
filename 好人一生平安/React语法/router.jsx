



//页面路由
windo.location.href = 'http://www.baidu.com';


//hash路由
window.location = '#hash';
window.onhashchange = function(){
    console.log('current hash:',window.location,hash);
}

//h5 路由

//推进一个状态
history.pushState('name','title','/path');
//替换一个状态
history.replaceState('name','title','/path');
//popstate
window.onpopstate = function(){
    console.log(window.location.href);//相对路径
    console.log(window.location.pathname);//绝对路径
    console.log(window.location.hash);//hash路径
    console.log(window.location.search);
}

//<BrowserRouter> <HashRouter> , 路由方式
//<Route>, 路由机制
//<Switch>， 路由选项
//<Link/> / <NavLink> 跳转导航