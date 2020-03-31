## 说明
> 用于缓存和回退数据的场景

## 包罗万象的例子
```javascript
/** 定义了对象类型数据 data **/
let data = { sons1: [ { name: 'son1' }, { name: 'son2' } ] }
// => data = { sons1: [ { name: 'son1' }, { name: 'son2' } ] }

/** 缓存了 data，由于是引用类型，内部深拷贝了 **/
cacheValue.cache('myData', data)
// => _data = { sons1: [ { name: 'son1' }, { name: 'son2' } ] }

/** 修改了 data 数据 **/
data.sons1.push({ name: 'son3' })
// => data = { sons1: [ { name: 'son1' }, { name: 'son2' }, { name: 'son3' } ] }

/** 回退数据 **/
cacheValue.back('myData', function (_data) {
  data = _data
})
// => data = { sons1: [ { name: 'son1' }, { name: 'son2' } ] }
```

## 方法设计

 function          | params            | description
 ----------------- | ----------------- | ------------------------------------------------------------------------------
 cacheValue.cache  | name, value       | 缓存某数据，name 为缓存标识，value 为需要缓存的值，若为引用类型，内部会自动深拷贝
 cacheValue.back   | name, backHandler | 回退数据，name 为缓存标识，backHandler 为自定义的回退方法，实现回退逻辑
