import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import OrderList from '../components/OrderList'

Vue.use(Router)

export default new Router({
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/order-list', // 重定向
      children: [
        {
          path: 'order-list',
          component: OrderList,
          name: 'order-list'
        },
        {
          path: 'user-list',
          component: resolve => require(['../components/UserList.vue'], resolve),
          name: 'user-list'
        },
        {
          path: 'engineer-list',
          component: resolve => require(['../components/EngineerList.vue'], resolve),
          name: 'engineer-list'
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: resolve => require(['../components/About.vue'], resolve)
    },
    {
      path: '/product',
      name: 'Product',
      component: resolve => require(['../components/Product.vue'], resolve)
    },
    {
      path: '/',
      redirect: 'home'
    }
  ]
})
