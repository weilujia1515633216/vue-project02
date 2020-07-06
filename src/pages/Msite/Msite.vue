<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中...'">
        <span class="header_search" slot="left">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList/>
  </section>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.css'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    name: 'Msite',

    computed: {
      ...mapState({
        address: state => state.msite.address,
        categorys: state => state.msite.categorys
        }),

      //用于显示分类轮播的二维数组
      categorysArr (){
        const {categorys} = this
        const bigArr = []
        let smallArr = []

        categorys.forEach(category => {
          //小数组添加到大数组
          if(smallArr.length===0){
            bigArr.push(smallArr)
          }
          //每一项添加到小数组
          smallArr.push(category)

          if(smallArr.length===8){
            smallArr = []
          }

        });

        return bigArr
      }
    },

    // mounted() {
    //   this.$store.dispatch('getShops')
    // },
    
    components: {
      ShopList
    },

    mounted(){
      //异步获取数据
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')

    },

    watch: {
      categorys(){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            //循环模式
            loop: true,
            //分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    },  

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .msite  
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
 
</style>
