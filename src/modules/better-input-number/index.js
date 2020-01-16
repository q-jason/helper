/**
 *  强化 min 和 max 属性
 *  只能输入 min ~ max 区间的数字
 *
 *  注意：
 *    允许空值的存在（否则用户体验非常不好）
 **/
const numberRange = function () {
  document.addEventListener('input', function (e) {
    let { target, data } = e
    let { nodeName, type, min, max, value } = target
    
    /** input[type="number"] 才走逻辑 **/
    if (nodeName !== 'INPUT' || type !== 'number') {
      return
    }
    
    /** 若 value 为空值则不做任何处理，因为有可能有特殊符号，导致无法判断 **/
    if (!value) {
      return
    }
    
    /** 统一转为 number 类型 **/
    value = Number(value)
    min = Number(min)
    max = Number(max)
    
    /** 越界逻辑 **/
    if (min && value < min) {
      target.value = min
    }
    if (max && value > max) {
      target.value = max
    }
  })
}

/**
 *  只能输入数字，禁止输入非法字符(e, E, +)
 *  只允许在开头输入 -（未完成，暂时无法输入 负号，或者只能先输入数字，然后拼接上开头的 负号）
 *
 *  待完成
 **/
const onlyNumberOld = function () {
  document.addEventListener('keydown', function (e) {
    let { target, key } = e
    /** 这里的 oldValue 是发生输入之前的值，keydown 事件的特点 **/
    let { nodeName, type, value: oldValue } = target
    
    /** input[type="number"] 才走逻辑 **/
    if (nodeName !== 'INPUT' || type !== 'number') {
      return
    }
    
    /** 等待赋新值 **/
    setTimeout(() => {
      /** 获取输入之后的值 **/
      let newValue = target.value
      
      /**
       *  若不是删除按键
       *  并且为空值，则代表有非法字符
       *  回退值为之前的旧值
       *
       *  兼容性:
       *    这里的 Backspace 在手机下很神奇的有值....
       *    兼容性真是糟心....
       **/
      if (key !== 'Backspace' && newValue === '') {
        target.value = oldValue
      }
    }, 20)
  })
}
const onlyNumber = function () {
  const KEY_CACHE_VALUE = 'jasonHelperBetterInputNumberOnlyNumber'
  
  /** 在 keydown 中缓存还未输入的值 **/
  document.addEventListener('keydown', function (e) {
    let { target, key } = e
    /** 这里的 oldValue 是发生输入之前的值，keydown 事件的特点 **/
    let { nodeName, type, value: oldValue } = target
    
    /** input[type="number"] 才走逻辑 **/
    if (nodeName !== 'INPUT' || type !== 'number') {
      return
    }
    
    /** oldValue 有可能是空字符的情况，可能是由特殊字符造成的 **/
    if (oldValue) {
      target[ KEY_CACHE_VALUE ] = oldValue
    }
  })
  
  /**
   *  在 textInput 中判断是否含有特殊符号，还原旧值
   *  使用 textInput 事件而非 input 事件，目的是兼容性
   *  input 事件在手机下无法判断用到按的是哪个键
   *  textInput 事件能正常判断出(data 属性)
   **/
  document.addEventListener('textInput', function (e) {
    let { target, data } = e
    /** 这里的 oldValue 是发生输入之前的值，keydown 事件的特点 **/
    let { nodeName, type, value } = target
    let cacheValue = target[ KEY_CACHE_VALUE ]
    
    /** input[type="number"] 才走逻辑 **/
    if (nodeName !== 'INPUT' || type !== 'number') {
      return
    }
    
    /** 不允许出现 '+' 'e' 'E' **/
    if ([ '+', 'e', 'E' ].indexOf(data) !== -1) {
      back()
    }
    
    /** 只有开头允许出现一个 '-' **/
    if (data === '-' && cacheValue) {
      back()
    }
    
    /** 回退值 **/
    function back () {
      /** 这里有个执行顺序问题 **/
      setTimeout(() => {
        target.value = cacheValue
      }, 20)
    }
  })
}

/**
 *  整合
 **/
const betterInputNumber = function () {
  numberRange()
  onlyNumber()
}

export { betterInputNumber }