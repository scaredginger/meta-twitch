import Vue from 'vue' 
import Router from 'vue-router' 
import GameView from '@/components/GameView'
import LineUp from '@/components/LineUp'
import Dashboard from '@/components/Dashboard'
import TeamBuild from '@/components/TeamBuild'
import Market from '@/components/Market'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'
import Inventory from '@/components/Inventory'
import TomorrowView from '@/components/TomorrowView'
Vue.use(Router) 
 
export default new Router({ 
  routes: [ 
    { 
      path: '/', 
      name: 'SignIn', 
      component: SignIn 
    }, 
    { 
      path: '/home', 
      name: 'Home', 
      component: Home 
    }, 
    { 
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
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
      path: '/tomorrow',
      name: 'TomorrowView',
      componenet: TomorrowView
    },
    {
      path: '/game',
      name: 'GameView',
      component: GameView
    },
    {
      path: '/lineup',
      name: 'LineUp',
      component: LineUp
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
      children: [
        { path: 'channel/:channelId',
          name: 'MarketItem',
          props: true,
          component: MarketItem
        }
      ]
    }
  ]
})
