
# 常见命令

# viewPort

简单理解: 页面显示的窗口，



[Nodejs package.json文件介绍](http://jingpin.jikexueyuan.com/article/34254.html)

[package.json文件](http://javascript.ruanyifeng.com/nodejs/packagejson.html)



## React 的声明周期

### React Cyclelife

#### Mounting

- [`constructor()`](https://facebook.github.io/react/docs/react-component.html#constructor)
- [`componentWillMount()`](https://facebook.github.io/react/docs/react-component.html#componentwillmount)
- [`render()`](https://facebook.github.io/react/docs/react-component.html#render)
- [`componentDidMount()`](https://facebook.github.io/react/docs/react-component.html#componentdidmount)

#### update

> An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:
>
> - [`componentWillReceiveProps()`](https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops)
> - [`shouldComponentUpdate()`](https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate)
> - [`componentWillUpdate()`](https://facebook.github.io/react/docs/react-component.html#componentwillupdate)
> - [`render()`](https://facebook.github.io/react/docs/react-component.html#render)
> - [`componentDidUpdate()`](https://facebook.github.io/react/docs/react-component.html#componentdidupdate)

参考:

[React.Component](https://facebook.github.io/react/docs/react-component.html#mounting)


## 属性的改变
### state 内部属性
- 特点1:异步刷新的
```javascript
handleClickOnLikeButton () {
  this.setState({ count: 0 }) // => this.state.count 还是 undefined
  this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
  this.setState({ count: this.state.count + 2}) // => NaN + 2 = NaN
}
```
**更改state并不会马上刷新**
解决方式
```javascrip
  handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }
```


### props 外部属性



### 渲染列表数据
a. 对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 key 属性，这个 key 必须是每个元素唯一的标识。(为了更高效的渲染)


## JSX语法的理解
```javascript
class Header extends Component {
  render () {
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
}
```
> 写在js里面的html 标签叫 jsx
>
> ![](http://huzidaha.github.io/static/assets/img/posts/44B5EC06-EAEB-4BA2-B3DC-325703E4BA45.png)





## Router
概念的理解：
1. 注册一个配置表
   <Router path ="/" component={PCIndex}></Router>

通过上面的配置，这个应用知道如何渲染下面四个 URL：

URL	组件
1. /	App
   2. /about App -> About
   3. /inbox  App -> Inbox
   4. /inbox/messages/:idApp -> Inbox -> Message




path:
2. 通过link完成跳转
>  Link
>  跳转的



## React- render

```html
<div id="root"></div>

const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,document.getElementById('root')
);

```


## 模块化
import:导入模块
export：导出模块
export default: （输出模块可以指定任意变量名）
[Module 的语法](http://es6.ruanyifeng.com/#docs/module#export)



## React

### tips
onclick 直接添加事件，
需要手动绑定this


### 属性
state 内部属性；
> 少用state，因为状态多了不好管理
> props: 内部属性；

setState
会导致重新render

#### 受控组件
状态来自于React， 更好的控制状态
而不是来自自己


#### 状态提升
 多个组件 依赖 或者影响某个状态的时候，就需要把该状态提升到最近的公共组件


## 真实的dom操作
```
<input ref={(input) => this.input = input} /> 通过ref 函数拿到一个真实dom节点
```



## 数据的持久化
localstorage --
