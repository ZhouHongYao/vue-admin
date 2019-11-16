import { read } from '@/api/index'

export function top(data) { // 我的面板数据统计
  return read('/admin-api/top', data)
}

export function nlzp(data) { // 我的面板能力自评数据统计
  return read('/admin-api/nlzp', data)
}
