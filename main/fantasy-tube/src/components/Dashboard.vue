<template>
  <div class="dashboard-container">
    <div class="user_data">
      Current Lineup
      <LineUp :username="this.$store.username" :today="true"/><br>
      Tomorrow's Lineup
      <LineUp :username="this.$store.username" :today="false"/><br>
      All Time Stats
      <div class="stat_view"> 
        <span>Current Value: ${{ user_money }}</span>
        <span>Overall Ranking {{ user_ranking }}</span>
        <span>Total Wins {{ user_wins }}</span>
        <span>Total Matches {{ user_matches }}</span>
        </div><br>
      <div class="button_view">
        <button @click="gameView()"> Go To Game View </button><br>
        <button @click="tomorrowView()"> Set Tomorrow's Roster </button>
        <button @click="marketView()"> Visit Market </button>
      </div>
    </div>
  </div>
</template>

<script>

import LineUp from '@/components/LineUp.vue'

export default {
  name: 'Dashboard',
  components: {
    LineUp
  },
  data() {
    return {
      user_money: 73428243,
      user_ranking: 563,
      user_wins: 124,
      user_matches: 306
    }
  },
  methods: {
    gameView() {
      this.$router.push({ name: 'GameView'})
    },
    tomorrowView() {
      this.$router.push({ name: 'TomorrowView'})
    },
    marketView() {
      this.$router.push({ name: 'Market'})
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  margin-top: 16px;
  font-size: 1.6rem;
}
router-link {
  width: 30%;
  margin-top: 20px;
  color: white;
  background-color: rgb(75, 56, 122);
  border-radius: 8px;
  padding: 8px;
}
button {
  width: 30%;
  margin-top: 20px;
  margin-bottom: 1.2rem;
  color: white;
  background-color: rgb(75, 56, 122);
  border-radius: 8px;
  padding: 8px;
}
.button_view {
  display: flex;
}

.button_view button {
  flex-grow: 1;
  margin-left: 1%;
  margin-right: 1%;
}
.stat_view {
  display: flex;
  background-color: #383838;
  color: white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.stat_view span {
  flex-grow: 1;
  margin-left: 2%;
  margin-right: 2%;
}
</style>