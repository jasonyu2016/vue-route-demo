import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import News from '@/components/news'
import Profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/news',
      name: '新闻',
      component: News
    },
    {
      path: '/profile',
      name: '我的',
      component: Profile
    }
  ]
})
