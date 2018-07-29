<template>
  <div class="tomorrow">
    <h2>Tomorrow's Lineup</h2>
    <LineUp :username="username" :today="false"/>
    <h2>Inventory</h2>
    <Inventory/>
  </div>
</template>

<script>

import LineUp from '@/components/LineUp.vue'
import Inventory from '@/components/Inventory.vue'

export default {
  name: 'TomorrowView',
  components: {
    LineUp,
    Inventory,
  },
  data() {
    return {
      username: ''
    }
  },
  mounted() {
    this.username = this.$route.params.username;
  }
}  
</script>

<style scoped>
.tomorrow {
  margin-top: 1.2rem;
}
h2 {
  margin-top: 2rem;
}
</style>