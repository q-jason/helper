## 说明
> 将 object 转为 formData

## 兼容性
- [x] H5
- [ ] 小程序
- [x] node

## 方法设计

 function       | params                                | description
 -------------  | ------------------------------------- | ------------------------------------------------------------------------------
 objToFormData  | obj, opts = { arrayBrackets: false }  | arrayBrackets：若为数组类型是否给 key 加上中括号（便于 php 解析）
