# React

## day5-2

### 面试题
* http与webSocket
    * https & wss
    * 轮询
* Vue插槽slot
    * v-slot
* token ： 加密后的字符串
    * 用户权限管理

### 知识点
* 开源open source
* github page
* React使用
    * 特点
    * JSX
        * SX -> NX

### 面试题
* 最先在哪个生命周期可以操作节点
    * beforeMounte
* 最先在哪个生命周获取到父组件传入的数据
    * created
* vuex核心配置
    * state
    * getters
    * mutations
    * actions
    * modules

### 知识点
* VirtualDOM
* 视图层的框架
    * MVC完整架构
        * M: Model
        * V: View
        * C: controller
    * PS: Vue是一个完整的MVC架构框架，React是一个视图层框架（MVC中的View）
* 组件
    * 定义
        * 函数组件
            * 利用函数来定义一个组件
        * 类组件
            * 利用类来定义一个组件
        
        ```js
            // 函数组件
            function Comment(){
                return (
                    <div>
                        
                    </div>
                )
            }

            // 类组件
            // 必须有render方法
            class Comment extends React.Component{
                render(){
                    return <div>
                         
                    </div>
                }
            }
        ```
    * 使用
    ```jsx
        <Comment/>
    ```
### 练习
* 利用React实现todolist