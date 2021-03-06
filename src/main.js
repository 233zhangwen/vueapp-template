import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/utils/vant.js"; //vant 组件
import "@/assets/style/reset.css"//重置全局样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
