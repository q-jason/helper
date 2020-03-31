/** 日志类型 **/
const TYPE = {
  LOG: 'log',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'err'
}

/** 各类型主题色 **/
const COLOR = {
  [ TYPE.LOG ]: '#4CAF50',
  [ TYPE.INFO ]: '#2196F3',
  [ TYPE.WARN ]: '#F57C00',
  [ TYPE.ERROR ]: '#FF5252'
}

/**
 *  所有方法参数如下
 *  @param { String }         title  - 日志标题，会显示在当前日志的头部，根据不同方法会有不同背景色，醒目显示
 *  @param { String | Array } [desc] - 详解介绍，可以为数组，会显示多行
 *  @param { String }         [type] - 日志类型，默认为 log，可选 info、warn、err
 **/
const log = function (options) {
  let { type, title, desc } = options
  let color = COLOR[ type ] || COLOR[ TYPE.LOG ]
  
  /**
   *  简写逻辑
   *  若配置项为字符串或者数字类型
   **/
  if (typeof options === 'string' || typeof options === 'number') {
    title = options
    desc = []
  }
  
  /** 对象配置 **/
  else {
    /**
     *  优化使用
     *    若 desc 为 Error 类型，那么 type 默认为 err
     **/
    color = desc instanceof Error ?
      COLOR[ options.type ] ?
        color :
        COLOR[ TYPE.ERROR ] :
      color
    
    /** 统一 desc 为数组类型 **/
    if (desc instanceof Array === false) {
      if (desc !== undefined) {
        desc = [ desc ]
      }
      else {
        desc = []
      }
    }
  }
  
  /** 输出漂亮的日志 **/
  console.log('')
  console.log('=============================================================')
  console.log(`%c${ title }`, `color: white; font-size: 12px; background-color: ${ color }; padding: 2px 5px; border-radius: 2px`)
  
  /** 若有 desc 才输出的部分 **/
  if (desc.length) {
    console.log('-')
    desc.forEach(function (desc) {
      console.log(desc)
    })
    console.log('-')
  }
  
  console.log('=============================================================')
  console.log('')
}

export { log }