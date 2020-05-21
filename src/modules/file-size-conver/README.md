## 说明
> 文件体积转换、以及更友好的显示单位

## 包罗万象的例子
```javascript
/** format 方法用于单位转换 **/
let result = fileSizeConver.format(size, beforeUnit, afterUnit)

/** betterShow 方法会根据文件大小选择用户体验最佳的显示单位 **/
let betterResult = fileSizeConver.betterShow(
  parseFloat(result),
  beforeUnit
)
```

## 方法设计
> size 是体积 <br/>
> beforeUnit 是 size 转换前的单位 <br/>
> afterUnit 是 size 转换后的单位 <br/>
> hasUnit 是代表结果时候包含单位字符串 <br/>

 function                    | params                               | description
 --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------
 fileSizeConver.format       | size, beforeUnit, afterUnit, hasUnit | 转换文件体积从一个单位到另一个单位
 fileSizeConver.betterShow   | size, beforeUnit                     | 根据文件大小选择对于用户显示最佳的单位
