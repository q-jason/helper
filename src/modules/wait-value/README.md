## 说明
> 用于某参数异步获取，但是后续逻辑基于这个参数 <br/>
> 必须等待获取后才能继续进行的场景

## 兼容性
- [x] H5
- [x] 小程序
- [x] node

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
    console.log('基于 Promise：' + result)
  })
  .catch(err => {
    console.err(err)
  })

waitValue.on(sign, (err, result) => {
  console.log('基于 callback：' + result)
})
  
// => 两秒后会 console 出结果
```

## 方法设计

 function       | params           | description
 -------------- | -----------      | ----------------------------------------------------------------
 waitValue.on   | name, [callback] | name 为标识，监听赋值，若没有设置 callback 则返回 Promise
 waitValue.emit | name, [value]    | name 为标识，发出通知，代表值已赋值，value 为结果

注意：
- 该方法应用宗旨为 “等待某值赋值后才继续进行的操作” 而非 “监听值改变”
- on 方法若设置了 callback 则不会返回 Promise
- 相同标志的 emit 只会成功执行一次，并且会缓存第一次的值，多次 emit 会发出警告
- 若 on 在 emit 后执行，则会立刻触发 callback 或 进入 resolve 状态
- 若 value 为 Error 类型，则会进入 reject 状态