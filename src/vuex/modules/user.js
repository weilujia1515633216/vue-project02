import { reqAddress, reqCategorys, reqShops } from '../../api'

import { RECEIVE_USER, RESET_USER } from '../mutation-types'

const state = {
  user: {}
}

const mutations = {
  
  [RECEIVE_USER](state, user){
    state.user = user
  },

  [RESET_USER](state){
    state.user = {}
  },

}

const actions = {
  //退出登录的异步
  async logout({commit}){
    const result = await reqLogout()

    if(result.code===0){
      commit(RESET_USER)
    }
  }
}

const getters = {}

export default{
  state,
  getters,
  mutations,
  actions,
}