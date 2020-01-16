## 说明
> 美化 console 样式，使控制台更简单易懂
## 方法设计

 function  | params        | description
 --------- | ------------- | ------------------------------
 log       | options       | options = { title, desc, type }
 
## options 解释
- options.title - 标题，String 或 Number 类型
- options.desc  - 详细信息，任何类型，若为数组，则会输出多行信息
- options.type  - 输出类型，有 log, info, warn, err 四种
## 简易使用
- options 也可以为 String 类型，会当做 title，输出 type 为 log 类型的日志 <br/>
- 若 options.desc 为 Error 类型，则 type 强制性为 err，无需手动指定
## 包罗万象的例子

```javascript
import { log } from 'jason-helper';

/**
 *  简易写法
 *  会通过 log 方式输出标题
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

```
## 样式设计
![](./images/log.jpg)
![](./images/info.jpg)
![](./images/warn.jpg)
![](./images/err.jpg)
