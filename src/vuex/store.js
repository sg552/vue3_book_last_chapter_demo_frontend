import { createStore } from 'vuex'
import { INCREASE } from '@/vuex/mutation_types'


import userInfo from './modules/user_info'
import tabbar from './modules/tabbar'
import toast from './modules/toast'
import countdown from './modules/countdown'
import products from './modules/products'
import shopping_car from './modules/shopping_car'

import * as actions from './actions'
import * as getters from './getters'

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
