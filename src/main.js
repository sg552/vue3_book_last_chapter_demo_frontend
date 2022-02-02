import { createApp } from 'vue'
import App from './main.vue'
const app = createApp(App)

// 这个是 远程接口的前缀。
// 完整的接口地址形如： http://shopweb.sweetysoft.com/interface/goods/get_goods
app.config.globalProperties.api = 'http://shopweb.sweetysoft.com/interface/'

/*
import store from './vuex/store'
app.use(store)
*/

import router from './router'
app.use(router)
  .mount('#app')

