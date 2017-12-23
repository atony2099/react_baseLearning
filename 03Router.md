## Router
[React Router 使用教程
](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
[example-code](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)
[react-router 中的history
](https://zhuanlan.zhihu.com/p/20799258?refer=jscss)
[深入理解 react-router 路由系统
](https://zhuanlan.zhihu.com/purerender/20381597)


##是什么：
** 定义了各个路径(访问方式) 与组件的对应关系**

###  通配符 对应规则
1.  由上面到下面匹配

2. 具体
a.  不带参数
  `<Route path='/city' component={City}/> `
b.
  `<Route path='/search/:category(/:keyword)' component={SearchDeatail} />`
  ()表示可选 通过this.props.params获取



## 原理
![](http://ohbzayk4i.bkt.clouddn.com/17-11-26/57273424.jpg)


![](http://ohbzayk4i.bkt.clouddn.com/17-11-26/30186811.jpg)

将参数转换为location， 根据location渲染对应的UI


###location对象
```
pathname      同window.location.pathname
search        同window.location.search
state         一个捆绑在这个地址上的object对象
action        (PUSH, REPLACE, 或者 POP中的一个)
key           唯一ID
```


## indexrouter
指定首页
```
<Router>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="accounts" component={Accounts}/>
    <Route path="statements" component={Statements}/>
  </Route>
</Router>
````

## link
根据 path地址去做跳转
```
render() {
  return <div>
    <ul role="nav">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/repos">Repos</Link></li>
    </ul>
  </div>
}
```
## history操作
### 管理页面跳转
监听location的变化，渲染对应的view

```
//基本 使用
import { createHistory } from 'history'

const history = createHistory()

// 当前的地址
const location = history.getCurrentLocation()

// 监听当前的地址变换
const unlisten = history.listen(location => {
console.log(location.pathname)
})

// 将新入口放入历史堆栈
history.push({
pathname: '/the/path',
search: '?a=query',

// 一些不存在url参数上面的当前url的状态值
state: { the: 'state' }
})

// When you're finished, stop the listener
unlisten()
```

### category
- browserHistory
- hashHistory : will not send request to service



### 作用
- push(location)
> 会把push过的page记录到一个栈的结构中
- replace(location)
> history栈中不会记录当前的的path信息
specially is  used in login page

- goBack()
> just back

- go()
- goForward()


常用于表单控件，需要处理参数
```

import { browserHistory } from 'react-router'

// ...
<form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="userName"/>
  <input type="text" placeholder="repo"/>
  <button type="submit">Go</button>
</form>
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    browserHistory.push(path)
  },

  ```
