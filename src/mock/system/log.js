const data = [{
  add_time: '2019-11-19 10:14:29',
  data: null,
  ip: '222.185.248.18',
  method: 'POST',
  name: 'admin',
  url: 'admin-api/login'
}, {
  add_time: '2019-11-19 09:03:21',
  data: null,
  ip: '192.168.1.109',
  method: 'POST',
  name: '17044',
  url: 'admin-api/login'
}, {
  add_time: '2019-11-18 17:23:52',
  data: '{"sjly":"","beizhu":"xxx","status":"1","file":{"name":"SCI期刊论文-20191118.xlsx","path":"20191118\/1574069028.71125dd26324ada2a2.8193862038854.xlsx","url":"http:\/\/a.gsdzone.net\/tjjt\/new\/api\/public\/upload\/temp\/20191118\/1574069028.71125dd26324ada2a2.8193862038854.xlsx"},"import_id":"25"}',
  ip: '192.168.1.109',
  method: 'POST',
  name: '17044',
  url: 'admin-api/import'
}, {
  add_time: '2019-11-18 17:20:31',
  data: '{"id":"167"}',
  ip: '192.168.1.109',
  method: 'DELETE',
  name: '17044',
  url: 'admin-api/sci'
}]

const res = {
  count: 4,
  info: [],
  data
}

export default [{
  url: '/admin-api/log',
  type: 'get',
  res: res
},
{
  url: '/admin-api/log',
  type: 'delete',
  res: res
}]
