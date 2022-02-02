import { createStore } from 'vuex'
import { INCREASE } from '@/vuex/mutation_types'

import userInfo from '@/vuex/modules/user_info'
import tabbar from '@/vuex/modules/tabbar'
import toast from '@/vuex/modules/toast'
import countdown from '@/vuex/modules/countdown'
import products from '@/vuex/modules/products'
import shopping_car from '@/vuex/modules/shopping_car'

import * as actions from '@/vuex/actions'
import * as getters from '@/vuex/getters'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    //web_share: 'http://ptbweb.siwei.me',
    web_share: 'http://shopweb.sweetysoft.com',
    h5_share: 'http://shopweb.sweetysoft.com/?#'
  },
  actions,
  getters,
  modules: {
    products,
    shopping_car,
    userInfo,
    tabbar,
    toast,
    countdown
  },
  strict: debug,
  middlewares: debug ? [] : []
})
