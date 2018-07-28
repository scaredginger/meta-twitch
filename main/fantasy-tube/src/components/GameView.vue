<template>
  <div class="display">
    Current Game Score
    <div class="section">
      <div class="half game_status">
        {{ score1 }} <br>
        View Minutes
      </div>
      <div class="half game_status">
        {{ score2 }} <br>
        View Minutes
      </div>
    </div>
    <hr>
    <div class="section">
      <div class="graph-sidebar">
        <div class="user1">
          {{ username1 }} 
        </div>
        <div class="user2">
          {{ username2 }} 
        </div>
      </div>
      <div id="versus_graph">
      </div>
    </div>
    <hr>
    Lineups
    <div class="large-section">
      <div class="almost_half lineups">
        <LineUp :username="username1"/>
      </div>
      <div class="almost_half lineups">
        <LineUp :username="username2"/>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>

import LineUp from '@/components/LineUp.vue'

export default {
  name: 'GameView',
  components: {
    LineUp
  },
  data() {
    return {
      score1: 260000,
      score2: 4983249,
      username1: 'etopiei',
      username2: 'scaredginger',
      graph_data: []
    }
  }
}
</script>

<style scoped>
hr {
  height: 2px;
  color: black;
  background-color: black;
}
.section {
  width: 100%;
  height: 30%;
  display: flex;
  padding-top: 1%;
  padding-bottom: 1%;
}
.large-section {
  width: 100%;
  height: 60%;
  display: flex;
  padding-top: 1%;
  padding-bottom: 1%;
}
.half {
  width: 50%;
  height: 100%;
  border-left: solid 1px white;
  border-right: solid 1px white;
}
.almost_half {
  width: 48%;
  height: 100%;
  background-color: #999;
  margin-right: 1%;
  margin-left: 1%;
}
.game_status {
  background-color: black;
  color: white;
}
.display {
  font-size: 2rem;
}
.shadow {
  -moz-box-shadow: 0 0 30px 5px #999;
  -webkit-box-shadow: 0 0 30px 5px #999;
}
.graph-sidebar {
  display: flex;
  flex-direction: column;
}
.user1 {
  align-self: flex-start;
}
.user2 {
  align-self: flex-end;
}
</style>