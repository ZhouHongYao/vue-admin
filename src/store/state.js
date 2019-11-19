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
 * [user 用户登录信息]
 * @type {Object}
 */
const user = {
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
 * clientHeight 窗口默認大小
 * @author zhy 2019-01-5
 * @type {Array}
 */
const clientHeight = document.documentElement.clientHeight - 220

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

const state = {
  pageSizes: pageSizes,
  pageSize: pageSize,
  user: user,
  sliderNavData: sliderNav_data,
  methodData: methodData,
  roles: roles,
  addRouters: addRouters,
  routers: routers,
  userGroup: userGroup,
  originalTheme: originalTheme,
  clientHeight: clientHeight,
  avatarData: avatarData,
  guide_show: guide_show,
  nations: nations
}

export default state
