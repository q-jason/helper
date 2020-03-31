## 说明
> 用于某参数异步获取，但是后续逻辑基于这个参数 <br/>
> 必须等待获取后才能继续进行的场景

### 包罗万象的例子

```javascript
import { waitValue } from 'jason-helper'  

/** 约定好的标志 **/
let sign = 'data'

/** 这里模拟两秒后会获取到某值 data **/
setTimeout(() => {
  waitValue.emit(sign, 10086)
}, 2000)

/** 等待 data 获取后，继续进行 **/
waitValue.on(sign)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.err(err)
  })
  
// => 两秒后会 console 出结果
```

## 方法设计
> 该功能方法基于 Promise <br/>
> 建议使用 async + await，会让代码更简洁 <br/>

 function       | params      | description
 -------------- | ----------- | ----------------------------------------------------------------
 waitValue.on   | name        | name 为标识，监听赋值，返回 Promise，结果为第一次 emit 时的值
 waitValue.emit | name, value | name 为标识，发出通知，代表值已赋值，value 为结果

注意：
- 该方法应用宗旨为 “等待某值赋值后才继续进行的操作” 而非 “监听值改变”
- 若 on 在 emit 后执行，则会立刻 resolve，并返回第一次 emit 时的值（emit 时值会被缓存起来）
- 若 value 为 Error 类型，则会进入 reject 状态
- 相同 "标志" 只可以 emit 一次