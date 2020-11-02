import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Pages/Home.vue';
import Contact from '../Pages/Contact.vue'
import Login from '../Login-pages/Login.vue'
import Signup from '../Login-pages/Signup.vue'

Vue.use(VueRouter)

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
    component: () => import(/* webpackChunkName: "about" */ '../Pages/About.vue')
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/sign-up",
    name: "sign up",
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router
