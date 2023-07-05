import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPage from '../views/AddPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/TablePage',
    name: 'TablePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TablePage.vue')
  },
  {
    path: '/Add',
    name: 'AddPage',
    component: AddPage
    
  }
]

const router = new VueRouter({
  routes
})

export default router
