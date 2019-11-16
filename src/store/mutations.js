import state from './state'

// 导入LocalStorage的封装器，详细使用方式参考 Git上storejs
import LS from 'storejs'

// 定义数据仓库前缀，避免保存到LocalStorage中的数据节点冲突
var sysKeys = 'DB_TJZHSZPJ_ADMIN_'

// mutations

/* 从本地存储读取数据 */
for (var item in state) {
  LS.get(sysKeys + item) ? state[item] = JSON.parse(LS.get(sysKeys + item)) : false
}

// 从组件中提交请求方法，写在此类下，注意保存时，一定要保存为json
const mutations = {
  setPageSize(state, payload) {
    state.pageSize = payload
    LS.set(sysKeys + 'pageSize', JSON.stringify(state.pageSize))
  },
  // 记录最后操作时间
  setLast_time(state, payload) {
    state.last_time = payload
    LS.set(sysKeys + 'last_time', JSON.stringify(state.last_time))
  },
  // 存储用户信息
  setUserinfo(state, payload) {
    state.user = payload
    LS.set(sysKeys + 'user', JSON.stringify(state.user))
  },
  // 存储导航菜单节点
  setRoles(state, payload) {
    state.roles = payload
    LS.set(sysKeys + 'roles', JSON.stringify(state.roles))
  },
  setAddRouters(state, payload) {
    state.addRouters = payload
    LS.set(sysKeys + 'addRouters', JSON.stringify(state.addRouters))
  },
  setRouters(state, payload) {
    state.routers = payload
    LS.set(sysKeys + 'routers', JSON.stringify(state.routers))
  },
  // 设置用户组
  setUserGroup(state, payload) {
    state.userGroup = payload
    LS.set(sysKeys + 'userGroup', JSON.stringify(state.userGroup))
  },
  // 设置主题换肤
  setTheme(state, payload) {
    state.originalTheme = payload
    LS.set(sysKeys + 'originalTheme', JSON.stringify(state.originalTheme))
  },
  // 窗体默认高度
  setHeight(state, payload) {
    state.clientHeight = payload
    LS.set(sysKeys + 'clientHeight', JSON.stringify(state.clientHeight))
  },
  // 设置系所缓存
  setXisuoData(state, payload) {
    state.xisuoData = payload
    LS.set(sysKeys + 'xisuoData', JSON.stringify(state.xisuoData))
  },
  // 设置头像
  setAvatar(state, payload) {
    state.avatarData = payload
    LS.set(sysKeys + 'avatarData', JSON.stringify(state.avatarData))
  },
  // 设置是否第一次显示引导
  setGuide(state, payload) {
    state.guide_show = payload
    LS.set(sysKeys + 'guide_show', JSON.stringify(state.guide_show))
  },
  // 设置学院缓存
  setXyData(state, payload) {
    state.xueyuanData = payload
    LS.set(sysKeys + 'xueyuanData', JSON.stringify(state.xueyuanData))
  },
  // 政治面貌
  setZzmm(state, payload) {
    state.zzmmData = payload
    LS.set(sysKeys + 'zzmmData', JSON.stringify(state.zzmmData))
  },
  // 获奖等级
  setHjdj(state, payload) {
    state.hjdjData = payload
    LS.set(sysKeys + 'hjdjData', JSON.stringify(state.hjdjData))
  },
  // 项目类别
  setXmlb(state, payload) {
    state.xmjbData = payload
    LS.set(sysKeys + 'xmjbData', JSON.stringify(state.xmjbData))
  }
}

export default mutations
