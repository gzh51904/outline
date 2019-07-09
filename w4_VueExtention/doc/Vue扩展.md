# Vue扩展

## 优化
* 性能优化
  * 代码质量
    * Eslint
  * 按需加载
  * http请求优化
    * 合并压缩
  * 图片优化
    * 大小
    * 缓存：针对静态资源（图片、css,js）
      * 更新问题件如何避免缓存：添加时间戳 xxx.js?t=11234366345
  * ...
* UEO（用户使用产品过程中的主观感受）
  * 界面友好性
  * 操作便捷性
  * ...
* SEO（让页面对搜索引擎更友好）
  * 语义化标签
  * 热搜(原创)
  * 友情链接
  * ...
* 安全性优化


## 自定义指令

>内置指令

* 全局指令
    * 格式：Vue.directive(name,option)
    * 参数
        * name：指令名字，使用格式：v-name
        * option
            * Object：放钩子函数
            * Function：默认为bind和update的钩子函数
* 局部指令
    格式：directives: {}
* 钩子函数（了解）
    * bind：初始化时执行（默认）
    * inserted：元素插入页面时执行
    * update：所在模板更新时执行
    * componentUpdated：所在模板完成一次更新周期时调用
    * unbind：指令与元素解绑时执行
    * 参数
        * el    指令所绑定的元素，可以用来直接操作 DOM
        * binding   一个对象，包含以下案例中的属性
        * vnode
        * oldVnode
            > 仅在update 和 componentUpdated 钩子中可用

```javascript
   // 使用指令：v-laoxie
    Vue.directive('laoxie', {
      bind: function (el, binding, vnode) {

        //binding参数如下
        el.innerHTML =
          'name: '       + JSON.stringify(binding.name) + '<br>' + //指令名
          'value: '      + JSON.stringify(binding.value) + '<br>' + //指令值
          'expression: ' + JSON.stringify(binding.expression) + '<br>' + //字符串形式的指令表达式
          'arg: '        + JSON.stringify(binding.arg) + '<br>' + //指令参数，
          'modifiers: '  + JSON.stringify(binding.modifiers) + '<br>' //指令修饰符
      }
    });
```


## 过滤器

Vue允许你自定义过滤器，可被用于一些常见的文本格式化。
过滤器可以用在两个地方：双花括号插值和 v-bind

```html
    <!-- 在双花括号中 -->
    {{ message | capitalize }}

    <!-- 在 `v-bind` 中 -->
    <div v-bind:id="rawId | formatId"></div>
```

### 全局过滤器

> 格式：Vue.filter(name,definition)

### 局部过滤器

> 格式:filters属性

```javascript
    // 首字母大写
    Vue.filter('capitalize', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })
```

## mixin混入

> 混入 (mixins) 一般用于组件选项的复用（所有属性与组件选项一致）。并以一定的合并规则混入到组件中

* 全局mixin：`Vue.mixin(options)`
  > 全局注册一个混入，会影响后面所有创建的每个 Vue 实例/组件（影响较大，一般用于插件编写）

  ```js
    Vue.mixin({
      created: function () {
        // created生命周期函数会混入到下面的Vue实例中,且不会影响原来的选项
        console.log('global mixin:',this.username)
      }
    });

    new Vue({
      data:{
        username:'laoxie'
      },
      created(){
        console.log('app.username',this.username)
      }
    });
  ```

* 局部mixins：`mixins:[mymixin]`
>一般用于提取多个组件的公有部分配置

```js
  var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data);// => { message: "goodbye", foo: "abc", bar: "def" }
  }
})

```


## 开发插件

> 插件可以是一个对象（必须提供 install 方法）。也可以是一个函数，它会被作为 install 方法。并把 Vue 作为参数传入

### 插件类型：

* 添加全局方法或者属性，如: `vue-custom-element`
* 添加全局资源：指令/过滤器/过渡等，如 `vue-touch`
* 通过全局 mixin 方法添加一些组件选项，如: `vue-router`
* 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
* 一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 `vue-router`

```js
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      ...
    })

    // 3. 注入组件（影响后面定义的所有组件）
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      ...
    })
    Vue.component('mycomponent',{
      // 继承mixin中的created等配置
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
```

### 使用

> 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：

```js
  Vue.use(MyPlugin);//会自动调用MyPlugin中的install方法

  new Vue({
    //... options
  })

```

## 服务端渲染SSR

### vue-server-renderer

### Nuxt.js