
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 设计稿宽度
      //viewportHeight: 1334, // 设计稿高度，可以不指定
      unitPrecision: 3, // px to vw无法整除时，保留几位小数
      viewportUnit: 'vw', // 转换成vw单位
      selectorBlackList: ['.ignore', '.hairlines',".noconvention"], // 不转换的类名
      minPixelValue: 1, // 小于1px不转换
      mediaQuery: false, // 允许媒体查询中转换
      exclude: /(\/|\\)(node_modules)(\/|\\)/ //不转换我们引入的第三方包
    }
  }
}
