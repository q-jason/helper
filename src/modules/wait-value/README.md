## 说明
> 基于 Promise
> 监听某值的赋值操作
> 提高代码连贯性和质量

## 场景
> 项目中常见的场景为某些逻辑（异步请求）要基于某一个值（异步获取）来做参数
> 然而这个值的赋值逻辑并不在当前上下文中（两个文件）

### 场景模拟
  1. 一进到页面就要异步获取用户的信息
  2. 首页 或 其他页面 初始化中要用用户信息的数据作为请求参数
  
### 场景分析：
  1. 获取用户信息应该是公共逻辑代码，不应该放在 首页 或者 其他页面 独特逻辑的代码中
  2. 首页或其他页面要等用户信息获取后，才继续执行初始化逻辑(如何优雅的知道用户信息已获取了？)
  
  
## 用法
> 建议使用 async + await，会让代码更简洁

```javascript
import { waitValue } from 'jason-helper'  

// 在获取用户信息的公共代码中
!(async () => {
  try {
    /** 获取用户信息 **/
    let { data } = await axios.get('/xxx');
    
   /** 发出通知，用户信息已获取成功 **/
    waitValue.emit('userData', data);
  }
  catch (err) {
   /**
    *  发出通知，用户信息获取失败
    *  值为 Error 类型即通知为失败
    **/
    waitValue.emit('userData', err);
  }
})();

// 在首页或其他页面中
!(async () => {
  try {
    /** 等待通知后 resolve **/
    let userData = await waitValue.on('userData');
    
    /**
     *  基于 用户信息 发出请求
     *  会在 用户信息 获取后才执行
     **/
    let { data } = axios.get('/zzzxcsd', {
      params: {
        any: userData.any
      }
    })
  }
  catch (err) {
    console.log('初始化时错误，可能是用户信息获取失败', err);
  }
})();
```

## 方法说明

 function       | params      | description
 -------------- | ----------- | ----------------
 waitValue.on   | name        | 监听某值的赋值通知，该方法返回 Promise，resolve 时将返回结果
 waitValue.emit | name, value | 发出通知，代表值已赋值，value 为结果

## 注意
1. on 和 emit 的 name 需要一致
2. 若 on 在 emit 后执行，则会立刻 resolve，并返回 emit 时的值（emit 时值会被缓存起来）