// /**
//  * @author zhy 2019-01-4
//  * @description 角色组-成员接口
//  */
// import { read, del, update, write } from '@/api/index'

// export function groupList(data) { // 用户组列表
//   return read('/admin-api/auth', data)
// }

// export function groupSet(data) { // 禁用启用
//   return update('/admin-api/auth-set', data)
// }

// export function userSet(data) { // 禁用启用
//   return update('/admin-api/user', data)
// }

// export function groupDel(data) { // 删除用户组
//   return del('/admin-api/auth', data)
// }

// export function groupEdit(data, type) { // 编辑用户组
//   return write('/admin-api/auth', data, type)
// }

// export function groupRead(id) { // 用户组详情
//   return read('/admin-api/auth/' + id)
// }

// export function rulesRead(id) { // 获取角色组权限
//   return read('/admin-api/auth-rules/' + id)
// }

// export function rulesEdit(data) { // 角色组权限修改
//   return update('/admin-api/auth-rules', data)
// }

const groupList = {
  count: 1,
  data: [{
    describe: '拥有所有权限',
    id: 2,
    status: 2,
    title: '超级管理员'
  }, {
    describe: null,
    id: 3,
    status: 2,
    title: '员工'
  }]
}

export default [{
  url: '/admin-api/auth',
  type: 'get',
  res: groupList
}]
