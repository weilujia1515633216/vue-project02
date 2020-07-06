/* 
使用mockjs提供mock数据接口
Mock.mock(url, template):
  根据指定的模板生成随机的json数据
  mock监视的url地址, 一旦我们ajax请求这个url, mock会进行拦截, 返回生成的随机json数据
*/

import Mock from 'mockjs'
import data from './data.json'

//提供mock接口 ： 商品列表
Mock.mock('/goods', {code: 0, data: data.goods})
//提供mock接口 ： 评论列表
Mock.mock('/ratings', {code: 0, data: data.ratings})
//提供mock接口 ： 商家列表
Mock.mock('/info', {code: 0, data: data.info})