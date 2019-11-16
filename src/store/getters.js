const getters = {
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  pageSizes: state => state.pageSizes,
  pageSize: state => state.pageSize,
  head: state => state.user.head || '',
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name || '',
  account: state => state.user.account || '',
  group: state => 1, // 用户角色 state.user.userinfo.group
  roles: state => state.roles, // 路由对应的角色组
  setting: state => state.setting, // 主题设置
  routers: state => state.routers, // 路由导航
  addRouters: state => state.addRouters, // 动态//动态路由
  Request_Head: state => {
    return {
      'Authorization': state.user.token || ''
    }
  }
}
export default getters
