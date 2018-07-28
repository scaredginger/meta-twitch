<template>
  <div class="sign_in">
    <center>
    <input v-model="username" type="text" placeholder="Username"><br>
    <input type="password" placeholder="Password"><br>
    <button @click="goToHome()"> Submit </button>
    </center>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'Dashboard', params: { username: this.username }})
    }
  }
}
</script>

<style scoped>
.sign_in {
  width: 70%;
  margin-left: 15%;
}
input {
  width: 70%;
  padding-top: 20px;
  border-bottom: solid 1px black;
  text-align: center;
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