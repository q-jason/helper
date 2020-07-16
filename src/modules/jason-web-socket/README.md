## 说明
> 更好用的 WebSocket <br/>
> 主要作用为增加了断开重连逻辑 <br/>
> 重连后已绑定的事件，无需重新绑定 <br/>
> 并优化了事件绑定方法

## 兼容性
- [x] H5
- [ ] 小程序
- [ ] node

```javascript
/**
 *  class JasonWebSocket
 *  @param { String }   url    - 接口地址
 *  @param { Object }   [opts] - 其他配置
 *  @param { Boolean | Function }  [opts.retry=false] - 是否断开重连，Function 需要返回 Boolean，可以返回 Promise
 *  @param { Number }  [opts.retryDelay=1000] - 重连的延迟时间
 **/
import { JasonWebSocket } from 'jason-helper'

let jws = new JasonWebSocket('ws:xxxxxxx', {
  retry () {
    /* 代表是否可以重连 */
    /* 可以返回 Promise，结果为 Boolean 类型即可*/
    /* 默认值为 false */
  },
  /* 重连的延迟时间 */
  retryDelay: 1000
})

// 事件绑定（open、message、error、close）
// jws.on(eventName, handler)
// jws.once(eventName, handler)
// jws.off(eventName, handler)

// 发送消息（原生 send 方法）
// jws.send()

// 关闭连接（原生 close 方法）
// jws.close()
```
