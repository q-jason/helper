## 说明
> !!! 该函数仅游览器端生效 !!! <br/>
> 主要作用为补足 h5 input 标签 type 为 number 时不足的功能 <br/>

## 方法设计
> 目前未设计选择器开启（只开启部分元素）
> 因为感觉必要性不是很大，通常需求都是全局性开启

 function                       | description
 ------------------------------ | --------------------------------------------------
 betterInputNumber.numberRange  | 强化 min 和 max 属性，使其只能输入指定范围的数字
 betterInputNumber.onlyNumber   | 只能输入数字，不允许输入 + e E，- 只有在开头可以输入
 
## 包罗万象的例子
```javascript
import { inputNumberRange } from 'jason-helper';

inputNumberRange.numberRange();
inputNumberRange.onlyNumber();
```

## 注意
- onlyNumber 中文输入法输入 e 后点回车的情况无法判断...
- onlyNumber 暂时没有办法判断 '----90' 这种情况....
- onlyNumber 若输入了数字后，全选不删除的情况下直接输入 '-' 的情况无法判断....