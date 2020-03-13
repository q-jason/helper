/**
 *  补 0 前缀
 *  @param { Number } - 数字
 *  @param { Number } - 固定的总位数
 **/
let prefixZero = function (num, n) {
  return (Array(n).join(0) + num).slice(-n)
}

export { prefixZero }