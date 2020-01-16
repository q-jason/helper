## 说明
> 用于项目中依赖某值，需要等待某值赋值后才能继续下去的逻辑

## 方法设计
> 该功能方法基于 Promise <br/>
> 建议使用 async + await，会让代码更简洁 <br/>
> 该方法宗旨为 “等待某值赋值后才继续进行的操作” 而非 “监听值改变”

 function       | params      | description
 -------------- | ----------- | ----------------------------------------------------------------
 waitValue.on   | name        | name 为标识，监听赋值，返回 Promise，结果为第一次 emit 时的值
 waitValue.emit | name, value | name 为标识，发出通知，代表值已赋值，value 为结果

- 若 on 在 emit 后执行，则会立刻 resolve，并返回第一次 emit 时的值（emit 时值会被缓存起来）
- 若 value 为 Error 类型，则会进入 reject 状态

### 包罗万象的例子

```javascript
import { waitValue } from 'jason-helper'  

(async () => {
  let value = { num: 1 }
  /** 延迟两秒后，test 标识赋值 **/
  setTimeout(() => {
    waitValue.emit('test', value)
  }, 2000)

  /** 等待 test 赋值后，才继续进行 **/
  let data = await waitValue.on('test')
  log({
    title: '结束了',
    desc: data
  })
  // => data = { num: 1 }
  
  /** 下面执行时，因为 test 已被赋值，所以会立刻执行，并且结果为缓存的值 **/
  value = { num: 2 }
  let data2 = await waitValue.on('test')
  log({
    title: '立刻返回',
    desc: data2
  })
  // => data = { num: 1 }
})()
```