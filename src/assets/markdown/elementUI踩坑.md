## ElementUI 表单校验没反应的问题

因为同一页面下写了多个表单，我需要对所有表单都进行校验无误后再向后台发起请求。而当我通过form的**validate**方法去校验时，发现其返回的promise永远都停留在pending状态，不会结束。

## 原因

一番排查后发现，是表单校验规则中，部分情况没有调用callback方法去告诉组件，我已经校验完成了。所以导致promise一直都是pending状态。

## 解决方式

通过修改完善表单校验规则修复了问题。


## ElementUI form组件状态透传到自定义组件中


![](./img/elementUI.png)

当你的自定义组件被包含在formitem中时，form检验失败后会向内透传一个 validateState的状态，这个状态会导致你内部的所有组件都变成了 错误状态。

## 解决方式

在你的自定义组件中把这个状态覆盖掉

```
// 屏蔽外部elmentForm的状态影响
  provide: {
    elFormItem: null,
  },
```




