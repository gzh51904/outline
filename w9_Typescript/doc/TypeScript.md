# TypeScript教程

## 介绍
TypeScript由微软开发的自由和开源的编程语言，设计目标是开发大型应用，是js的扩展（支持现有js代码），通过编译成纯 JavaScript在不同的浏览器中运行

## 安装

```bash
    # 全局安装
    npm install -g typescript

    #安装后通过tsc命令执行
    tsc -v
```

## 使用

### 语言扩展

* 类型注解和编译时类型检查（不指定则默认为值所对应的类型）
    > `var [变量名] : [类型] = 值;`
    * string
    * number
    * boolean
    * any

    ```ts
        let username:string = 'laoxie';
        let age:number = 18;

        username = 123456;//在编译时报错
    ```
* 数组
```ts
    let arr:number[] = [10,20,30]
    let arr:Array<string> = ['laoxie','lemon','jingjing']
```
* 元组Tuple
> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
```ts
    let arr:[number,number,string] = [10,20,'h5']
```

* 泛型编程
> 可以适用于多个类型，格式：`Array<元素类型>`

```ts
    function identity<T>(arg: T): T {
        return arg;
    }
    let output = identity<string>("myString");
```
* 枚举enum
```ts
    enum Color {Red, Green, Blue}
    let c: Color = Color.Green;// 1
    let str:string = Color[2];// 'Blue'
```

* 接口
```ts
    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = { firstName: "Jane", lastName: "User" };

    document.body.innerHTML = greeter(user)
```

* 命名空间
> 可以利用同一个命名空间把代码分散到不同的文件
```ts
    namespace Validation {
        export interface StringValidator {
            isAcceptable(s: string): boolean;
        }
    }
```

* 类
```ts
    class Student {
        fullName: string;
        constructor(public firstName, public middleInitial, public lastName) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person : Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = new Student("Jane", "M.", "User");

    document.body.innerHTML = greeter(user);
```
* 模块
    * CommonJS（默认）
    * ES Module
* lambda 函数的箭头语法
> 与ES Module一致
* 可选参数以及默认参数
> 与ES Module一致


### 配置文件
* tsconfig.json
> 通过 `tsc --init` 生成
```json
{
    "compilerOptions": {
        // 与 Vue 的浏览器支持保持一致
        "target": "es5",
        // 这可以对 `this` 上的数据属性进行更严格的推断
        "strict": true,
        // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
        "module": "es2015",
        "moduleResolution": "node"
    }
}
```

* webpack加载器:ts-loader
```js
    {
        //...
        module: {
            rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        }
    }
```

### tsc命令

* 格式：`tsc <...文件> <参数>`
* 参数：
    * --help 显示帮助信息
    * --module 载入扩展模块
    * --target 设置 ECMA 版本
    * --declaration 额外生成一个 .d.ts 扩展名的文件。
    ```bash
        # 以下命令会生成 ts-hw.d.ts、ts-hw.js 两个文件
        tsc ts-hw.ts --declaration
    ```
    * --removeComments 删除文件的注释
    * --out 编译多个文件并合并到一个输出的文件
    * --sourcemap 生成一个 sourcemap (.map) 文件。
        >sourcemap 是一个存储源代码与编译代码对应位置映射的信息文件。
    * --module noImplicitAny 在表达式和声明上有隐含的 any 类型时报错
    * --watch 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。

