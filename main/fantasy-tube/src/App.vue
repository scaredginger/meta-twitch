<template>
  <div id="app">
    <div class="header"><router-link to="/dashboard"><h2>MetaTwitch</h2></router-link></div>
    <router-view/>
  </div>
</template>

<script>
import market from '@/assets/market.json'

window.market = market;

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.header {
  width: 100%;
  padding: 1.6rem;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: rgb(75, 56, 122);
}
.header h2 {
  text-decoration: none;
  color: white;
}
.header h2 {
  text-decoration: none;
  color: white;
}
a {
  text-decoration:none;
}
</style>
