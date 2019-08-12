# React Native

## 介绍
React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是React 在原生移动应用平台的衍生产物，使用JS、JSX、CSS开发原生应用，目前支持iOS和安卓两大平台。
> 官网地址：https://reactnative.cn/docs/getting-started.html

## 环境安装
以windows+Android平台来安装React Native环境

* Nodejs
> Node 的版本必须大于等于 v10.x

* React Native命令行工具
> 全局安装react-native-cli
```bash
    npm install -g react-native-cli
```

* python
> Python 的版本必须为 2.x（不支持 3.x）

* JDK（Java SE Development Kit ）
> JDK 的版本必须是 1.8（目前不支持 1.9 及更高版本）

* Android Studio
    > 安装 Android Studio 来获得编译 Android 应用所需的工具和环境

    * 安装 Android SDK
        * SDK Manager -> "SDK Platforms" -> "Show Package Details"
            * -> Android SDK Platform 28
            * -> Intel x86 Atom_64 System Image
        * SDK Manager -> "SDK Tools"
            * -> 28.0.3（React Native 所必须的版本）
    * 配置环境变量
        > 设置`ANDROID_HOME`**系统变量**到`c:\Users\你的用户名\AppData\Local\Android\Sdk`
        
        > 设置`%ANDROID_HOME%\platform-tools`到path

> PS：安装以上工具尽量使用稳定的翻墙工具，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，导致无法安装的情况

## 开始一个项目

1. 创建新项目
```bash
    react-native init myRN
```

2. 编译并运行
> 注意第一次运行时需要下载大量编译依赖，耗时可能数十分钟
> 需打开`USB调试`及`允许安装未知方源`

```bash
    # 以下命令检测设备连接状态（包括模拟器）
    # adb devices

    # android
    react-native run-android

    # iOS
    react-native run-ios
```

3. 调试与热更新
> 摇一摇手机（或在命令行运行：`adb shell input keyevent 82`），打开`Enable Hot Reloading` 或 `Enable Live Reload`


## 使用
React Native 看起来很像 React，只不过其基础组件是原生组件而非 web 组件

### 内置组件
> 详情请查看官网 https://facebook.github.io/react-native/

### API
> 详情请查看官网 https://facebook.github.io/react-native/


## UI框架
* `react-native-elements`
    1. 安装
    ```bash
        npm install react-native-elements

        #yarn
        yarn add react-native-elements --save
    ```
    2. 安装`react-native-vector-icons`
    ```bash
        yarn add react-native-vector-icons --save-dev
    ```
    3. 关联原生组件：link
    ```bash
        react-native link react-native-vector-icons
    ```

* Expo 