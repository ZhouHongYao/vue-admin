// /**
//  * @author zhy 2019-01-04
//  * @description 字典表模块-相关接口
//  */
// import { del, read, write, update, modify } from '@/api/index'

// export async function cateDel(id) { // 字典表节点删除
//   return del('/admin-api/cate', id)
// }

// export async function cated_add(data) { // 添加 子类单项字典表
//   return modify('/admin-api/cate', data)
// }

// export async function cated_edit(data) { // 编辑 子类单项字典表
//   return update('/admin-api/cate', data)
// }

// export async function cated(form, type) { // 添加 编辑 节点单项字典表
//   return write('/admin-api/cate', form, type)
// }

// export async function cateSort(data) { // 节点排序
//   return update('/admin-api/cate-sort', data)
// }

// export async function cateDrag(data) { // 节点拖拽
//   return update('/admin-api/cate-drag', data)
// }

// export async function cateChild(pid) { // 获取子集
//   return read('/admin-api/cate-pid/' + pid)
// }

// export async function selectTree(id) { // 级选
//   return read('/admin-api/select-tree/' + id)
// }

const cateList = [{
  children: [{
    children: [{
      id: 3,
      path: [0, 1, 2, 3],
      pid: 2,
      sort: 0,
      title: '专业技术类'
    }, {
      id: 6,
      path: [0, 1, 2, 6],
      pid: 2,
      sort: 0,
      title: '工勤类'
    }, {
      id: 7,
      path: [0, 1, 2, 7],
      pid: 2,
      sort: 0,
      title: '管理类'
    }, {
      id: 8,
      path: [0, 1, 2, 8],
      pid: 2,
      sort: 0,
      title: '其他'
    }],
    id: 2,
    path: [0, 1, 2],
    pid: 1,
    sort: 0,
    title: '岗位类别'
  }],
  id: 1,
  path: [0, 1],
  pid: 0,
  sort: 10,
  title: '人员信息'
}]

const cated_read = {
  id: '1',
  path: [0],
  title: '教职工信息'
}
export default [{
  url: '/admin-api/cate',
  type: 'get',
  res: cateList
}, {
  url: '/admin-api/cate/1',
  type: 'get',
  res: cated_read
}]
