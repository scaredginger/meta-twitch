<template>
<div>
  {{ username }}
  <div class="lineup_container">
    <div class="player_object" v-for="player in players" :key="player.id">
      <div class="player_text">
      <img :src="player.channel_logo_url" class="logo"><br>
      @{{ player.name }} <br>
      ${{ player.price }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LineUp',
  props: {
    username: ''
  },
  data() {
    return {
            players: [
        {name: 'test', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/69ead2c6-2e23-4ec3-bb9b-5a866c03cc21-profile_image-50x50.jpg', price: 239492},
        {name: 'other_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d4837db8-36a0-4949-b937-837bf5c79383-profile_image-50x50.png', price: 342983},
        {name: 'third_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbecd8c4-141c-422b-8285-e3f8cae79dbb-profile_image-50x50.jpg', price: 9849537},
        {name: 'scaredginger', channel_logo_url: 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-70x70.jpg', price: 9001},
        {name: 'etopiei', channel_logo_url: 'https://avatars1.githubusercontent.com/u/17671663?s=460&v=4', price: 9120803}
      ]
    }
  }
}
</script>

<style scoped>
.lineup_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.logo {
  border-radius: 50%;
  width: 20%;
}
.player_text {
  font-size: 1rem;
}
.player_object {
  margin-top: 8px;
  flex-grow: 1;
  max-width: 20%;
}
</style>