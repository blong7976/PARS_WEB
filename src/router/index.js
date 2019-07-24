import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/index/index'),
          name: 'Index',
          meta: { title: '首页'}
        },
        {
          path: 'homes',
          component: () => import('@/views/homes/homes'),
          name: 'homes',
          meta: { title: '优质房源'}
        },
        {
          path: 'brand',
          component: () => import('@/views/brand/brand'),
          name: 'brand',
          meta: { title: '品牌介绍'}
        },
        {
          path: 'contact',
          component: () => import('@/views/contact/contact'),
          name: 'contact',
          meta: { title: '联系我们'}
        },
        {
          path: 'details',
          component: () => import('@/views/details/details'),
          name: 'details',
          meta: { title: '房屋详情'}
        }
      ]
    },
    {
      path: '/Success',
      component: () => import('@/views/prompt/success'),
      name: 'homes',
      meta: { title: '预订成功'}
    },

  ]
})
