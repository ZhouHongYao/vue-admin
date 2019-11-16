/**
 * @author zhy 2019-01-15
 * @description 导入，导出-相关接口
 */
import {
  read,
  modify,
  del
} from '@/api/index'

export function download(params) { // 导出
  return read('/admin-api/export', params)
}

export function inlet(url, data) { // 导入
  return modify(url, data)
}

export function impLog(id) { // 导入日志
  return read('/admin-api/implog/' + id)
}

export function imdel(id) { // 撤销导入
  return del('/admin-api/impdel', id)
}
