/**
 *  优化控制台输出日志样式
 *  使其醒目易懂
 *  注意：使用了下面方法后，游览器控制台将无法定位到代码位置
 *
 *  所有方法参数如下
 *  @param { String } title - 日志标题，会显示在当前日志的头部，根据不同方法会有不同背景色，醒目显示
 *  @param { String | Array } descArr - 详解介绍，可以为数组，会显示多行
 **/

/** 各方法主题色 **/
const COLOR_LOG = '#4CAF50'
const COLOR_INFO = '#2196F3'
const COLOR_WARN = '#F57C00'
const COLOR_ERR = '#FF5252'

/** 内部实现方法 **/
const innerHandler = function (title, descArr, color) {
  let titleIsNumber = typeof title === 'number'
  let titleIsStr = typeof title === 'string'
  let descArrIsArr = descArr instanceof Array
  
  /** title 参数检查 **/
  if (titleIsNumber === false && titleIsStr === false) {
    throw new TypeError('title 必须是 String 或 Number 类型')
  }
  
  /** 统一 descArr 为数组类型 **/
  if (descArrIsArr === false) {
    descArr = Array(descArr)
  }
  
  /** 输出漂亮的日志 **/
  console.log('')
  console.log('=============================================================')
  console.log(`%c${ title }`, `color: white; font-size: 12px; background-color: ${ color }; padding: 2px 5px; border-radius: 2px`)
  console.log('-')
  descArr.forEach(function (desc) {
    console.log(desc)
  })
  console.log('-')
  console.log('=============================================================')
  console.log('')
}

/**
 *  普通日志
 *  场景：功能简短介绍
 **/
export const log = function (title, descArr) {
  innerHandler(title, descArr, COLOR_LOG)
}

/**
 *  信息日志
 *  场景：用于打印数据
 **/
export const info = function (title, descArr) {
  innerHandler(title, descArr, COLOR_INFO)
}

/**
 *  警示日志
 *  场景：用于非致命性错误，但是需要注意
 ***/
export const warn = function (title, descArr) {
  innerHandler(title, descArr, COLOR_WARN)
}

/***
 *  错误日志
 *  场景：致命错误
 ***/
export const err = function (title, descArr) {
  innerHandler(title, descArr, COLOR_ERR)
}

export default {
  log,
  info,
  warn,
  err
}