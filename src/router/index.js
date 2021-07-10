import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import AdminUserList from '../views/AdminUserList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /*webpackChunkName  "about" */  '../views/About.vue')
  },  
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(  '../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },   
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/wallofposts',
    name: 'WallOfPosts',
    component: () => import('../views/WallOfPosts.vue')
  }    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
