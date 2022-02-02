<template>
  <div>
    <div class="mine_h">
      <header class="top_bar">
        <h3 class="cartname">我的订单</h3>
      </header>
    </div>
    <span class="divider" style="height: 45px;"></span>
    <MineOrderMain v-for="order in orders" :goods="order.goods" :order_id="order.order_id" :total_cost="order.total_cost"
    :order_status="order.order_status" :is_dispatch="order.is_dispatch" ></MineOrderMain>
  </div>
</template>

<script>
	import MineOrderMain from '../../components/MineOrderMain.vue';
  import { useStore } from 'vuex'
  const axios = require('axios');

	export default{
    data(){
      return {
        orders: [],
        buy_count: 1,
        order_status: this.$route.query.order_status,
        is_dispatch: this.$route.query.is_dispatch
      }
    },
		components:{
			MineOrderMain
		},
    computed: {
      get_orders_url () {
        if (this.order_status === "false") {
          return ('/orders/get_all_orders?order_status=false' + '&open_id=' + this.$store.state.userInfo.open_id)
        } else if (this.order_status === "true") {
          return ('/orders/get_all_orders?order_status=true'  + '&open_id=' + this.$store.state.userInfo.open_id)
        } else {
          return '/orders/get_all_orders?open_id=' + this.$store.state.userInfo.open_id
        }
      }
    },
    mounted(){
      this.$nextTick(()=>{
        axios.get(this.api + this.get_orders_url).then((response)=>{
          console.info(response.data)
          this.orders = response.data.orders
        },(error) => {
          console.error(error)
        });
      })
    },
    store: useStore(),
    methods:{
    }
	}
</script>

<style scoped>
@import '../../assets/css/mine.css';
</style>
