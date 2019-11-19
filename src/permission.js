import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getRoles } from '@/api/login.js'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

// permissiom judge function
const whiteLists = ['403', '404', '500']

function hasPermission(name) {
  if ((store.getters.group && store.getters.group === 1) || !name || whiteLists.indexOf(name) !== -1) {
    return true
  }
  const arr = store.getters.roles
  if (!arr.find(item => { return item.name === name })) {
    return false
  } else {
    const role = arr.find(item => { return item.name === name }).rules
    if (role.find(item => { return parseInt(store.getters.group) === item })) {
      return true
    } else {
      return false
    }
  }
}

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (store.state.user && store.state.user.token) { // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.state.roles.length === 0) {
        getRoles().then(rs => {
          store.dispatch('setRoles', rs).then(() => {
            store.dispatch('GenerateRoutes').then(() => { // 根据roles权限生成可访问的路由表, group为1： 超管过滤权限
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next({
                ...to,
                replace: true
              }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          })
        }).catch(() => {
          store.dispatch('setUserinfo', {})
          store.dispatch('setRoles', [])
          store.dispatch('setRouters', [])
          store.dispatch('setAddRouters', [])
          next({
            path: '/login'
          })
        })
      } else {
        if (!to.name) {
          store.dispatch('GenerateRoutes').then(() => { // 根据roles权限生成可访问的路由表, group为1： 超管过滤权限
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({
              ...to,
              replace: true
            }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }
        if (hasPermission(to.name)) {
          next()
        } else {
          next({
            path: '/403',
            replace: true,
            query: {
              noGoBack: true
            }
          })
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
