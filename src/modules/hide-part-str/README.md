## 说明
> 隐藏部分字符串显示

## 包罗万象的例子
```javascript
import { hidePartStr } from 'jason-helper'

hidePartStr('17754123612')
// => 177*****612

hidePartStr('17754123612', '*', 3, -4)
// => 177*****612
```

## 方法设计
> 默认会截取中间的位置进行转换
> 转换时包含 startI 和 endI（若指定）

 function    | params                           | description
 ----------- | -------------------------------- | -----------------------------
 hidePartStr | str, [chars=*], [startI], [endI] | 隐藏部分字符串显示，默认会截取中间的位置进行转换
