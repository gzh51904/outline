/**
 * ESModule
    * 在模块内定义的变量都是局部变量
        * 要想在其他模块获取这里的局部变量，必须导出
    * import
        * 引入**模块对象**
    * export
        * 向模块对象添加属性
    * 修改属性名：as
 */

let username = 'laoxie';

// 模块对象：{}
// 给模块对象添加password属性
export let password = 123456;

// 给模块对象添加username属性
export {username}

// 给模块对象的default属性添加值
// export default 1000;

