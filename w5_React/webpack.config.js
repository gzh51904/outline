/**
    webpack配置文件
        > 是一个commonjs规范的莫文件
        * 入口: entry
        * 测试服务器：devServer
        * 加载器: loader
        * 插件：plugin
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = {
    //  mode:'development'
     entry:'./src/main.js',
     devServer:{
        contentBase:'./src',
     },

     resolve:{
        extensions:['.js','.jsx']
     },

    //  加载器
    module:{
        rules:[
            {
                //匹配
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }
            }
        ]
    },

    // 插件
    plugins:[
        // 以某个文件作为模板生成html文件
        new HtmlWebpackPlugin({
			template:'./src/template.html',
			hash:true,
			title:'首页'
        }),
    ]
 }
