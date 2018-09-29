


class MUtil{
    request(param){
        return new Promise((resolve, reject) => {
            $.ajax({
                type        : param.type     || 'get',
                url         : param.url      || '',
                dataType    : param.dataType || 'json',
                data        : param.data     || 'null',
                success(res){
                    if(0 === res.status){
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }else if(10 === res.status){
                        //做登录
                        this.doLogin();
                    }else{
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error(err){
                    typeof reject === 'function' && reject(err.statusText);
                }
            });
        });
        
    }
    //跳转登录
    doLogin(){
        window.location.href = "/login?redirect=" + encodeURIComponent(window.location.pathname);
    }
    //获取URL参数
    getUrlParam(name){
        //xxx.com?param=q1234&param1=asdfas

        let queryString = window.location.search.split('?')[1] || '';
        let reg = new RegExp("(^|&)" + name +"=([^&]*)(&|$)");
        let result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
    //错误提示
    errorTips(err){
        alert(err || '好像哪里不对了~');
    }
}

export default MUtil;