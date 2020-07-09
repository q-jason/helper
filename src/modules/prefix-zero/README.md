## 前缀补 0
> 将数字成固定位数的字符串
> 0 -> 00，1 => 01，10 => 10

## 兼容性
- [x] H5
- [x] 小程序
- [x] node

## 保罗万象的例子
```javascript
import { prefixZero } from 'jason-helper'

console.log(
  prefixZero(5, 2)
)
// => '05'

console.log(
  prefixZero(5, 3)
)
// => '005'
```

## 方法设计
 function       | params      | description
 -------------- | ----------- | ----------------------------------------------------------------
 prefixZero     | num, n      | num 是要转换的数字，n 为固定位数
