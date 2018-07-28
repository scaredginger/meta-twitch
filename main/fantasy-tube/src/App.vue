<template>
  <div id="app">
    <div class="header"><a href="/"><h2>Twitch Fantasy Team</h2></a></div>
    <router-view/>
  </div>
</template>

<script>
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
.header a {
  text-decoration: none;
  color: white;
}
.header a:hover {
  text-decoration: none;
  color: white;
}
</style>
