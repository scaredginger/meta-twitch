<template>
  <div class="tomorrow">
    Tomorrow's Lineup
    <LineUp :username="username" :today="false"/>
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
</style>