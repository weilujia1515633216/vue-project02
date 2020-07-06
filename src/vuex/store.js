/* 
  vuex最核心的管理模块
*/

import Vue from 'vue' 
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import msite from './modules/msite'
import shops from './modules/shops'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  modules: {
    msite,
    shops,
    user
  }
})