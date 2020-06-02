/**
 *  隐藏部分字符串
 *
 *  @param { String } str       - 需要转换的字符串
 *  @param { String } [chars=*] - 转换后的字符
 *  @param { Number } [startI]  - 从哪里开始转换（包含），默认会截取中间的位置进行转换
 *  @param { Number } [endI]    - 转换结束的位置（包含），默认会截取中间的位置进行转换
 *
 *  @return { String }
 **/
function hidePartStr (str, chars, startI, endI) {
  /** 参数处理 **/
  str = String(str)
  chars = chars || '*'
  startI = startI || null
  endI = endI || null
  
  /**
   *  默认情况
   *  会自动截取中间的部分转换
   **/
  let strLength = str.length
  let transformLength = parseInt(strLength / 2)
  let transformStartI = parseInt((strLength - transformLength) / 2)
  let transformEndI = transformStartI + transformLength
  let chartStr = ''
  
  /**
   *  指定了 startI 和 endI
   **/
  if (
    typeof startI === 'number' &&
    typeof endI === 'number'
  ) {
    /** startI 负数情况 **/
    if (startI < 0) {
      startI = strLength + startI
    }
    
    /** endI 负数情况处理 **/
    if (endI < 0) {
      endI = strLength + endI
    }
    
    /** 包含 endI **/
    endI++
    
    transformLength = endI - startI
    transformStartI = startI
    transformEndI = endI
  }
  
  for (let i = 0; i < transformLength; i++) {
    chartStr += chars
  }
  
  return str.substr(0, transformStartI) + chartStr + str.substr(transformEndI)
}

export { hidePartStr }