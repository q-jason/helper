<template>
  <div>
    <h1>点击按钮，打开控制台看输出</h1>
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
  </div>
</template>

<script>
  import { log, info, warn, err } from '../src'

  export default {
    methods: {
      log () {
        log('用户改变了所在地区', [
          '省份：山东省',
          '城市：青岛市',
          '地区：城阳区'
        ])
      },
      info () {
        info('接收到了后端给的数据，并格式化数据', [
          { name: '姓名', age: 18, other: [ 1, 2, 3 ] },
          { name: '班级 - 姓名', age: '18岁', other: [ 1, 2, 3 ] }
        ])
      },
      warn () {
        warn('转换后端数据时发现问题, 缺少字段', [
          '缺少字段的数据',
          { name: '姓名', age: 18, other: [ 1, 2, 3 ] }
        ])
      },
      err () {
        err('请求接口失败，打印出错误原因', [
          new Error('失败了')
        ])
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