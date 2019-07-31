# Hybrid

## day7-2

### 面试题
* 正向代理与反向代理
    * 代理服务器的位置
    * 使用场景
        * 正向代理：翻墙
        * 反向代理：负载均衡
* jsonp的原理
    * script把代码下载到客户端执行
    * 前端：
        * 定义全局函数
        * 发送全局函数名 `getData`
    * 后端：响应全局函数执行的代码 `getData(xxxx)`
* HOC封装的注意事项
    * 一个包装函数（包装组件）
    * 返回一个新的组件
    ```js
        MyHoc = (InputComponent)=>{
            return function(props){
                let token = LocalSotrage.getItem('token')
                return <InputComponent token={token} {...props}/>
            }
        }
    ```
* React UI框架有哪些
    * ant-design
    * antd-mobile
* Options请求的理解
    * 预请求（浏览器自动发起，一般在复杂的跨域请求中出现）

## 知识点
* WebApp        Web应用
    * 优点：
        * 成本低
        * 跨平台
    * 缺点
        * 不能调用硬件设备
    * 使用技术：html+css+javascript
* NativeApp     原生应用
    * 缺点：
        * 成本高
    * 优点
        * 性能好，流畅
    * 使用技术
        * android: xml+java
        * iOS: xml + （Objective-C/swift）
* HybridApp
    * 综合WebApp与NativeApp的优点， 在native中利用webview中嵌入H5页面形成半Native半web开发模式
    * 开发模式
        * Native主导
        * H5主导
* h5主导的开发模式
    * 利用第三方平台
        * 云平台
            * DCloud
                * 5+runtimer:通过window.plus提供接口
            * APICloud
        * 本地打包
            * android
                * java环境
                * android环境
                * cordova
            * iOS
                * 买一台macBook
                * Xcode

## day7-3

### 复习
* DCloud
    * h5+runtime接口：window.plus
        * 摄像头:plus.camera
        * IO：plus.io
        * webview：plus.webview
        * 事件
            ```js
                document.addEventListener('plusready',()=>{
                    //plus准备就绪
                })

                // mui
                mui.plusReady(()=>{

                });
            ```
    * mui
        ```js
            mui.plusReady()
            mui.init()

        ```
### 知识点
* 