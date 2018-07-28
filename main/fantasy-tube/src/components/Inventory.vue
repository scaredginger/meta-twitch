<template>
  <div>
    <div v-for="player in players" :key="player.id">
      <div> {{ player.name }}
      <img :src="player.channel_logo_url" class="logo">
      Price: {{ player.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inventory',
  data() {
    return {
      players: []
    }
  }
}
</script>

<style scoped>
</style>