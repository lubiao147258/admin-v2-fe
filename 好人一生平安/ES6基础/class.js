// class constuctor
class Animal{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

let animal = new Animal('Rubio test');
console.log(animal.getName());

//类的继承,可以调用父类的方法
class Animal{
    constructor(){
        this.name = 'animafasf';
    }
    getName(){
        return this.name;
    }
}

class Cat extends Animal{
    constructor(){
        super();
        this.name = 'cat';
    }
}
let animal = new Animal();
let cat = new Cat();
console.log(animal.getName());
console.log(cat.getName());

//对象的写法(老写法)
var name = 'Rubio';
var age = 18;
var obj = {
    name : name,
    age : age,
    getName : function(){
        return this.name;
    },
    getAge : function(){
        return this.age;
    }
}

//对象的写法（新的写法）
let name = 'Rubio',age = 18;
let obj = {
    //可以直接用作对象的属性名称
    name,
    age,
    //这里是对象里的方法，可以简写
    getName(){
        return this.name;
    },
    //表达式作为属性名或方法名
    ['get' + 'Age'](){
        return this.age;
    }
}

//Object对象的扩展
Object.keys(obj)
Object.assign({a:1},{b:2})
Object.assign({a:1},{a:9,b:2})