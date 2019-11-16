import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@babel/polyfill'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Cookies from 'js-cookie'
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
import './plugin' // component plugin

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
