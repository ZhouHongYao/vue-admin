import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@babel/polyfill'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Cookies from 'js-cookie'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css' // Element 基于断点的隐藏类
import 'element-ui/lib/theme-chalk/base.css' // Element 内置过渡动画
import '@/styles/index.scss' // global css

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
import './plugin' // component plugin
import '../src/mock/mock-server.js'

// 节点验证
Vue.prototype.authCheck = function authCheck(id) {
  if (store.getters.group === 1) {
    return true
  } else {
    // 获取角色拥有的所有节点
    const rules = store.state.user.rules
    return rules ? rules.indexOf(id) !== -1 : false
  }
}

// 注销
Vue.prototype.logout = function logout() {
  store.dispatch('setUserinfo', {})
  store.dispatch('setRoles', [])
  store.dispatch('setRouters', [])
  store.dispatch('setAddRouters', [])
  location.reload()
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
