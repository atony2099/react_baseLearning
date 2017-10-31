
[React.js模仿大众点评webapp实战教程（1）搭建 webpack+React 开发环境](http://www.imooc.com/article/14499)

[Webpack 中文指南](http://zhaoda.net/webpack-handbook/loader.html)


#安装

npm install webpack --save-dev
npm install webpack-dev-server --save-dev
> Use webpack with a development server that provides live reloading. This should be used for development only.

# about configure
```javascript
module.exports = {
  entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件,相当于mian文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
```
##  loader
> Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。

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
插件:

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

## Setting Up Babel-Loader
```javascript
 npm i babel-loa用der babel-preset-es2015 babel-preset-react -S
```

 ## JSX 原理： jsx 就是js 对象
 将所有的html 用js 表示

 ```
 import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
  render () {
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
}


ReactDOM.render(
  <Header />,
  document.g
 ```
  编译后转换为
```javascript
  import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
  render () {
    return (
     React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { className: 'title' },
          "React 小书"
        )
      )
    )
  }
}

ReactDOM.render(
  React.createElement(Header, null),
  document.getElementById('root')
);
```
