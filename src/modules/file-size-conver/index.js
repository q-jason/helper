const fileSizeConver = {}

fileSizeConver.betterShow = function (size, unit) {
  let bSize = null
  let _unit = unit.toLowerCase()
  let _size = ''
  
  /** 将 size 转为 bSize **/
  switch (_unit) {
    case 'b' : {
      bSize = size
      break
    }
    case 'kb': {
      bSize = size * 1024
      break
    }
    case 'mb': {
      bSize = size * 1024 * 1024
      break
    }
    case 'gb': {
      bSize = size * 1024 * 1024 * 1024
      break
    }
    case 'tb': {
      bSize = size * 1024 * 1024 * 1024 * 1024
      break
    }
    default : {
      throw new Error(`fileSizeConver：originUnit 参数单位错误 ${ originUnit }`)
    }
  }
  
  if (bSize < 0.1 * 1024) { //如果小于0.1KB转化成B
    _size = bSize.toFixed(2) + 'B'
  }
  else if (bSize < 0.1 * 1024 * 1024) {//如果小于0.1MB转化成KB
    _size = (bSize / 1024).toFixed(2) + 'KB'
  }
  else if (bSize < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB
    _size = (bSize / (1024 * 1024)).toFixed(2) + 'MB'
  }
  else { //其他转化成GB
    _size = (bSize / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
  }
  
  var _sizestr = _size + ''
  var len = _sizestr.indexOf('\.')
  var dec = _sizestr.substr(len + 1, 2)
  if (dec == '00') {//当小数点后为00时 去掉小数部分
    return _sizestr.substring(0, len) + _sizestr.substr(len + 3, 2)
  }
  return _sizestr
}

/**
 *  @param { Number } size - 文件大小
 *  @param { String } originUnit      - 转换前的文件单位
 *  @param { String } converUnit      - 转换后的文件单位
 *  @param { Boolean } [hasUnit=true] - 转换后是否带单位
 **/
fileSizeConver.format = function (size, originUnit, converUnit, hasUnit = true) {
  let bSize = null
  let formatSize = null
  let fileLengthFormatNParams = null
  
  let _originUnit = originUnit.toLowerCase()
  let _converUnit = converUnit.toLowerCase()
  
  /** 将 size 转为 bSize **/
  switch (_originUnit) {
    case 'b' : {
      bSize = size
      break
    }
    case 'kb': {
      bSize = size * 1024
      break
    }
    case 'mb': {
      bSize = size * 1024 * 1024
      break
    }
    case 'gb': {
      bSize = size * 1024 * 1024 * 1024
      break
    }
    case 'tb': {
      bSize = size * 1024 * 1024 * 1024 * 1024
      break
    }
    default : {
      throw new Error(`fileSizeConver：originUnit 参数单位错误 ${ originUnit }`)
    }
  }
  
  /** 确定 fileLengthFormatNParams **/
  switch (_converUnit) {
    case 'b' : {
      formatSize = bSize + 'b'
      break
    }
    case 'kb': {
      formatSize = bSize / 1024 + 'kb'
      break
    }
    case 'mb': {
      formatSize = bSize / 1024 / 1024 + 'mb'
      break
    }
    case 'gb': {
      formatSize = bSize / 1024 / 1024 / 1024 + 'gb'
      break
    }
    case 'tb': {
      formatSize = bSize / 1024 / 1024 / 1024 / 1024 + 'tb'
      break
    }
    default : {
      throw new Error(`fileSizeConver：converUnit 参数单位错误 ${ converUnit }`)
    }
  }
  
  return hasUnit ?
    formatSize :
    parseFloat(formatSize)
}

export { fileSizeConver }