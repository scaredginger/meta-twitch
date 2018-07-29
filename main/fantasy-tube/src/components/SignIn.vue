<template>
  <div class="sign_in">
    <center>
    <v-text-field
      v-model="username"
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      type="password"
    ></v-text-field>
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
      this.$store.commit('changeUsername', {
        username: this.username
      });
      this.$router.push({ name: 'Dashboard'});      
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
  outline: none;
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