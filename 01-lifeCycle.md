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
