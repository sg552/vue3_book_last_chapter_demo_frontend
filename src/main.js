import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 这个是 远程接口的前缀。
// 完整的接口地址形如： http://shopweb.sweetysoft.com/interface/goods/get_goods
app.config.globalProperties.api = 'http://shopweb.sweetysoft.com/interface'


// 允许所有的.vue页面调用 currency 这个方法
import { currency } from '@/currency.js'
app.config.globalProperties.currency = currency

import store from './vuex/store'
import router from './router'

app.use(store).use(router).mount('#app')
