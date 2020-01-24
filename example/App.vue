<template>
  <div>
    <!-- log -->
    <div class="group">
      <h3 class="group-title">
        漂亮的日志(console)
      </h3>
      <div class="group-body">
        <button @click="log">
          打印常规日志
        </button>
        <button @click="info">
          打印信息日志
        </button>
        <button @click="warn">
          打印警告日志
        </button>
        <button @click="err">
          打印错误日志
        </button>
      </div>
    </div>
    <!-- wait-value -->
    <div class="group">
      <h3 class="group-title">
        等值操作（wait-value）
      </h3>
      <div class="group-body">
        <button @click="waitValue">
          等值操作（wait-value）
        </button>
      </div>
    </div>
    <!-- cache-value -->
    <div class="group">
      <h3 class="group-title">
        缓存回退数据
      </h3>
      <div class="group-body">
        <button @click="cacheValue">
          点击按钮后，看控制台吧
        </button>
      </div>
    </div>
    <!-- is-empty-value -->
    <div class="group">
      <h3 class="group-title">
        点击按钮后，看控制台吧
      </h3>
      <div class="group-body">
        <button @click="isEmptyValue">
          点击按钮后，看控制台吧
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { log, waitValue, cacheValue, isEmptyValue } from '../src'

  export default {
    data () {
      return {
        test: null
      }
    },
    methods: {
      /** 美丽的日志 **/
      log () {
        log({
          title: '用户改变了所在地区',
          desc: [
            '省份：山东省',
            '城市：青岛市',
            '地区：城阳区'
          ]
        })
      },
      info () {
        log({
          type: 'info',
          title: '接收到了后端给的数据，并格式化数据',
          desc: [
            { name: '姓名', age: 18, other: [ 1, 2, 3 ] },
            { name: '班级 - 姓名', age: '18岁', other: [ 1, 2, 3 ] }
          ]
        })
      },
      warn () {
        log({
          type: 'warn',
          title: '转换后端数据时发现问题, 缺少字段',
          desc: [
            { name: '姓名', age: 18, other: [ 1, 2, 3 ] }
          ]
        })
      },
      err () {
        log({
          title: '请求接口失败，打印出错误原因',
          desc: new Error('失败了'),
          type: 'warn'
        })
      },

      /** 等值操作 **/
      async waitValue () {
        let value = { num: 1 }
        /** 延迟两秒后，test 标识赋值 **/
        setTimeout(() => {
          waitValue.emit('test', value)
        }, 2000)

        /** 等待 test 赋值后，才继续进行 **/
        let data = await waitValue.on('test')
        log({
          title: '结束了',
          desc: data
        })

        /** 下面执行时，因为 test 已被赋值，所以会立刻执行，并且结果为缓存的值 **/
        value = { num: 2 }
        let data2 = await waitValue.on('test')
        log({
          title: '立刻返回',
          desc: data2
        })
      },

      /** 缓存回退数据 **/
      cacheValue () {
        /** 定义了 data 并缓存 **/
        let data = { sons1: [ { name: 'son1' }, { name: 'son2' } ] }
        cacheValue.cache('myData', data)
        log({
          title: '1. 首先定义了数据 data 并缓存了',
          desc: [ data ],
          type: 'info'
        })

        /** 改变 data 数据 **/
        data.sons1.push({ name: 'son3' })
        log({
          title: '2. 改变了数据 data',
          desc: [ data ],
          type: 'info'
        })

        /** 回退数据 **/
        cacheValue.back('myData', function (cacheData) {
          data = cacheData
        })
        log({
          title: '3. 回退了数据 data',
          desc: [ data ],
          type: 'info'
        })
      },

      /** 判断是否为空值 **/
      isEmptyValue () {
        log({
          title: '测试空值情况',
          desc: [
            null,
            isEmptyValue(null),
            '-------------------',
            '--------------------',
            undefined,
            isEmptyValue(undefined),
            '-------------------',
            '--------------------',
            NaN,
            isEmptyValue(NaN),
            '-------------------',
            '--------------------',
            '""',
            isEmptyValue(''),
            '-------------------',
            '--------------------',
            '字符串判断时会去除开头和结尾的空格再判断',
            '"      "',
            isEmptyValue('      ')
          ],
          type: 'err'
        })

        log({
          title: '测试对象是否为空值',
          desc: [
            {},
            isEmptyValue({})
          ]
        })
        log({
          title: '测试数组是否为空值',
          desc: [
            [],
            isEmptyValue([])
          ]
        })
        log({
          title: '测试数字 0 是否为空值',
          desc: [
            0,
            isEmptyValue(0)
          ]
        })
        log({
          title: '测试 true/false 是否为空值',
          desc: [
            '真：true',
            isEmptyValue(true),
            '------',
            '假：false',
            isEmptyValue(false)
          ]
        })
        log({
          title: '测试字符串是否为空值',
          desc: [
            '字符串',
            isEmptyValue('字符串')
          ]
        })
      }
    }
  }
</script>

<style scoped>
  .group {
    padding: 30px;
  }
  .group:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
  }
  button:not(:last-child) {
    margin-right: 15px;
  }
</style>