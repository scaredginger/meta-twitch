import '@babel/polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
 
 // index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inventory: [],
    current_team: [],
    next_team: [],
    username: ''
  },
  getters: {
    inventory: state => {
      return state.next_team;
    }
  },
  mutations: {
    addInventory(context, data) {
      context.inventory.push(data.channel);
    },
    removeInventory(context, data) {
      let current_in = context.inventory;
      for(let i = 0; i < current_in.length; i += 1) {
        if (current_in[i]['name'] == data.channel_name) {
          context.inventory.splice(i, 1);  
        }
      }
    },
    addCurrentTeam(context, data) {
      context.current_team.push(data.chanel);
    },
    removeCurrentTeam(context, data) {
      let current_team = context.inventory;
      for(let i = 0; i < current_team.length; i += 1) {
        if (current_team[i]['name'] == data.channel_name) {
          context.current_team.splice(i, 1);
        }
      }
    },
    addNextTeam(context, data) {
      context.next_team.push(data.channel);
    },
    removeNextTeam(context, data) {
      let next_team = context.next_team;
      for(let i = 0; i < next_team.length; i += 1) {
        if (next_team[i]['name'] == data.channel_name) {
          context.next_team.splice(i, 1);
        }
      }
    },
    emptyNext(context, data) {
      context.next_team = [];
    },
    changeUsername(context, data) {
      context.username = data.username;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
