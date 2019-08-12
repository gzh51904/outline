// 类型检查：在编译阶段进行检擦
// 1.普通数据类型
let username:string = 'jingjing';

// username = 100;//报错Type '100' is not assignable to type 'string'
username = '100';

// 2.元组
let arr:number[] = [10,20,30,40];
let score:[number,number,string] = [140,145,'150'];//固定元组数量与类型

// 3.泛型编程
// 用于数组定义
let arr2:Array<string> = ['laoxie','lemon','jingjing']

// 用于函数定义
// js写法：
// function identity(arg){}    -> 执行： identity('laoxie')

// ts定义格式：function 函数名<类型>(参数:类型):返回值类型{}
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");


// 关键字 变量名 {数据,数据,数据}
enum Color {Red, Green, Blue}
let c: Color = Color.Green;// 1
let str:string = Color[2];// 'Blue'

// 接口interface（模板规范）
interface Person {
    firstName: string;
    lastName: string;
    age:number;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

greeter({ firstName: "Jane", lastName: "User",age:18 });


// 命名空间
namespace laoxie {
    export let username = 'laoxie';
}

console.log(username,laoxie.username);//jingjing

let user:Person = {
    firstName:'laoxie',
    lastName:'xie',
    age:18
}
console.log(user)