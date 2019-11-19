const user = {
  admin: {
    account: 'admin',
    authGroup: [],
    email: 'lijy@ez-tech.cn',
    group: 1,
    group_title: '超管员',
    head: 'http://a.gsdzone.net/tjjt/new/api/public/static/image/2.png',
    name: '超级管理员',
    phone: '18001855966',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiIxIiwiZ3JvdXAiOjEsInZlcnNpb24iOiI1IiwiaWF0IjoxNTczODA2ODEzLCJuYmYiOjE1NzM4MDY4MTMsImV4cCI6MTU3MzgyMTIxM30.Gl_3P5LSSiCYJbpwuOX7xSNuQ9aCYb1SHUEEsD2rt-nAr-owwbgNQBBEGSuSTtNRRzfKbq4V-POnztCuPpS2-Cq4Lvop6fxXmUvxUByyR4UX-q3kiJxAN3j1LnzJnaDDVP58qMmFtIPRE1fmTFa0loOPZVyMa2KTfJQN_-z4Eyo'
  },
  test: {
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
}

const roles = JSON.parse('[{"rules":[1,2,3,6,7,13,19,11,9,10,14,15,16,17,18,20,21,12],"name":"dashboard"},{"rules":[1,2],"name":"node"},{"rules":[1,2],"name":"category"},{"rules":[1,2],"name":"log"},{"rules":[1,2],"name":"system"},{"rules":[1,2],"name":"list"},{"rules":[1,2],"name":"group"},{"rules":[1,2,3,7,11,9,10,18,21,12],"name":"teacherInformation"},{"rules":[1,2,7,11,9,10,18,21,12],"name":"teacherInfo"},{"rules":[1,2,10,18],"name":"teacherEdit"},{"rules":[1,2,10,18],"name":"teacherAdd"},{"rules":[1,2,3,19,9,14,16,18,21,12],"name":"foreignSwap"},{"rules":[1,2,3,19,9,14,16,18,21,12],"name":"scienceSwapC1"},{"rules":[1,2,3,9,16,18,21,12],"name":"socialService"},{"rules":[1,2,3,9,16,18,21,12],"name":"academic"},{"rules":[1,2,3,9,16,18,21,12],"name":"journal"},{"rules":[1,2,3,9,16,18,21,12],"name":"visitingProfessor"},{"rules":[1,2,3,9,16,18,21,12],"name":"otherPosition"},{"rules":[1,2,3,6,7,13,9,18,21],"name":"serviceIndex"},{"rules":[1,2,3,6,7,13,9,18,21],"name":"service"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"job"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"position"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"overseas"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"work"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"educate"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"paper"},{"rules":[1,2,3,9,16,18,21,12],"name":"popuscience"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"proceedings"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"gjhy"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"gngy"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"statistics"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"teamVisit"},{"rules":[1,2],"name":"gnjzjs"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"ldscpg"},{"rules":[1,2,3,19,9,14,16,18,21,12],"name":"forum"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"internat"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"domestic"},{"rules":[1,2,3,11,9,10,18,21,12],"name":"talent"},{"rules":[1,2,11,9,10,18,21,12],"name":"jzjs"},{"rules":[1,2,10,18],"name":"jzjsAdd"},{"rules":[1,2,10,18],"name":"jzjsEdit"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"paperTreatise"},{"rules":[1,3,10,18],"name":"myInfo"},{"rules":[1,3,10,18],"name":"myInfoEdit"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"scienceStudy"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"sci"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"ei"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"tsgqk"},{"rules":[1,2,3,9,15,17,21],"name":"jkjs"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"tsghy"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"xszz"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"ybgf"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"patent"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"patentSituation"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"warrant"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"gjzl"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"project"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"rjzzq"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"reward"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"kjjl"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"qtzz"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"xmlx"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"xmdk"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"pxxm"},{"rules":[1,2,3,9,10,14,18,21,12],"name":"shyx"},{"rules":[1,2,3,19,11,9,14,15,17,18,20,21],"name":"talentTrain"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"courseTeaching"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"undergraduate"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"bksjx"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"ydhs"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"yjsjx"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"ldsc"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"scpg"},{"rules":[1,2,3,19,11,9,14,15,17,18,20,21],"name":"guidance"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"graduationDesign"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"bysjqrz"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"bysjydhs"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"sjjx"},{"rules":[1,2,3,11,9,15,17,18,20,21],"name":"experimental"},{"rules":[1,2,3,11,9,15,17,18,20,21],"name":"syzxsy"},{"rules":[1,2,3,11,9,15,17,18,20,21],"name":"kcsy"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"resource"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"erect"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"protocol"},{"rules":[1,2,3,9,14,16,18,21,12],"name":"other"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"yjsrxby"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"internationalStudent"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"xws"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"fxws"},{"rules":[1,2,3,9,15,17,18,21],"name":"teachingResearch"},{"rules":[1,2,3,9,15,17,18,21],"name":"jxyjxm"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"dsz"},{"rules":[1,2,3,19,11,9,14,15,17,18,21],"name":"innovation"},{"rules":[1,2,3,19,11,9,14,15,17,18,21],"name":"cxxl"},{"rules":[1,2,3,19,11,9,14,15,17,18,21],"name":"jshj"},{"rules":[1,2,3,9,15,17,18,21],"name":"kcjs"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"rewardSituation"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"jxcg"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"yxxwlw"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"engineering"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"qthj"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"qualityCourse"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"competitive"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"modelCourse"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"government"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"team"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"base"},{"rules":[1,2,3,11,9,15,17,18,21],"name":"demonstration"},{"rules":[1,2,3,9,15,17,18,21],"name":"jxggyyjlw"},{"rules":[1,2,3,9,15,17,18,21],"name":"zbjc"},{"rules":[1,2,3,10,18,21],"name":"assessment"},{"rules":[1,2,3,10,18,21],"name":"fci"},{"rules":[1,2],"name":"fciAdd"},{"rules":[1,2],"name":"fciEdit"},{"rules":[1,2,3,10,18,21],"name":"fciScore"},{"rules":[1,2],"name":"personnelAdd"},{"rules":[1,2,3,10,18,21],"name":"fciDetail"},{"rules":[1,2,3,10,18,21],"name":"personnel"},{"rules":[1,2],"name":"personnelEdit"},{"rules":[1,2,3,10,18,21],"name":"evaluationList"},{"rules":[1,2,3,10,18,21],"name":"evaluationDetail"},{"rules":[1,2,3],"name":"evaluation"},{"rules":[1,2,3,10,18,21],"name":"summarize"},{"rules":[1,2,3,10,18,21],"name":"zwpj"},{"rules":[1,2,3,21],"name":"scjsndzj"},{"rules":[1,2,3,9,15,17,18,21],"name":"famousteacher"},{"rules":[1,2],"name":"esi"}]')

export default [{
  url: '/admin-api/login',
  type: 'post',
  res: config => {
    const body = config.body
    const data = body.split('&')
    const params = data[0].split('=')
    const name = params[1]
    if (!user[name]) {
      return ''
    }
    return user[name]
  }
},
{
  url: '/admin-api/routers',
  type: 'get',
  res: roles
}
]
