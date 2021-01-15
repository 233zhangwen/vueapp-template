module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    //按需引入vant组件
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
