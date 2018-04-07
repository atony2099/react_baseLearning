
# props ---- readonly

1. 什么是纯函数。  
- 不会对作用域外产生副作用(影响)
- 只依赖输入参数。
- 相同的输入，相同的输出。

2. 纯组件,=== 类似。
> rule:
> All React components must act like pure functions.

这样才能达到可复用。 不会产生危害。

3. 为什么props需要设定为read-only
为了达到纯组件的目的---不改变外部的状态。
