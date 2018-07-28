<template>
  <div class="dashboard-container">
    <div class="user_data">
      Current Lineup
      <LineUp :username="this.$route.params.username" :today="true"/><br>
      <button @click="gameView()"> Go To Game View </button><br>
      Tomorrow's Lineup
      <LineUp :username="this.$route.params.username" :today="false"/><br>
      <button @click="tomorrowView()"> Set Tomorrow's Roster </button>
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
      username: ''
    }
  },
  mounted() {
    this.username = this.$route.params.username;
  },
  methods: {
    gameView() {
      this.$router.push({ name: 'GameView', params: { username: this.username }})
    },
    tomorrowView() {
      this.$router.push({ name: 'TomorrowView', params: { username: this.username }})
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
</style>