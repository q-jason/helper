import { EventEmitter } from 'events'

/**
 *  class JasonWebSocket
 *  @param { String }   url    - 接口地址
 *  @param { Object }   [opts] - 其他配置
 *  @param { Boolean | Function }  [opts.retry=false] - 是否断开重连，Function 需要返回 Boolean，可以返回 Promise
 *  @param { Number }  [opts.retryDelay=1000] - 重连的延迟时间
 **/
class JasonWebSocket {
  constructor (url, opts) {
    /** 配置默认值 **/
    opts = {
      retry: false,
      retryDelay: 1000,
      ...opts
    }
    
    /** WebSocket 实例 **/
    this.ws = null
    
    /** 接收到的所有数据 **/
    this.data = []
    
    /** 事件对象 **/
    this._events = new EventEmitter()
    
    /** 是否手动关闭（调用了 close 方法） **/
    this._activClose = false
    
    /** 初始化连接 **/
    this._init(url, opts)
  }
  
  _init (url, opts) {
    /** 连接 **/
    this.ws = null
    this.ws = new WebSocket(url)
    
    /** 初始化事件 **/
    this.ws.onopen = (...args) => {
      this._events.emit('open', ...args)
    }
    this.ws.onmessage = (...args) => {
      this._events.emit('message', ...args)
    }
    this.ws.onerror = (...args) => {
      this._events.emit('error', ...args)
    }
    this.ws.onclose = (...args) => {
      this._events.emit('close', ...args)
    }
    
    /** 接收到消息时，存入到 data 属性中 **/
    this.on('message', e => {
      this.data.push(e.data)
    })
    
    /** 断开重连逻辑 **/
    this.once('close', e => {
      /**
       *  ! 不重连
       **/
      if (
        Boolean(opts.retry) === false ||
        this._activClose === true
      ) {
        return null
      }
      
      /**
       *  延迟重连
       **/
      setTimeout(async () => {
        /**
         *  根据传入的 opts.retry
         *  判断是否需要重连
         *  retry 有可能是函数类型（并且有可能返回 Promise）
         **/
        let canRetry = await (async () => {
          try {
            return typeof opts.retry === 'function' ?
              await opts.retry() :
              true
          }
          catch (err) {
            console.error(err)
            return false
          }
        })()
        
        /**
         *  若需要重连则重新连接
         **/
        canRetry && this._init(url, opts)
        
      }, opts.retryDelay)
    })
  }
  
  /** 绑定事件 **/
  on (eventName, handler) {
    return this._events.on(eventName, handler)
  }
  
  /** 绑定一次性事件 **/
  once (eventName, handler) {
    return this._events.once(eventName, handler)
  }
  
  /** 解除事件 **/
  off (eventName, handler) {
    return this._events.off(eventName, handler)
  }
  
  /** 主动向服务器发送消息，代理 ws.send 方法 **/
  send (...args) {
    return this.ws.send(...args)
  }
  
  /** 主动关闭连接，代理 ws.close 方法 **/
  close (...args) {
    /** 手动关闭标识 **/
    this._activClose = true
    
    return this.ws.close(...args)
  }
}

export { JasonWebSocket }