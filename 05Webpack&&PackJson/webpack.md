
[React.js模仿大众点评webapp实战教程（1）搭建 webpack+React 开发环境](http://www.imooc.com/article/14499)

[Webpack 中文指南](http://zhaoda.net/webpack-handbook/loader.html)

[入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770#articleHeader6)
[webpcak - doc](https://webpack.js.org/concepts/)



## 是什么
模块： 一切皆是模块，，它把所有的文件都都当做模块处理，JavaScript代码，CSS和fonts以及图片等等通过合适的loader都可以被处理。

**Webpack 是一个模块打包器。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。**



![](http://ohbzayk4i.bkt.clouddn.com/17-10-31/37750049.jpg)



##安装

npm install webpack --save-dev
npm install webpack-dev-server --save-dev
> Use webpack with a development server that provides live reloading. This should be used for development only.


## about configure
- entry
- outPut
- loader
- plugins



### entry
> entry


```javascript
module.exports = {
  entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件,相当于mian文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
```
##  loader  转换器
> Webpack 本身只能处理原生的 JavaScript 模块，
loader 转换器可以将各种类型的资源转换成 JavaScript


``` javascript
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      },
    ]
  }
```
what's the menaning?

> hey webpcak complier, when you get cross the js, use baber-loader transfom first



参数配置
- test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
- loader：loader的名称（必须）
- include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
- query：为loaders提供额外的设置选项（可选）


### 相关loader
#### babel
[Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)
Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。

> Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。


## plugins
插件: 提供广泛的用途，作用于整个项目
```javascript
plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.tmpl.html'
    }),

    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
],
```
