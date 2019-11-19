// /**
//  * @author zhy 2019-01-5
//  * @description 角色组-成员-相关接口
//  */
// import { read, del, update, modify } from '@/api/index'

// export function getuserGroup() { // 获取用户组
//   return read('/admin-api/auth-select')
// }

// export function userList(data) { // 管理员列表
//   return read('/admin-api/users', data)
// }

// export function userRead(id) { // 读取管理员
//   return read('/admin-api/user/' + id)
// }

// export function userSet(data) { // 添加管理员
//   return modify('/admin-api/user', data)
// }

// export function userDel(data) { // 删除管理员
//   return del('/admin-api/user', data)
// }

// export function userQiyong(data) { // 启用禁用
//   return update('/admin-api/user', data)
// }

// export function changepwd(data) { // 修改密码
//   return update('/admin-api/changepwd', data)
// }

const user = [{
  rules: [],
  userinfo: {
    account: 'admin',
    authGroup: [],
    group: 1,
    group_title: '超管员',
    head: 'http://a.gsdzone.net/tjjt/new/api/public/static/image/2.png',
    name: '超级管理员',
    phone: '18001855966',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiIxIiwiZ3JvdXAiOjEsInZlcnNpb24iOiI1IiwiaWF0IjoxNTczODA2ODEzLCJuYmYiOjE1NzM4MDY4MTMsImV4cCI6MTU3MzgyMTIxM30.Gl_3P5LSSiCYJbpwuOX7xSNuQ9aCYb1SHUEEsD2rt-nAr-owwbgNQBBEGSuSTtNRRzfKbq4V-POnztCuPpS2-Cq4Lvop6fxXmUvxUByyR4UX-q3kiJxAN3j1LnzJnaDDVP58qMmFtIPRE1fmTFa0loOPZVyMa2KTfJQN_-z4Eyo'
  }
}, {
  rules: [],
  userinfo: {
    account: 'system',
    authGroup: [{ group: 2, title: '系统管理员' }, { group: 3, title: '员工' }],
    group: 2,
    group_title: '系统管理员',
    head: 'http://a.gsdzone.net/tjjt/new/api/public/static/image/2.png',
    name: '系统管理员',
    phone: '18001855966',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiIxIiwiZ3JvdXAiOjEsInZlcnNpb24iOiI1IiwiaWF0IjoxNTczODA2ODEzLCJuYmYiOjE1NzM4MDY4MTMsImV4cCI6MTU3MzgyMTIxM30.Gl_3P5LSSiCYJbpwuOX7xSNuQ9aCYb1SHUEEsD2rt-nAr-owwbgNQBBEGSuSTtNRRzfKbq4V-POnztCuPpS2-Cq4Lvop6fxXmUvxUByyR4UX-q3kiJxAN3j1LnzJnaDDVP58qMmFtIPRE1fmTFa0loOPZVyMa2KTfJQN_-z4Eyo'
  }
}, {
  rules: [],
  userinfo: {
    account: 'test',
    authGroup: [{ group: 2, title: '系统管理员' }, { group: 3, title: '员工' }],
    email: '',
    group: 3,
    group_title: '员工',
    head: 'http://a.gsdzone.net/tjjt/new/api/public/static/image/2.png',
    name: '员工',
    phone: '18001855966',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiIxIiwiZ3JvdXAiOjEsInZlcnNpb24iOiI1IiwiaWF0IjoxNTczODA2ODEzLCJuYmYiOjE1NzM4MDY4MTMsImV4cCI6MTU3MzgyMTIxM30.Gl_3P5LSSiCYJbpwuOX7xSNuQ9aCYb1SHUEEsD2rt-nAr-owwbgNQBBEGSuSTtNRRzfKbq4V-POnztCuPpS2-Cq4Lvop6fxXmUvxUByyR4UX-q3kiJxAN3j1LnzJnaDDVP58qMmFtIPRE1fmTFa0loOPZVyMa2KTfJQN_-z4Eyo'
  }
}]
export default [{
  url: '/admin-api/userinfo',
  type: 'get',
  res: config => {
    const url = config.query
    const i = url.substring((url.length - 1), url.length)
    if (!user[i - 1]) {
      return ''
    }
    return user[i - 1]
  }
}]
