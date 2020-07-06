/* 
  js入口文件
*/
import Vue from 'vue'
import router from './router'
import { Button } from 'mint-ui'
import Header from './components/Header/Header.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Star from './components/Star/Star.vue'
import store from './vuex/store'
import App from './App'
import './validate'
import './mock/mock-server'

Vue.config.productionTip = false

//注册全局组件
Vue.component('Header', Header)
Vue.component('CartControl', CartControl)
Vue.component('Star', Star)
Vue.component('Button.name', Button)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
})
