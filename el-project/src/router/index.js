import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Index from '@/components/Index.vue'
import Course from '@/components/Course.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: 'login'
  },
  // 布局路由配置
  {
    path: '/index',
    name: 'index',
    component: Index,

    // 配置子路由，使用children属性
    children: [
      {
      path: '/course',
      name: 'course',
      component: Course,
    }
  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
