<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        <img :src="p.image"/>
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
        <p><button @click="add(p.id)">Add</button></p>
        <p><button @click="minus(p.id)">Minus</button></p>
        <p><button @click="deleteItem(p.id)">Delete</button></p>
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<style scoped>
@import '../assets/css/cart.css';
</style>

<script>
import { mapGetters } from 'vuex'
import { useStore } from 'vuex'
import { go } from '../libs/router'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      /*this.$store.dispatch('checkout', products)*/
      go("/shops/dingdanzhifu", this.$router)
    },
    add (id) {
      this.$store.dispatch('changeItemNumber', {id, type: 'add'})
    },
    minus (id) {
      this.$store.dispatch('changeItemNumber', {id, type: 'minus'})
    },
    deleteItem (id) {
      this.$store.dispatch('deleteItem', id)
    }
  },
  store: useStore()
}
</script>
