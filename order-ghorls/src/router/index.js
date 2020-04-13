import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../views/Order.vue'
// import AllOrders from '../views/AllOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Order',
    component: Order
  }
  // {
  //   path: '/all_orders',
  //   name: 'AllOrders',
  //   component: AllOrders
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
