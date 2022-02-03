<template>
  <div style="padding: 50px;">
    <h3>正在跳转到授权界面...</h3>
  </div>
</template>

<script>
import { useStore } from 'vuex'
  export default {
    mounted () {
      window.location.href = this.$store.state.web_share + "/auth/wechat"
    },
    components: {
    },
    store: useStore()

  }
</script>
