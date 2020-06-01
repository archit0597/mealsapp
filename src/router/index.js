import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import MealDetails from '../views/MealDetails.vue'

Vue.use(VueRouter)

  const routes = [
  {path: '/', component: Home},
  {path: '/search', component: Search},
  {path: '/details', component:MealDetails}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
