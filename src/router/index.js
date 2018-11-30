import Vue from 'vue'
import Router from 'vue-router'
import global_ from '../static/js/global'
//登录
import menu from '../components/login/menu.vue'
import login from '../components/login/login.vue'
import message from '../components/message/message.vue'
//首页
import home from '../components/home/home.vue'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu,
      children:[
        {
          path: '/login',
          name: 'login',
          component: login,
        },
        {
          path: '/message',
          name: 'message',
          component: message,
        },
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path : '/userList',
          name : 'userList',
          // 懒加载
          component : resolve => require(['../components/user/userList.vue'],resolve)
        },
        {
          path : '/dataList',
          name : 'dataList',
          // 懒加载
          component : resolve => require(['../components/data/dataList.vue'],resolve)
        },
        {
          path : '/shopList',
          name : 'shopList',
          // 懒加载
          component : resolve => require(['../components/shop/shopList.vue'],resolve)
        },
        {
          path : '/orderList',
          name : 'orderList',
          // 懒加载
          component : resolve => require(['../components/order/orderList.vue'],resolve)
        },
        {
          path : '/healthyList',
          name : 'healthyList',
          // 懒加载
          component : resolve => require(['../components/healthy/healthyList.vue'],resolve)
        },
        {
          path : '/versionList',
          name : 'versionList',
          // 懒加载
          component : resolve => require(['../components/version/versionList.vue'],resolve)
        },
        {
          path : '/feedbackList',
          name : 'feedbackList',
          // 懒加载
          component : resolve => require(['../components/feedback/feedbackList.vue'],resolve)
        },
        {
          path : '/bannerList',
          name : 'bannerList',
          // 懒加载
          component : resolve => require(['../components/banner/bannerList.vue'],resolve)
        },
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  var students=JSON.parse(localStorage.getItem('students'))
  if(students!==null){
    var token=students.aa.token;
    global_.setToken(token)
  }
  if(to.name!=='menu'&&to.name!=='login'&&to.name!=='message'){
    if(students==null){
      router.push({ name: 'menu' })
      return
    }
  }
  next()
})
export default router;
