## Router
[React Router 使用教程
](http://www.ruanyifeng.com/blog/2016/05/react_router.html)

[example-code](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)

###是什么：
> 定义了各个路径(访问方式) 与组件的对应关系
1. /  ...App
2. /about  ... App/About
3. /inbox  ...App/Inbox

### 通配符 对应规则
匹配是由上而下匹配的
1. /:parm  ===>(parm参数)
2. ()可以省略
3. * 任意字符 用于404页面


### indexrouter
显示指定根目录的首页
```
<Router>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="accounts" component={Accounts}/>
    <Route path="statements" component={Statements}/>
  </Route>
</Router>
````

### link
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
### 主动push
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
