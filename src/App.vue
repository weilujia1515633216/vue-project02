<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqAddress, reqUser} from './api'
import { RECEIVE_USER } from './vuex/mutation-types'

export default {
    
  name: 'App',

  async mounted() {
    //异步获取地址
    this.$store.dispatch('getAddress')

    //读取用户信息
    const result = await reqUser()
    if(result.code===0){
      const user = result.data
      this.$store.commit(RECEIVE_USER, user)
    }
  },

  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
