<style scoped lang="scss">
.thumbnail {
  margin:20px;
}
</style>

<template>
  <v-card >
    <v-card-title primary-title>
      <h3 class="headline mb-0 white--text">Your inventory</h3>
    </v-card-title>

    <v-container>
     <v-layout row wrap>
        <draggable element="v-layout" wrap v-model="players" :options="{group:'.item'}">
            <ChannelThumbnail v-for="x in players" :key="x.name" :channel="x"></ChannelThumbnail>
        </draggable>
      </v-layout>
    </v-container>
  </v-card>

</template>

<script>
import ChannelThumbnail from '@/components/ChannelThumbnail.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Inventory',
  components: {
    ChannelThumbnail,
    draggable
  },
  data() {
    return {
      inventory: [],
      username: 'test',
      players: [
        {name: 'test', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/69ead2c6-2e23-4ec3-bb9b-5a866c03cc21-profile_image-50x50.jpg', price: 239492},
        {name: 'other_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d4837db8-36a0-4949-b937-837bf5c79383-profile_image-50x50.png', price: 342983},
        {name: 'third_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbecd8c4-141c-422b-8285-e3f8cae79dbb-profile_image-50x50.jpg', price: 9849537},
        {name: 'scaredginger', channel_logo_url: 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-70x70.jpg', price: 9001},
        {name: 'etopiei', channel_logo_url: 'https://avatars1.githubusercontent.com/u/17671663?s=460&v=4', price: 9120803},
        {name: 'hiya', channel_logo_url: 'https://avatars3.githubusercontent.com/u/14135445?s=460&v=4', price: 5732934}
      ]
    }
  },
  mounted() {
    fetch(`http://meta-twitch.tech/inventory/${this.username}`).then((data) => {
      this.players = data;
    });
  }
}
</script>

<style scoped>
.players_container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}
.player_object {
  margin-top: 8px;
  flex-grow: 1;
  min-width: 24%;
  max-width: 24%;
}
.player_object:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
.logo {
  border-radius: 50%;
  width: 20%;
}
.player_text {
  font-size: 1rem;
}
</style>
