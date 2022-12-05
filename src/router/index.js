import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    meta: { title: "首页", icon: "el-icon-house" },
    component: Home,
    meta: {
      requireAuth: false
    },
    children:[
      {
        path:'/gzg',
        name:'广州港',
        component:()=>import('@/views/gzg/index.vue'),
        children:[
          {
            path:'/gzg/queryMap',
            name:'人口画像',
            component:()=>import('@/views/gzg/QueryMap.vue'),
          },
          {
            path:'/gzg/publicInfo',
            name:'基础设施',
            component:()=>import('@/views/gzg/PublicInfo.vue'),
          },
          {
            path:'/gzg/landuse',
            name:'用地信息',
            component:()=>import('@/views/gzg/Landuse.vue'),
          },
          {
            path:'/gzg/industry',
            name:'产业信息',
            component:()=>import('@/views/gzg/Industry.vue'),
          },
          {
            path:'/gzg/building',
            name:'建筑轮廓',
            component:()=>import('@/views/gzg/Building.vue'),
          },
          {
            path:'/gzg/planning',
            name:'规划许可',
            component:()=>import('@/views/gzg/Planning.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/dataPanel',
    name:'DataPanel',
    component:() => import("@/views/dataPanel/DataPanel.vue"),
  }

]

const router = new VueRouter({
  // mode:'history',
  routes
})

export default router
