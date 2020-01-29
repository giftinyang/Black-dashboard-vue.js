import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Icons from "@/views/Icons";
import Maps from "@/views/Maps";
import Notifications from "@/views/Notifications";

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard'
  },
  {
    path: '/icons',
    component: Icons,
    name: 'icons'

  },
  {
    path: '/maps',
    component: Maps,
    name: 'Maps'
  },

  {
    path: '/notifications',
    component: Notifications,
    name: 'Notifications'
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
