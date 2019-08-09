
## day8-1
* 本地打包与云打包
* Vue/React项目如何打包
    * 先npm run build
    * 把编译好的代码复制到Hbuilder

### 知识点
* 小程序
    * 微信小程序
    * 支付宝小程序
    * 头条小程序
    * 百度小程序
    * ....

## day8-2

### 面试题
* review
* release/hotfix
* bug状态
    * pending   
    * open
    * fixed
    * reopen
* event对象中的target与currentTarget分别是什么
    * target事件源对象（触发事件的元素）
    * currentTarget（绑定事件的元素）

### 复习
* 小程序
    * 优势
    * 应用技术
        * html+css+js
        * es6
        * vue
        * react
    * 文件类型
        * json  配置
        * js    逻辑（js）
        * wxml  结构（html）
        * wxss  效果（css）
        * wxs   模块化
    * 文件分类
        * 全局通用
        * 页面级别

### 知识点
* 文件类型
    * json  配置
    * js    逻辑（js）
    * wxml  结构（html）
    * wxss  效果（css）
    * wxs   模块化脚本
* 事件
    * bind
    * 获取event对象
    * 如何传参
        * data-*
* wxs
    * WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的API
    * WXS 函数不能作为组件的事件回调。

## day8-3

### 知识点
* wxml模板与引用
    * `<template>`
        * 定义参数
            * name
        * 使用参数
            * is
            * data（对象，对象的属性可以直接在template中使用）
    * 引入
        `<import/>`
            * src
* wxs的使用
    * {{}}
    * <wxs> 模块脚本文件
        * src（可选）
        * module （必写）
        * 导出模块
    ```html
        <script>
        // js代码
        </script>
        <script src="xxx.js"/>
        <script type="module">
            // ES Module 模块化
            var username = 'jingjing'
        </script>
    ```
## day8-4

### 知识点
* 自我介绍
* 介绍项目
    * 项目特点
    * 负责部分
    * 使用技术
    * 遇到什么难点
* 项目流程
    1. 开发前阶段
        * 需求
        * 原型图
        * 设计图
    2. 开发阶段
        * 前端
        * 后端
    3. 测试阶段
        * 本地测试
        * UAT
        * 线上测试
    4. 运营

* Audio & Video

* 小程序开发框架
    * 基于Vue的开发框架
        * mpvue
        * uni-app
    * 类Vue的开发框架
        * wepy

## day8-5

### 知识点
* 微信公众号