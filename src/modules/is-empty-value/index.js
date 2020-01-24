const isEmptyValue = function (value) {
  /**
   *  null, undefined, NaN, ''
   *  确定为空值
   **/
  if (value === null || value === undefined || (typeof value === 'number' && isNaN(value)) || value === '') {
    return true
  }
  
  /**
   *  字符串类型这里去除开头和结尾的空格，再判断下是否为空
   **/
  else if (typeof value === 'string') {
    if (value.replace(/(^\s*)|(\s*$)/g, '') === '') {
      return true
    }
  }
  
  /** 检验通过 **/
  return false
}

export { isEmptyValue }