import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TeamBuild from '@/components/TeamBuild'
import Inventory from '@/components/Inventory'
import Market from '@/components/Market'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team',
      name: 'TeamBuild',
      component: TeamBuild
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    }
  ]
})
