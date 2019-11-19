import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true,
  name: 'login'
},
{
  path: '/404',
  component: () => import('@/views/errorPage/404'),
  hidden: true,
  name: '404'
},
{
  path: '/403',
  component: () => import('@/views/errorPage/403'),
  hidden: true,
  name: '403'
},
{
  path: '/500',
  component: () => import('@/views/errorPage/500'),
  hidden: true,
  name: '500'
},
{
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'dashboard',
    meta: {
      title: '面板',
      icon: 'dashboard',
      noCache: true
    }
  }]
}]

export default new Router({
  mode: 'history', // require service support
  base: '/',
  // 当开启history模式时，此项有效，实现返回上一个页面时默认将滚动条定位到原位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // 系统信息设置
  {
    path: '/system',
    name: 'system',
    redirect: '/system/node',
    component: Layout,
    meta: {
      title: '系统信息设置',
      icon: 'set'
    },
    children: [{
      path: 'node',
      component: () => import('@/views/system/node'),
      name: 'node',
      meta: {
        title: '导航菜单管理'
      }
    },
    {
      path: 'group',
      component: () => import('@/views/users/usersGroup'),
      name: 'group',
      meta: {
        title: '用户组管理'
      }
    },
    {
      path: 'list/:group',
      component: () => import('@/views/users/usersList'),
      name: 'list',
      meta: {
        title: '管理员管理'
      },
      hidden: true
    },
    {
      path: 'category',
      component: () => import('@/views/system/category'),
      name: 'category',
      meta: {
        title: '字典表管理'
      }
    },
    {
      path: 'log',
      component: () => import('@/views/system/log'),
      name: 'log',
      meta: {
        title: '系统日志管理'
      }
    }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
