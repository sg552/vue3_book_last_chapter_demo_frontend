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

  [types.ADD_TO_CART] (state, product) {
    state.all.push(product)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
