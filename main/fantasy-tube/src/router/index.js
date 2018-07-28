import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TeamBuild from '@/components/TeamBuild'

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
    }
  ]
})
