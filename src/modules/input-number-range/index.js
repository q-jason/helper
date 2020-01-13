const inputNumberRange = function () {
  document.addEventListener('input', function (e) {
    let target = e.target
    let { nodeName, type, min, max, value } = target
    
    /** input, 类型为 number **/
    if (nodeName === 'INPUT' && type === 'number') {
      
      /** type number **/
      value = Number(value)
      
      /** min **/
      if (min && value < Number(min)) {
        target.value = min
      }
      
      /** max **/
      if (max && value > Number(max)) {
        target.value = max
      }
    }
  })
}

export { inputNumberRange }