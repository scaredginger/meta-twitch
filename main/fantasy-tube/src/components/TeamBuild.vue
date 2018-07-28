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
    <div>

      <LineUp ref="lu" title="Tomorrow's Lineup" class="grey lighten-2" :channels="currentLineup" :editable="true"/>
      <v-btn @click="saveAndGoHome()" class="btn-primary primary">Save</v-btn>
      <Inventory class="grey darken-2"></Inventory>


    <router-link to="/market">
      <v-container fluid class="light-clickable">
        <h3 class="display-1">VIEW MARKET</h3>
      </v-container>
    </router-link>
    </div>
</template>

<script>

import LineUp from '@/components/LineUp'
import Inventory from '@/components/Inventory'


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

export default {
  name: 'TeamBuild',
  components: {
      LineUp,
      Inventory
  },
  data () {
    return {
      /*
      currentLineup: [
        {name: 'test', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/69ead2c6-2e23-4ec3-bb9b-5a866c03cc21-profile_image-50x50.jpg', price: 239492},
        {name: 'other_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d4837db8-36a0-4949-b937-837bf5c79383-profile_image-50x50.png', price: 342983},
        {name: 'third_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbecd8c4-141c-422b-8285-e3f8cae79dbb-profile_image-50x50.jpg', price: 9849537},
        {name: 'scaredginger', channel_logo_url: 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-70x70.jpg', price: 9001},
        {name: 'etopiei', channel_logo_url: 'https://avatars1.githubusercontent.com/u/17671663?s=460&v=4', price: 9120803}
      ],
      */
      currentLineup: [],
      player_team: [],
      total_budget: 5000000,
      total_team_price: 0,
      submit_ready: false,
    }
  },
  mounted() {
      this.currentLineup = JSON.parse(JSON.stringify(this.$store.state.next_team));
  },
  methods: {
    formatMoney(aNumber) {
      return formatter.format(aNumber);
    },
    getSubmitClass() {
        if (this.submit_ready) {
            return 'submit_button';
        }
        return 'submit_button_cancel';
    },
    saveAndGoHome() {
        this.$refs.lu.save();
        this.$router.push({ name: 'Dashboard'});      
    }
  },
}
</script>

