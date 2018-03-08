# JSX

- state  setState是异步刷新的
- props default props
- jsx语法
- tips


## state setState是异步刷新的
```
handleChange = (e) => {
  this.setState({value: e.target.value})
  console.log(this.state.value)
}
```
log value will keep old;

1. how to get newsest data:
    1. setState(updater, callback]); //callback would get the newest data
    2. componentdidupdate;
2. if current state depend on previous state
    1. user  setState(update)
    > update = (previousState,preProps)=> {}

## props
set default value and Type
```
static propTypes = {
    comments: PropTypes.any,
    onDeleteComment: PropTypes.func,
    name:PropTypes.string,
    // is requeired?
    money:PropTypes.string.isRequired
}

static defaultProps = {
  comments: []
}  
```

## JSX语法
> 是什么：html和js混写
embed any js expression

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```
### all convert to js experssion

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// convert
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
```
 ![](http://huzidaha.github.io/static/assets/img/posts/44B5EC06-EAEB-4BA2-B3DC-325703E4BA45.png)



### 渲染列表数据
a. 对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 key 属性，这个 key 必须是每个元素唯一的标识。(为了更高效的渲染)


## tips

###  Booleans, Null, and Undefined Are Ignored

```
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>


```





## [模块化](#state)
import:导入模块
export：导出模块
export default: （输出模块可以指定任意变量名）
[Module 的语法](http://es6.ruanyifeng.com/#docs/module#export)
