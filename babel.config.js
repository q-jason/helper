module.exports = {
  presets: [
    process.env.NODE_ENV === 'production' ?
      '@babel/preset-env' :
      '@vue/app'
  ]
}
