module.exports = {
  title: 'jason-helper',
  dest: './docs',
  base: '/helper/',
  themeConfig: {
    sidebar: [
      [ '/', '首页' ],
      [ '/src/modules/beautiful-log/', '漂亮的日志' ],
      [ '/src/modules/wait-value/', '等待赋值才执行' ],
      [ '/src/modules/cache-value/', '缓存回退数据' ],
      [ '/src/modules/is-empty-value/', '判断是否是空值' ],
      [ '/src/modules/prefix-zero/', '数字前缀补 0' ],
      [ '/src/modules/file-size-conver/', '文件体积单位转换' ],
      [ '/src/modules/obj-to-form-data/', '对象转为formData' ],
      [ '/src/modules/hide-part-str/', '隐藏部分的字符串' ],
      [ '/src/modules/jason-web-socket/', '更好的 WebSocket' ]
    ]
  }
}