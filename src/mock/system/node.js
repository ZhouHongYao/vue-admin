const nodeList = [{
  api_name: 'dashboard',
  id: 1,
  method: '',
  name: '#',
  path: [0, 1],
  pid: 0,
  sort: 100,
  title: '我的面板'
}, {
  api_name: 'system',
  children: [{
    api_name: 'node',
    children: [{
      api_name: '',
      id: 3,
      method: 'POST',
      name: 'admin-api/node',
      path: [0, 12, 2, 3],
      pid: 2,
      sort: 1,
      title: '添加菜单'
    }, {
      api_name: '',
      id: 4,
      method: 'PUT',
      name: 'admin-api/node',
      path: [0, 12, 2, 4],
      pid: 2,
      sort: 0,
      title: '编辑菜单'
    }, {
      api_name: '',
      id: 5,
      method: 'DELETE',
      name: 'admin-api/node',
      path: [0, 12, 2, 5],
      pid: 2,
      sort: 0,
      title: '删除菜单'
    }, {
      api_name: '',
      id: 13,
      method: 'PUT',
      name: 'admin-api/node-drag',
      path: [0, 12, 2, 13],
      pid: 2,
      sort: 0,
      title: '菜单拖拽'
    }, {
      api_name: '',
      id: 14,
      method: 'PUT',
      name: 'admin-api/node-sort',
      path: [0, 12, 2, 14],
      pid: 2,
      sort: 0,
      title: '菜单排序'
    }, {
      api_name: '',
      id: 28,
      method: 'GET',
      name: 'admin-api/node/:id',
      path: [0, 12, 2, 28],
      pid: 2,
      sort: 0,
      title: '查看菜单'
    }],
    id: 2,
    method: 'GET',
    name: 'admin-api/node',
    path: [0, 12, 2],
    pid: 12,
    sort: 5,
    title: '导航菜单管理'
  }, {
    api_name: 'group',
    children: [{
      api_name: 'list',
      children: [{
        api_name: '',
        id: 17,
        method: 'POST',
        name: 'admin-api/user',
        path: [0, 12, 23, 16, 17],
        pid: 16,
        sort: 0,
        title: '添加成员信息'
      }, {
        api_name: '',
        id: 18,
        method: 'GET',
        name: 'admin-api/user/:id',
        path: [0, 12, 23, 16, 18],
        pid: 16,
        sort: 0,
        title: '查看成员信息'
      }, {
        api_name: '',
        id: 20,
        method: 'DELETE',
        name: 'admin-api/user',
        path: [0, 12, 23, 16, 20],
        pid: 16,
        sort: 0,
        title: '删除成员信息'
      }, {
        api_name: '',
        id: 22,
        method: 'PUT',
        name: 'admin-api/user',
        path: [0, 12, 23, 16, 22],
        pid: 16,
        sort: 0,
        title: '禁用/启用'
      }],
      id: 16,
      method: 'GET',
      name: 'admin-api/users',
      path: [0, 12, 23, 16],
      pid: 23,
      sort: 0,
      title: '成员管理'
    }],
    id: 23,
    method: 'GET',
    name: 'admin-api/auth',
    path: [0, 12, 23],
    pid: 12,
    sort: 4,
    title: '用户组管理'
  }],
  id: 12,
  method: '',
  name: '#',
  path: [0, 12],
  pid: 0,
  sort: 0,
  title: '系统信息设置'
}]

export default [{
  url: '/admin-api/node',
  type: 'get',
  res: nodeList
}]

// export function nodeSort(data) { // 导航菜单排序
//     return update('/admin-api/node-sort', data)
// }

// export function nodeEdit() { // 导航菜单节点编辑
//     return update('/admin-api/node')
// }

// export function nodeDel(data) { // 导航菜单节点删除
//     return del('/admin-api/node', data)
// }

// export function nodeWrite(data, type) { // 导航菜单添加、编辑
//     return write('/admin-api/node', data, type)
// }

// export function nodeRead(id) { // 导航菜单节点读取
//     return read('/admin-api/node/' + id)
// }

// export function nodeDrag(data) { // 节点拖拽
//     return update('/admin-api/node-drag', data)
// }
