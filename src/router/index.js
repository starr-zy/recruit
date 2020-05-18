// 路由器对象模块
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Message from '../pages/Message/Message.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
// 所有路由
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
