//1、箭头函数
let value = 2;
let double = x => 2 * x;
let treble = x => {
    return  3 * x;
}
console.log('double', double(value));
console.log('treble', treble(value));


//2、没有独立作用域
var obj = {
    commonFn : function(){
        console.log(this);
    },
    arrowFn : () => {
        console.log(this);
    }
}
obj.commonFn(); // this 指向obj作用域
obj.arrowFn();  // this 指向了obj所在的作用域：window

//3、箭头函数不能用作构造函数
let Animal = function(){

}
let animal = new Animal(); // 合法

let Animal = () => {

}
let animal = new Animal(); // 不合法

//4、没有prototype
let commonFn = function(){};
let arrowFn = () => {};
console.log(commonFn.prototype);
console.log(arrowFn.prototype);