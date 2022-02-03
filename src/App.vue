<template>
  <router-view></router-view>
</template>

<script>
import store from './vuex/store'
import { SET_BASEINFO, GET_BASEINFO } from './vuex/mutation_types'
import { useStore } from 'vuex'

export default {
  data () {
    return {
      open_id: undefined
    }
  },
  store: useStore(),
  mounted () {
    console.log('== in App.vue , mounted()-- 006, href: ', location.href)
    
    // this.open_id = this.$route.query.open_id
    this.open_id = new URL(location.href).searchParams.get("open_id")
    
    // TODO 开发环境下使用，　生产环境下注释掉. 如果不考虑付款页面的话，这里的内容可以随意取值
//    this.$store.dispatch(SET_BASEINFO, {open_id: 'opFELv6YkJkMaH-xFkokTWCs5AlQ'})

    console.info("--- this.open_id: ", this.open_id)
    if (this.open_id) {
      this.$store.dispatch(SET_BASEINFO, {open_id: this.open_id})
    } else {
      this.$store.dispatch(SET_BASEINFO)
      if (this.$store.state.userInfo.open_id === undefined) {
        console.info('---  用户id和open_id不存在 === 跳转到授权等待页面, 这个页面需要在微信开发工具中调试。无法在普通浏览器中使用')
        let that = this
        alert(22222)
        setTimeout(function(){
          that.$router.push({name: 'wait_to_auth'})
        }, 5000)
        
      } else {
        console.info('已经有了BASEINFO')
      }
    }
  },
  watch: {
    '$route' (val) {
    }
  },
  methods: {
  },
  components:{
  }
}
</script>

<style lang="scss">
@import "./styles/px2rem.scss";
@import "./styles/variable.scss";
@import './assets/css/index.css';
@import './assets/css/base.css';

.background {
  background-color: $background-color;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.navigation_bar {
  width: 100%;
  background-color: #fff;
  color: #3B3B3B;
  position: absolute;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  height: 50px;
  top: 0;
  z-index: 10;
}

.navigation_bar:after{
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  border-bottom: 2px solid #F3F3F3;
  color: #D9D9D9;
}

.tast_list_bd {
  @include px2rem(padding-bottom, 50px);
  padding-top: 50px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.divider {
  height: 5px;
  display: block;
  background-color: #f3f3f3;
}

.queding{
  color: white;
  font-family: PingFang-SC-Medium;
  text-align: center;
  font-size: 18px;
  line-height: 48px;
  font-weight: bold;
}

.shop_layout-scroll-absolute {
  background-color: #4AA3FF;
  position: absolute;
  width: 100%;
  bottom: 0;
  clear:both;
  height: 48px;
}

.full_height {
  height: 100%;
  width: 100%;
}


</style>
