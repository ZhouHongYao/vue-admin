import Mock from 'mockjs'
import login from './login'
import log from './system/log'
import node from './system/node'
import user from './system/user'
import userGroup from './system/userGroup'
import category from './system/category'

const mocks = [
  ...login,
  ...log,
  ...node,
  ...user,
  ...userGroup,
  ...category
]

function XHR2ExpressReqWrap(respond) {
  return function(options) {
    let result = null
    if (respond instanceof Function) {
      const { body, type, url } = options
      result = respond({
        method: type,
        body: body,
        query: url
      })
    } else {
      result = respond
    }
    return Mock.mock(result)
  }
}

for (const i of mocks) {
  Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.res))
}
