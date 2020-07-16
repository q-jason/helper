/**
 *  内部值集合
 *    key 为自定义的字符串标识
 *    value 为 “等值” 实例
 **/
let valueCollection = {}

/** “等值” 实例 **/
class ValueItem {
  constructor () {
    this.resolveArr = []
    this.rejectArr = []
    this.value = null
  }
}

/**
 *  根据 '标识名' 监听变量是否已赋值
 *  该函数返回一个 Promise
 *
 *  该函数执行时
 *  若 '标识名' 已被 emit 过
 *  则会立刻触发 resolve
 *  返回 emit 时的缓存值
 *
 *  @param { String }   name       - 标识名，需要和 emit 相同
 *  @param { Function } [callback] - 等值成功后的回调函数
 **/
let on = function (name, callback) {
  let promise = new Promise((resolve, reject) => {
    /**
     *  当前 name 指向的 resolve 集合
     *  若不存在则初始化
     **/
    let target = valueCollection[ name ] =
      valueCollection[ name ] ||
      new ValueItem()
    
    /**
     *  已有值，则立刻返回缓存的结果
     **/
    if (target.value) {
      resolve(target.value)
    }
    
    /**
     *  暂时无值
     *  push resolve 和 reject
     *  等待 emit 触发
     **/
    else {
      target.resolveArr.push(resolve)
      target.rejectArr.push(reject)
    }
  })
  
  /**
   *  若 callback 存在
   *  则在 promise resolve 后执行 callback
   *  on 方法为同步函数
   **/
  if (callback) {
    promise
      .then(result => callback(null, result))
      .catch(err => callback(err, null))
    
    return null
  }
  
  /**
   *  若 callback 不存在
   *  则返回 Promise
   **/
  else {
    return promise
  }
}

/**
 *  用于通知变量已有值，触发回调
 *  @param { String } name - 标识名，需要和 on 相同
 *  @param { String } value - 结果值，该值会被缓存起来
 **/
let emit = function (name, value) {
  /**
   *  当前 name 指向的 resolve 集合
   *  若不存在则初始化
   **/
  let target = valueCollection[ name ] =
    valueCollection[ name ] ||
    new ValueItem()
  
  /** 判断是否是重复触发 **/
  if (target.value) {
    return console.warn(`来自 waitValue 的警告，${ name } 已被赋值，请勿重复通知`)
  }
  
  /** 若 value 是 error，则 reject **/
  if (value instanceof Error === true) {
    target.rejectArr.forEach(reject => {
      reject(value)
    })
  }
  
  /**
   *  不是错误，则 resolve
   *  设置已完成标识
   *  缓存结果（若为引用类型则会深拷贝）
   **/
  else {
    /** 触发全部的 resolve **/
    target.resolveArr.forEach(resolve => {
      resolve(value)
    })
    
    /** 缓存值，若为引用类型深拷贝**/
    target.value = value || true
    
    /** 清除 resolve 和 reject 数组 **/
    delete target.resolveArr
    delete target.rejectArr
  }
}

let waitValue = {
  on, emit
}

export { waitValue }
