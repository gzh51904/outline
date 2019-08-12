// 类型检查：在编译阶段进行检擦
// 1.普通数据类型
var username = 'jingjing';
// username = 100;//报错Type '100' is not assignable to type 'string'
username = '100';
// 2.元组
var arr = [10, 20, 30, 40];
var score = [140, 145, '150']; //固定元组数量与类型
// 3.泛型编程
// 用于数组定义
var arr2 = ['laoxie', 'lemon', 'jingjing'];
// 用于函数定义
// js写法：
// function identity(arg){}    -> 执行： identity('laoxie')
// ts定义格式：function 函数名<类型>(参数:类型):返回值类型{}
function identity(arg) {
    return arg;
}
var output = identity("myString");
// 关键字 变量名 {数据,数据,数据}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; // 1
var str = Color[2]; // 'Blue'
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
greeter({ firstName: "Jane", lastName: "User", age: 18 });
// 命名空间
var laoxie;
(function (laoxie) {
    laoxie.username = 'laoxie';
})(laoxie || (laoxie = {}));
console.log(username, laoxie.username); //jingjing
var user = {
    firstName: 'laoxie',
    lastName: 'xie',
    age: 18
};
console.log(user);
