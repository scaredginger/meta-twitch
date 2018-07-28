
<style scoped lang="scss">
  
  .dark-clickable, .light-clickable {
    transition: background 0.5s, color 0.5s;
    cursor:pointer;

  }

  .light-clickable:hover {
    background:rgba(240,240,240,1);
    color:rgb(80, 80, 80);
  }

  .dark-clickable:hover {
    background: rgba(80, 80, 80, 1) !important;
  }

  a {
    color: inherit;
    text-decoration:inherit;
  }

</style>

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
      user_matches: 306,
      expandYesterday: false,
      currentLineup: [
        {name: 'test', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/69ead2c6-2e23-4ec3-bb9b-5a866c03cc21-profile_image-50x50.jpg', price: 239492},
        {name: 'other_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d4837db8-36a0-4949-b937-837bf5c79383-profile_image-50x50.png', price: 342983},
        {name: 'third_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbecd8c4-141c-422b-8285-e3f8cae79dbb-profile_image-50x50.jpg', price: 9849537},
        {name: 'scaredginger', channel_logo_url: 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-70x70.jpg', price: 9001},
        {name: 'etopiei', channel_logo_url: 'https://avatars1.githubusercontent.com/u/17671663?s=460&v=4', price: 9120803}
      ]
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
