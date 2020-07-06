
import ajax from './ajax'

const BASE = '/api'

//获取经纬度地址请求函数
export const reqAddress = (longitude,latitude) => ajax(BASE + `/position/${longitude},${latitude}`)

//获取食品分类列表
export const reqCategorys = () => ajax(BASE + 'index_category')

//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(BASE + '/shops',{longitude,latitude})


//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

// 手机号/验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')

//用户名/密码/验证码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')


//获取登陆用户的信息
export const reqUser = () => ajax(BASE + '/userinfo')

//退出登陆
export const reqLogout = () => ajax(BASE + '/logout')


/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')

