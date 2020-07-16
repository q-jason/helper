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
    <!-- prefix-zero -->
    <div class="group">
      <h3 class="group-title">
        输入个位数字，点击按钮
      </h3>
      <div class="group-body">
        <input v-model.number="prefixZero.before">
        <br>
        <br>
        <input type="text" :value="prefixZero.after" disabled>
        <br>
        <br>
        <button @click="prefixZeroHandler">
          点击按钮后，看控制台吧
        </button>
      </div>
    </div>
    <!-- 文件单位转换 -->
    <div class="group">
      <h3 class="group-title">
        点击按钮后，看控制台吧
      </h3>
      <div class="group-body">
        <div>
          <p>文件体积：</p>
          <input type="text" v-model.number="fileSizeConver.size">
        </div>
        <div>
          <p>转换前的单位：</p>
          <select v-model="fileSizeConver.beforeUnit">
            <option value="b">b</option>
            <option value="kb">kb</option>
            <option value="mb">mb</option>
            <option value="gb">gb</option>
            <option value="tb">tb</option>
          </select>
        </div>
        <div>
          <p>转换后的单位：</p>
          <select v-model="fileSizeConver.afterUnit">
            <option value="b">b</option>
            <option value="kb">kb</option>
            <option value="mb">mb</option>
            <option value="gb">gb</option>
            <option value="tb">tb</option>
          </select>
        </div>
        <div>
          <p>结果：</p>
          <p>{{ fileSizeConver.result }}</p>
          <br>
          <p>更好的显示结果：</p>
          <p>{{ fileSizeConver.betterResult }}</p>
        </div>
        <button @click="fileSizeConverHandler">
          转换
        </button>
      </div>
    </div>
    <!-- obj 转 formData -->
    <div class="group">
      <h3 class="group-title">
        obj 转 formData
      </h3>
      <div class="group-body">
        <button @click="objToFormData">
          点击后，看控制台，看 network 的请求（假的）
        </button>
      </div>
    </div>
    <!-- 隐藏部分字符串 -->
    <div class="group">
      <h3 class="group-title">
        隐藏部分字符串
      </h3>
      <div class="group-body">
        <button @click="hidePartStr">
          点击后看控制台
        </button>
      </div>
    </div>
    <!-- JasonWebSocket -->
    <div class="group">
      <h3 class="group-title">
        JasonWebSocket
      </h3>
      <div class="group-body">
        <button
          v-if="!jws"
          @click="startJasonWebSocket">
          连接
        </button>
        <template v-if="jws">
          <button @click="sendJasonWebSocket">
            发送消息
          </button>
          <button @click="closeJasonWebSocket">
            关闭连接
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    log,
    waitValue,
    cacheValue,
    isEmptyValue,
    prefixZero,
    fileSizeConver,
    objToFormData,
    hidePartStr,
    JasonWebSocket
  } from '../src'

  export default {
    data () {
      return {
        prefixZero: {
          before: null,
          after: null
        },
        fileSizeConver: {
          size: '',
          beforeUnit: 'b',
          afterUnit: 'mb',
          result: '',
          betterResult: ''
        },
        jws: null
      }
    },
    methods: {
      /** 美丽的日志 **/
      log () {
        /** 简写 **/
        log('用户改变了所在地区')
        /** 完整配置 **/
        log({
          title: '用户改变了所在地区',
          desc: [
            '1. 改变地区',
            '2. 获取数据'
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
          desc: new Error('失败了')
        })
      },

      /** 等值操作 **/
      waitValue () {
        /** 约定好的标志 **/
        let sign = 'data'

        /** 这里模拟两秒后会获取到某值 data **/
        setTimeout(() => {
          waitValue.emit(sign, 10086)
        }, 2000)

        /** 等待 data 获取后，继续进行 **/
        waitValue.on(sign)
          .then(result => {
            console.log('基于 Promise：' + result)
          })
          .catch(
            err => {
              console.err(err)
            })

        waitValue.on(sign, (err, result) => {
          console.log('基于 callback：' + result)
        })

        log({
          title: '等值操作测试流程：',
          desc: [
            '1. 约定好标志',
            '2. 通过 waitValue.on 方法监听对应标志的赋值操作',
            '3. 异步获取到值后通过 waitValue.emit 广播',
            '4. waitValue.on 触发 callback 函数 或 进入 resolve 状态'
          ]
        })
      },

      /** 缓存回退数据 **/
      cacheValue () {
        /** 定义了对象类型数据 data **/
        let data = { sons1: [ { name: 'son1' }, { name: 'son2' } ] }
        let originData = data
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

        log({
          title: '缓存值函数例子说明：',
          desc: [
            '1. 定义了对象类型数据 data',
            '2. 使用缓存值函数将 data 缓存（由于是引用类型，内部自动深拷贝，这里简称为 _data）',
            '3. 修改 data 数据，通过 push 的方法加入新元素',
            '4. 通过缓存值函数回退值 _data = data',
            '-----------------------------',
            `修改后的 data`,
            originData,
            '------------------------------',
            `还原后的 data`,
            data
          ]
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
      },

      /** 前缀补 0 **/
      prefixZeroHandler () {
        this.prefixZero.after = prefixZero(this.prefixZero.before, 2)
      },

      /** 单位转换 **/
      fileSizeConverHandler () {
        let { size, beforeUnit, afterUnit } = this.fileSizeConver

        let result = fileSizeConver.format(size, beforeUnit, afterUnit)
        let betterResult = fileSizeConver.betterShow(
          parseFloat(result),
          afterUnit
        )

        this.fileSizeConver.result = result
        this.fileSizeConver.betterResult = betterResult
      },

      /** obj 转为 formdata **/
      objToFormData () {
        let obj = { a: 1, b: 2, c: [ 1, 2, 3 ] }
        let formData = objToFormData(obj)
        let formData2 = objToFormData(obj, { arrayBrackets: true })

        console.log(formData)

        axios.post('https://www.baidu.com', formData)
        axios.post('https://www.baidu.com', formData2)
      },

      /** 隐藏部分字符串 **/
      hidePartStr () {
        console.log(
          hidePartStr(
            '17754123612',
            '*',
            3,
            -4
          )
        )
      },

      /** 建立 Websocket 连接 **/
      startJasonWebSocket () {
        let jws = new JasonWebSocket('ws://121.40.165.18:8800', {
          retry () {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(true)
              }, 1000)
            })
          }
        })

        jws.on('open', (e) => {
          log('连接成功')
          this.jws = jws
        })
        jws.on('message', (e) => {
          log({
            title: '接收到了消息',
            desc: e.data
          })
        })
        jws.on('close', (e) => {
          log('关闭了 ws 连接')
          this.jws = null
        })
      },
      sendJasonWebSocket () {
        this.jws.send(123123)
      },
      closeJasonWebSocket () {
        this.jws.close()
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