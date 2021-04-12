import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入组件库
import ElementUI from 'element-ui'

//导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'

//配置Vue插件将El安装到
Vue.use(ElementUI);

// 2 配置异步请求框架axios
// 2.1 引入axios
import axios from 'axios'
// 2.2 配置到Vue属性
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
