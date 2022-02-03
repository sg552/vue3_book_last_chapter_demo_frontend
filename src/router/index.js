import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login'
import Index from '@/views/shops/index'
import Category from '@/views/shops/category'
import GoodsDetails from '@/views/shops/goods_details'
import Dingdanzhifu from '@/views/shops/dingdanzhifu'
import PaySuccess from '@/views/shops/paysuccess'
import PayFail from '@/views/shops/payfail'
import Cart from '@/components/Cart'
import Cart2 from '@/components/Cart2'
import Mine from '@/views/mine/Mine'
import MineOrder from '@/views/mine/MineOrder'
import Address from '@/views/address/address'
import AddAddress from '@/views/address/add'
import WaitToAuth from '@/views/wait_to_auth'
import ShoppingCar from '@/views/shopping_car'

const routes = [
    {
      path: '/',
      name: 'Root',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { path: '/cart',
      name: 'Cart',
      component: Cart
    },
    { path: '/cart2',
      name: 'Cart2',
      component: Cart2
    },
    { path: '/mine',
      name: 'Mine',
      component: Mine
    },
    { path: '/mine_order',
      name: 'MineOrder',
      component: MineOrder
    },
    { path: '/address',
      name: 'Address',
      component: Address
    },
    { path: '/address/add',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/shops/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/shops/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/shops/goods_details',
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/shops/dingdanzhifu',
      name: 'Dingdanzhifu',
      component: Dingdanzhifu
    },
    {
      path: '/shops/paysuccess',
      name: 'PaySuccess',
      component: PaySuccess
    },
    {
      path: '/shops/payfail',
      name: 'PayFail',
      component: PayFail
    },
    { path: '/wait_to_auth',
      name: 'wait_to_auth',
      component: WaitToAuth
    },
    {
      path: '/shopping_car',
      name: 'shopping_car',
      component: ShoppingCar
    }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
