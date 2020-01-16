## 说明
> 用于缓存和回退数据的场景

## 方法设计
> back 方法没有设计成基于 Promise
> 该功能函数宗旨是简单的缓存、回退值，并不想有其他复杂逻辑

 function          | params            | description
 ----------------- | ----------------- | ------------------------------------------------------------------------------
 cacheValue.cache  | name, value       | 缓存某数据，name 为缓存标识，value 为需要缓存的值，若为引用类型，内部会自动深拷贝
 cacheValue.back   | name, backHandler | 回退数据，name 为缓存标识，backHandler 为自定义的回退方法，实现回退逻辑
 
## 包罗万象的例子
```javascript
  /** 定义了 data 并缓存 **/
  let data = { sons1: [ { name: 'son1' }, { name: 'son2' } ] }
  cacheValue.cache('myData', data)
  // => { sons1: [ { name: 'son1' }, { name: 'son2' } ] }
  
  /** 这里修改 data 数据 **/
  data.sons1.push({ name: 'son3' })
  // => { sons1: [ { name: 'son1' }, { name: 'son2' }, { name: 'son3' } ] }
 
  /** 由于某原因，回退数据 **/
  cacheValue.back('myData', function (cacheData) {
    data = cacheData
  })
  // => { sons1: [ { name: 'son1' }, { name: 'son2' } ] }
```
 
 