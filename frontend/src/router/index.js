import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MakeOrder from '../views/MakeOrder.vue'
import OrderDone from '../views/OrderDone.vue'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'
import MyProfile from '../views/MyProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orderdone',
    component: OrderDone,
  },
  {
    path: '/makeorder',
    component: MakeOrder,
  },
  {
    path: '/myprofile',
    component: MyProfile,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/products',
    component: Products,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
