<template>
<div>
  <div class="goto">
    <router-link to="/team">Select Your Team</router-link>
  </div>
  <div class="goto">
    <router-link to="/market">Go To Market</router-link>
  </div>
  <div class="goto">
    <router-link to="/inventory">Inventory</router-link>
  </div>
  <div class="goto">
    <router-link to="/match">Start a Match</router-link>
  </div>
  <div class="goto">
    <router-link to="/game">Current Game View</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(75, 56, 122);
}
.goto {
  margin-top: 2rem;
}
</style>
