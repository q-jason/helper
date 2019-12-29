/** 代表已完成的 key **/
const KEY_OK = 'ok'
/** 代表缓存值的 key **/
const KEY_VALUE = 'value'
/** 代表 resolve 数组的 key **/
const KEY_RESOLVE_ARR = 'resolveArr'
/** 代表 reject 数组的 key **/
const KEY_REJECT_ARR = 'rejectArr'

/**
 *  记录所有监听的 Promise
 **/
let resolveCollection = {}

/**
 *  根据 '标识名' 监听变量是否已赋值
 *  该函数返回一个 Promise
 *
 *  该函数执行时
 *  若 '标识名' 已被 emit 过
 *  则会立刻触发 resolve
 *  返回 emit 时的缓存值
 *
 *  @param { String } name - 标识名，需要和 emit 相同
 **/
let on = function (name) {
  /** 参数判断 **/
  if (typeof name !== 'string') {
    throw new TypeError('waitValue 的 name 参数必须为字符串')
  }
  
  return new Promise((resolve, reject) => {
    /**
     *  当前 name 指向的 resolve 集合
     *  若不存在则初始化
     **/
    let target = resolveCollection[ name ] = resolveCollection[ name ] || {
      /** resolve 数组 **/
      [ KEY_RESOLVE_ARR ]: [],
      /** reject 数组 **/
      [ KEY_REJECT_ARR ]: []
    }
    
    /**
     *  已有值，则立刻返回缓存的结果
     **/
    if (target && target[ KEY_OK ] === true) {
      resolve(target[ KEY_VALUE ])
    }
    
    /**
     *  暂时无值
     *  push resolve 和 reject
     *  等待 emit 触发
     **/
    else {
      target[ KEY_RESOLVE_ARR ].push(resolve)
      target[ KEY_REJECT_ARR ].push(reject)
    }
  })
}

/**
 *  用于通知变量已有值，触发回调
 *  @param { String } name - 标识名，需要和 on 相同
 **/
let emit = function (name, value) {
  /**
   *  当前 name 指向的 resolve 集合
   *  若不存在则初始化
   **/
  let target = resolveCollection[ name ] = resolveCollection[ name ] || {
    /** resolve 数组 **/
    [ KEY_RESOLVE_ARR ]: [],
    /** reject 数组 **/
    [ KEY_REJECT_ARR ]: []
  }
  
  /** 参数判断 **/
  if (typeof name !== 'string') {
    throw new TypeError('waitValue 的 name 参数必须为字符串')
  }
  
  /** 判断是否是重复触发 **/
  if (target[ KEY_OK ]) {
    return console.warn(`来自 waitValue 的警告，${ name } 已被赋值，请勿重复通知`)
  }
  
  /** 若 value 是 error，则 reject **/
  if (value instanceof Error === true) {
    target[ KEY_REJECT_ARR ].forEach(reject => {
      reject(value)
    })
  }
  
  /**
   *  不是错误，则 resolve
   *  设置已完成标识
   *  缓存结果
   **/
  else {
    target[ KEY_RESOLVE_ARR ].forEach(resolve => {
      resolve(value)
    })
    /** 状态改变 **/
    target[ KEY_OK ] = true
    /** 缓存值 **/
    target[ KEY_VALUE ] = value
    /** 清除 resolve 和 reject 数组 **/
    target[ KEY_RESOLVE_ARR ] = null
    target[ KEY_REJECT_ARR ] = null
  }
}

let waitValue = {
  on, emit
}

export { waitValue }