/**
 *  将 js 对象转为 formData
 *  @param { Object }  obj - 需要转换为 formData 的对象
 *  @param { Object }  [opts] - 配置
 *  @param { Boolean } [opts.arrayBrackets=false] - 是否需要在数组类型的key后面加上小括号
 *
 *  @description
 *    目前已知 php 解析 formData 数组类型时需要将 key 后面加上 [] 才能正常解析
 *    而其他后端语言不用
 *
 *    php example:
 *      files[]: (binary)
 *      files[]: (binary)
 *
 *    other example:
 *      files: (binary)
 *      files: (binary)
 **/
const objToFormData = function (obj, opts = { arrayBrackets: false }) {
  const formData = new FormData()
  
  for (const key in obj) {
    const value = obj[ key ]
    const isArr = value instanceof Array
    
    /** 数组类型 **/
    if (isArr) {
      value.forEach(function (itemValue, i) {
        formData.append(
          opts.arrayBrackets ? key + '[]' : key,
          itemValue
        )
      })
    }
    
    /** 非数组类型 **/
    else {
      formData.append(key, value)
    }
  }
  
  return formData
}

export { objToFormData }