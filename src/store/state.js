/**
 * 定义每页显示记录条数的下拉菜单选项
 * @type {Array}
 */
const pageSizes = [5, 10, 15, 20, 50, 100]

/**
 * pageSize：定义每页默认显示记录条数
 * @type {int}
 */
const pageSize = 10

/**
 * userGroup：用户组数据
 * @type {arr}
 */
const userGroup = []

/**
 * [identity 用户身份类型]
 * @type {Array}
 */
const identity = [{
  id: '1',
  title: '统一身份认证用户'
}, {
  id: '2',
  title: '内置用户'
}]

/**
 * [user 用户登录信息]
 * @type {Object}
 */
const user = {
  userinfo: {},
  rules: []
}

/**
 * guide_show：是否显示引导
 * @type {str}
 */
const guide_show = '2'

/**
 * [sliderNav_data 当前登录用户的左侧导航权限]
 * @type {Array}
 * @author leo
 */
const sliderNav_data = []

/**
 * [methodData 传值方式]
 * @type {Object}
 * @author zhy
 */
const methodData = [{
  title: 'PUT'
}, {
  title: 'GET'
}, {
  title: 'POST'
}, {
  title: 'DELETE'
}]

/**
 * [roles 导航菜单节点]
 * @type {Object}
 * @author zhy
 */
const roles = []

/**
 * [addRouters 动态路由]
 * @type {Object}
 * @author zhy
 */
const addRouters = []

/**
 * [Routers 路由]
 * @type {Object}
 * @author zhy
 */
const routers = []

/**
 * [originalTheme 颜色主题]
 * @type {string}
 * @author zhy
 */
const originalTheme = '#409EFF'

/**
 * [last_time 记录最后操作时间戳]
 * @type {booler}
 */
const last_time = ''

/**
 * clientHeight 窗口默認大小
 * @author zhy 2019-01-5
 * @type {Array}
 */
const clientHeight = document.documentElement.clientHeight - 220

/**
 * [reviewData 审核状态]
 * @author zhy 2019-01-3
 * @type {Array}
 */
const reviewData = [{
  'id': 1,
  'title': '待审核',
  'color': 'text-muted'
},
{
  'id': 2,
  'title': '审核通过',
  'color': 'text-success'
},
{
  'id': 3,
  'title': '退回修改',
  'color': 'text-danger'
}
]

/**
 * [xisuoData 系所]
 * @author zhy 2019-01-3
 * @type {Array}
 */
const xisuoData = []

/**
 * [xueyuanData 学院]
 * @author zhy 2019-01-3
 * @type {Array}
 */
const xueyuanData = []

/**
 * [avatar 头像]
 * @author zhy 2019-01-3
 * @type {Array}
 */
const avatarData = []

/**
 * [nations 民族]
 * @author zhy 2019-01-3
 * @type {Array}
 */
const nations = ['汉族', '蒙古族', '回族', '藏族', '维吾尔族', '苗族', '彝族', '壮族', '布依族', '朝鲜族', '满族', '侗族', '瑶族', '白族', '土家族',
  '哈尼族', '哈萨克族', '傣族', '黎族', '傈僳族', '佤族', '畲族', '高山族', '拉祜族', '水族', '东乡族', '纳西族', '景颇族', '柯尔克孜族',
  '土族', '达斡尔族', '仫佬族', '羌族', '布朗族', '撒拉族', '毛南族', '仡佬族', '锡伯族', '阿昌族', '普米族', '塔吉克族', '怒族', '乌孜别克族',
  '俄罗斯族', '鄂温克族', '德昂族', '保安族', '裕固族', '京族', '塔塔尔族', '独龙族', '鄂伦春族', '赫哲族', '门巴族', '珞巴族', '基诺族', '川青族'
]

/**
 * [zzmmData 政治面貌]
 * @author zhy 2019-01-10
 * @type {Array}
 */
const zzmmData = []

/**
 * [hjdjData 获奖等级]
 * @author zhy 2019-01-25
 * @type {Array}
 */
const hjdjData = []

/**
 * [xmjbData 项目类别]
 * @author zhy 2019-01-25
 * @type {Array}
 */
const xmjbData = []

const state = {
  pageSizes: pageSizes,
  pageSize: pageSize,
  user: user,
  sliderNavData: sliderNav_data,
  last_time: last_time,
  methodData: methodData,
  roles: roles,
  addRouters: addRouters,
  routers: routers,
  userGroup: userGroup,
  identity: identity,
  originalTheme: originalTheme,
  clientHeight: clientHeight,
  reviewData: reviewData,
  xisuoData: xisuoData,
  xueyuanData: xueyuanData,
  avatarData: avatarData,
  guide_show: guide_show,
  nations: nations,
  zzmmData: zzmmData,
  hjdjData: hjdjData,
  xmjbData: xmjbData
}

export default state
