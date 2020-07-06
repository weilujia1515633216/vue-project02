import { reqAddress, reqCategorys, reqShops } from '../../api'

import {RECEIVE_ADDRESS, RECEIVE_CATEGOTYS, RECEIVE_SHOPS} from '../mutation-types'

const state = {
  longitude: 116.36867,
  latitude: 40.10038,
  address: {},
  categorys: [],
  shops: [],
}

const mutations = {
  
  [RECEIVE_ADDRESS](state, address){
    state.address = address
  },

  [RECEIVE_CATEGOTYS](state, categorys){
    state.categorys = categorys
  },

  [RECEIVE_SHOPS](state, shops){
    state.shops = shops
  },

}

const actions = {
   //获取地址的异步action
   async getAddress({commit, state}){
    const { latitude, longitude } = state
    //执行异步请求
    const result = await reqAddress(latitude, longitude) 
    //成功后提交mutation更新数据
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },

  //获取食品的异步action
  async getCategorys({commit}){
    //执行异步请求
    const result = await reqCategorys() 
    //成功后提交mutation更新数据
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGOTYS, categorys)
    }
  },

  //获取商铺的异步action
  async getShops({commit, state}){
    //执行异步请求
    const result = await reqShops() 
    //成功后提交mutation更新数据
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },
}

const getters = {}

export default{
  state,
  getters,
  mutations,
  actions,
}