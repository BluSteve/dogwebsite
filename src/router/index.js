import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Settings from "@/views/Settings.vue";
import Login from "@/views/Login";
import Feedback from "@/views/Feedback";
import DogBrowser from "@/views/DogBrowser";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/browser',
    name: 'Browser',
    component: DogBrowser
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
