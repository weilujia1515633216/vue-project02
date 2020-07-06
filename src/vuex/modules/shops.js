
import Vue from 'vue'
import { reqShopInfo, reqShopGoods, reqShopRatings } from '../../api'

import {RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO, ADD_FOOD_COUNT, REDUCE_FOOD_COUNT} from '../mutation-types'

const state = {
  goods: [], //商家列表
  ratings: [], //评价
  info: {},  //商家信息
  cartFoods: []
}

const mutations = {
  
  [RECEIVE_GOODS](state, goods){
    state.goods = goods
  },

  [RECEIVE_RATINGS](state, ratings){
    state.ratings = ratings
  },

  [RECEIVE_INFO](state, info){
    state.info = info
  },

  [ADD_FOOD_COUNT](state, {food}){
    if(!food.count){
      // 第一次
      // food.count = 1  // 给food添加一个新的属性
       // 为响应式对象添加一个属性，确保新属性也是响应式的，并且能够触发视图更新
       Vue.set(food, 'count', 1)
       state.cartFoods.push(food)

    }else{
      food.count++
    }
  },
  
  [REDUCE_FOOD_COUNT](state, {food}){
    if(food.count>0){
      food.count--
      if(food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  }

}

const actions = {
  async getInfo({commit}){
    const result = await reqShopInfo()
    if(result.code===0){
      const info = result.data
      commit( RECEIVE_INFO , info)
    }
  },

  async getGoods({commit}){
    const result = await reqShopGoods()
    if(result.code===0){
      const goods = result.data
      commit( RECEIVE_GOODS , goods)
    }
  },

  async getRatings({commit}){
    const result = await reqShopRatings()
    if(result.code===0){
      const ratings = result.data
      commit( RECEIVE_RATINGS , ratings)
    }
  },

  //更新指定food的数量
  updateFoodCount({commit}, {isAdd, food}){
    if(isAdd){
      commit(ADD_FOOD_COUNT, {food})
    }else{
      commit(REDUCE_FOOD_COUNT, {food})
    }
  },

}

const getters = {
  //总数量
  totalCount(state){
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },

  //总价格
  totalPrice(state){
    return state.cartFoods.reduce((pre, food) => pre + food.count * food.price , 0)
  }
}

export default{
  state,
  getters,
  mutations,
  actions,
}