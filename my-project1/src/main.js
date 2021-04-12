// 导入from文件路径文件
import { createApp } from 'vue'
// 主组件
import App from './App.vue'
// 路由
import router from './router'
  
createApp(App).use(router).mount('#app')
