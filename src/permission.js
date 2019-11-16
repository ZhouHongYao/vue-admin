import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getRoles } from '@/api/login.js'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

// permissiom judge function
const whiteLists = ['401', '404', '500']

function hasPermission(name) {
  if (store.getters.group && store.getters.group === 1) {
    return true
  } // admin permission passed directly
  if (!name) {
    return true
  }
  if (whiteLists.indexOf(name) !== -1) {
    return true
  }
  const arr = store.getters.roles
  if (!arr.find(item => {
    return item.name === name
  })) {
    return false
  } else {
    const role = arr.find(item => {
      return item.name === name
    }).rules
    if (role.find(item => {
      return parseInt(store.getters.group) === item
    })) {
      return true
    } else {
      return false
    }
  }
}

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (store.state.user && store.state.user && store.state.user.token) { // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.state.roles.length === 0) {
        let rs = '[{"rules":[1,2,3,6,7,13,19,11,9,10,14,15,16,17,18,20,21,12],"name":"dashboard"},{"rules":[1,2],"name":"node"},{"rules":[1,2],"name":"category"},{"rules":[1,2],"name":"log"},{"rules":[1,2],"name":"system"},{"rules":[1,2],"name":"list"},{"rules":[1,2],"name":"group"},{"rules":[1,2,3,7,11,9,10,18,21,12],"name":"teacherInformation"},{"rules":[1,2,7,11,9,10,18,21,12],"name":"teacherInfo"},{"rules":[1,2,10,18],"name":"teacherEdit"},{"rules":[1,2,10,18],"name":"teacherAdd"},{"rules":[1,2,3,19,9,14,16,18,21,12],"name":"foreignSwap"},{"rules":[1,2,3,19,9,14,16,18,21,12],"name":"scienceSwapC1"},{"rules":[1,2,3,9,16,18,21,12],"name":"socialService"},{"rules":[1,2,3,9,16,18,21,12],"name":"academic"},{"rules":[1,2,3,9,16,18,21,12],"name":"journal"},{"rules":[1,2,3,9,16,18,21,12],"name":"visitingProfessor"},{"rules":[1,2,3,9,16,18,21,12],"name":"otherPosition"},{"rules":[1,2,3,6,7,13,9,18,21],"name":"serviceIndex"},{"rules":[1,2,3,6,7,13,9,18,21],"name":"service"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"job"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"position"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"overseas"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"work"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"educate"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"paper"},{"rules":[1,2,3,9,16,18,21,12],"name":"popuscience"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"proceedings"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"gjhy"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"gngy"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"statistics"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"teamVisit"},{"rules":[1,2],"name":"gnjzjs"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"ldscpg"},{"rules":[1,2,3,19,9,14,16,18,21,12],"name":"forum"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"internat"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"domestic"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"talent"},{"rules":[1,2,11,9,10,18,21,12],"name":"jzjs"},{"rules":[1,2,10,18],"name":"jzjsAdd"},{"rules":[1,2,10,18],"name":"jzjsEdit"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"paperTreatise"},{"rules":[1,3,10,18],"name":"myInfo"},{"rules":[1,3,10,18],"name":"myInfoEdit"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"scienceStudy"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"sci"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"ei"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"tsgqk"},{"rules":[1,2,3,9,15,17,21],"name":"jkjs"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"tsghy"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"xszz"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"ybgf"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"patent"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"patentSituation"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"warrant"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"gjzl"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"project"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"rjzzq"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"reward"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"kjjl"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"qtzz"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"xmlx"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"xmdk"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"pxxm"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"shyx"},{"rules":[1,2,3,19,11,9,14,15,17,18,20,21],"name":"talentTrain"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"courseTeaching"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"undergraduate"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"bksjx"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"ydhs"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"yjsjx"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"ldsc"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"scpg"},{"rules":[1,2,3,19,11,9,14,15,17,18,20,21],"name":"guidance"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"graduationDesign"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"bysjqrz"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"bysjydhs"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"sjjx"},{"rules":[1,2,3,11,9,15,17,18,20,21],"name":"experimental"},{"rules":[1,2,3,11,9,15,17,18,20,21],"name":"syzxsy"},{"rules":[1,2,3,11,9,15,17,18,20,21],"name":"kcsy"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"resource"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"erect"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"protocol"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"other"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"yjsrxby"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"internationalStudent"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"xws"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"fxws"},{"rules":[1,2,3,9,15,17,18,21],"name":"teachingResearch"},{"rules":[1,2,3,9,15,17,18,21],"name":"jxyjxm"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"dsz"},{"rules":[1,2,3,19,11,9,14,15,17,18,21],"name":"innovation"},{"rules":[1,2,3,19,11,9,14,15,17,18,21],"name":"cxxl"},{"rules":[1,2,3,19,11,9,14,15,17,18,21],"name":"jshj"},{"rules":[1,2,3,9,15,17,18,21],"name":"kcjs"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"rewardSituation"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"jxcg"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"yxxwlw"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"engineering"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"qthj"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"qualityCourse"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"competitive"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"modelCourse"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"government"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"team"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"base"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"demonstration"},{"rules":[1,2,3,9,15,17,18,21],"name":"jxggyyjlw"},{"rules":[1,2,3,9,15,17,18,21],"name":"zbjc"},{"rules":[1,2,3,10,18,21],"name":"assessment"},{"rules":[1,2,3,10,18,21],"name":"fci"},{"rules":[1,2],"name":"fciAdd"},{"rules":[1,2],"name":"fciEdit"},{"rules":[1,2,3,10,18,21],"name":"fciScore"},{"rules":[1,2],"name":"personnelAdd"},{"rules":[1,2,3,10,18,21],"name":"fciDetail"},{"rules":[1,2,3,10,18,21],"name":"personnel"},{"rules":[1,2],"name":"personnelEdit"},{"rules":[1,2,3,10,18,21],"name":"evaluationList"},{"rules":[1,2,3,10,18,21],"name":"evaluationDetail"},{"rules":[1,2,3],"name":"evaluation"},{"rules":[1,2,3,10,18,21],"name":"summarize"},{"rules":[1,2,3,10,18,21],"name":"zwpj"},{"rules":[1,2,3,21],"name":"scjsndzj"},{"rules":[1,2,3,9,15,17,18,21],"name":"famousteacher"},{"rules":[1,2],"name":"esi"}]'
        rs = JSON.parse(rs)
        // getRoles().then(rs => {
        store.dispatch('setRoles', rs).then(() => {
          store.dispatch('GenerateRoutes').then(() => { // 根据roles权限生成可访问的路由表, group为1： 超管过滤权限
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({
              ...to,
              replace: true
            }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        })
        // }).catch(() => {
        //   store.dispatch('setUserinfo', {
        //     userinfo: {},
        //     rules: []
        //   })
        //   store.dispatch('setRoles', [])
        //   store.dispatch('setRouters', [])
        //   store.dispatch('setAddRouters', [])
        //   next({
        //     path: '/login'
        //   })
        // })
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
            path: '/401',
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
