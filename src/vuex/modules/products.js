import shop from '@/api/shop'
import * as types from '@/vuex/mutation_types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    console.info('阻止 调用products的 add_to_cart mutation')
    state.all.find(p => p.id === id).inventory--
    return
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
