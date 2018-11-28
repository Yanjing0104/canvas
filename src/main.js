// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import global_ from './static/js/global'
import './static/css/main.css'


Vue.use(ElementUi)
Vue.prototype.GLOBAL = global_
//设置接口
axios.defaults.baseURL='http://192.168.6.109:18090/nanochap-admin'
Vue.prototype.axios = axios

Vue.config.productionTip = false

// 验证token
axios.interceptors.response.use(
  res=> {
    return res;
  },
  err=>{
    if (err.response==undefined){
      ElementUi.Message.error('token失效，请重新登录')
      localStorage.clear()
      router.replace({
        name: 'menu',
      })
    }
    return Promise.reject(err)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
