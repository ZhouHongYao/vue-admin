/**
 * @author zhy 2019-01-4
 * @description 日志模块-相关接口
 */
import { read, del } from '@/api/index'

// 日志列表
export function logList(params) {
  return read('/admin-api/log', params)
}

export function logDel(id) {
  return del('/admin-api/log', id)
}
