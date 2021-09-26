import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Product from '../views/Product.vue';
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Products',
    component: Products
  },
  {
    path: '/producto/:id',
    name: 'Product',
    component: Product
  }
]

const router = new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

export default router
