## 说明
> 美化 console 样式


## 兼容性
- [x] H5
- [x] 小程序
- [x] node

## 包罗万象的用法
```javascript
import { log } from 'jason-helper';

/**
 *  简易写法
 *  会通过 log 方式输出 title
 ***/
log('我是简短描述')

/**
 *  配置写法
 *  可选 log，info，warn，error 四种类型
 *  默认为 log 类型
 *  输出的主题色不一样
 ***/
log({
  title: '接收到了数据',
  desc: [ {}, {} ],
  type: 'log'
})

/**
 *  若 desc 为 Error 类型
 *  则 type 默认为 err
 ***/
log({
  title: '出错了',
  desc: new Error(),
  // type: 'err'
})
```

## 方法设计

 function  | params        | description
 --------- | ------------- | ------------------------------
 log       | options       | options = { title, desc, type }

## options 属性解释
 key       | type            | description
 --------- | --------------- | -----------------
 title     | String / Number | 简短标题
 desc      | Any             | 数据信息，若为数组类型，则会输出多行信息
 type      | String          | 分为 log, info, warn, err 四种
 
## 样式设计
![](./images/log.jpg)
![](./images/info.jpg)
![](./images/warn.jpg)
![](./images/err.jpg)
