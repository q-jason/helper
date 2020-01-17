/**
 *  强化 min 和 max 属性
 *  只能输入 min ~ max 区间的数字
 *
 *  注意：
 *    需要允许空值的存在（否则用户体验非常不好）
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
      dispatchInput(target)
    }
    if (max && value > max) {
      target.value = max
      dispatchInput(target)
    }
  })
}

/**
 *  只能输入数字，禁止输入非法字符(e, E, +)
 **/
const onlyNumber = function () {
  /**
   *  在 textInput 中判断是否含有特殊符号，还原旧值
   *  使用 textInput 事件而非 input 事件，目的是兼容性
   *  input 事件在手机下无法判断用到按的是哪个键
   *  textInput 事件能正常判断出(data 属性)
   **/
  document.addEventListener('textInput', function (e) {
    let { target, data } = e
    let { nodeName, type, value: oldValue } = target
    let newValue = null
    
    /** input[type="number"] 才走逻辑 **/
    if (nodeName !== 'INPUT' || type !== 'number') {
      return
    }
    
    /** 等待新值 **/
    setTimeout(() => {
      newValue = target.value
      
      /** 永远不允许出现 '+' 'e' 'E' **/
      if ([ '+', 'e', 'E' ].indexOf(data) !== -1) {
        target.value = oldValue
        dispatchInput(target)
      }
      
      /**
       *  只有开头允许出现一个 '-'
       *
       *  实现逻辑：
       *    - 当输出的值为 '-'
       *    - 新值为空（特殊字符造成）
       *    - 旧值存在时
       *
       *  代表是在输入了数字之后又输入了 '-'，为非法操作
       *
       *  注意：
       *    - 中文输入法输入 e 后点回车的情况无法判断...
       *    - 暂时没有办法判断 '----90' 这种情况....
       *    - 若输入了数字后，全选不删除的情况下直接输入 '-' 的情况无法判断....
       **/
      if (data === '-' && newValue === '' && oldValue) {
        target.value = oldValue
        dispatchInput(target)
      }
      
    }, 20)
  })
}

/**
 *  整合
 **/
const betterInputNumber = {
  numberRange,
  onlyNumber
}

/**
 *  修正值后触发 input 事件
 *  让其他类库正确同步绑定值
 *  vue v-model 等
 ***/
function dispatchInput (inputEl) {
  let customEvent = document.createEvent('UIEvents')
  customEvent.initUIEvent('input', true, true, window, 1)
  inputEl.dispatchEvent(customEvent)
}

export { betterInputNumber }