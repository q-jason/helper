/** 内部的缓存值对象，所有缓存的值都会被记录到这里 **/
let innerCacheData = {}

/**
 *  缓存数据
 *  注意：重复 cache 相同的 name 会替换上一个的缓存值
 *
 *  @param { String } name  - 缓存标识
 *  @param { Any }    value - 缓存值
 **/
const cache = function (name, value) {
  let _name = String(name)
  let _value = value
  
  /** 深拷贝 value **/
  if (typeof _value === 'object') {
    _value = JSON.parse(JSON.stringify(value))
  }
  
  /** 记录到内部缓存值对象中 **/
  innerCacheData[ _name ] = _value
}

/**
 *  回退数据
 *
 *  @param { String }   name  - 缓存标识
 *  @param { Function } backHandler - 自定义的回退方法
 **/
const back = function (name, backHandler) {
  backHandler(innerCacheData[ String(name) ])
}

const cacheValue = { cache, back }

export { cacheValue }