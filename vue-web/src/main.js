/* 引入vue */
import Vue from 'vue'
import App from './App'
/* 导入路由 */
import router from './router'
/* 引入vue-beauty UI框架 */
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
Vue.use(vueBeauty)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
