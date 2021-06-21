import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Settings from "@/views/Settings.vue";

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
