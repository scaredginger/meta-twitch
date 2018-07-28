<template>
  <div class="dashboard-container">
    Welcome to your dashboard: {{ this.username }}
    <div class="user_data">
      <LineUp :username="username" :today="true"/><br>
      <button> Go To Game View </button><br>
      <LineUp :username="username" :today="false"/><br>
      <button> Set Tomorrow's Roster </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
.dashboard-container {
  margin-top: 16px;
}
button {
  width: 30%;
  margin-top: 20px;
  color: white;
  background-color: rgb(75, 56, 122);
  border-radius: 8px;
  padding: 8px;
}
</style>