<template>
<v-app>
  <div class="stat_view"> 
    <span>Current Value: ${{ user_money }}</span>
    <span>Overall Ranking {{ user_ranking }}</span>
    <span>Total Wins {{ user_wins }}</span>
    <span>Total Matches {{ user_matches }}</span>
  </div>
  <v-card>
		    <v-card-title class="title">
		      Competition Overall
		      <v-spacer></v-spacer>
		    </v-card-title>

		    <v-data-table
		      :headers="headers"
		      :items="players"
		    >
		      <template slot="items" slot-scope="props">
            <td> {{ props.item.id }} </td>
		        <td>{{ props.item.name }}</td>
		        <td>${{ (Math.random()*2 + 1).toFixed(2) }}M</td>
		        <td > ${{ (Math.random()*2 + 4).toFixed(2) }}M</td>
		      </template>

		      <v-alert slot="no-results" :value="true" color="error" icon="warning">
		        No results matching your criteria.
		      </v-alert>
		    </v-data-table>
		  </v-card>
</v-app>
</template>

<script>
export default {
  name: 'StatsView',
  data() {
    return {
      username: '',
      user_money: 73428243,
      user_ranking: 563,
      user_wins: 124,
      user_matches: 306,
      search: '',
  		price: [20000, 10000000],
  		headers: [
        {text: 'Rank', value: 'index', sortable: false},
	        {
	          text: 'Name',
	          align: 'left',
            value: 'name',
            sortable: false
	        },
	        { text: 'Team Value', value: 'followers', sortable: false },
	        { text: 'Total Worth', value: 'daily_views', sortable: false },
      ],
      players: [
        {id: 1, name: 'test', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/69ead2c6-2e23-4ec3-bb9b-5a866c03cc21-profile_image-50x50.jpg', price: 239492},
        {id: 2, name: 'other_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d4837db8-36a0-4949-b937-837bf5c79383-profile_image-50x50.png', price: 342983},
        {id: 3, name: 'third_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbecd8c4-141c-422b-8285-e3f8cae79dbb-profile_image-50x50.jpg', price: 9849537},
        {id: 4, name: 'scaredginger', channel_logo_url: 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-70x70.jpg', price: 9001},
        {id: 5, name: 'etopiei', channel_logo_url: 'https://avatars1.githubusercontent.com/u/17671663?s=460&v=4', price: 9120803},
        {id: 6, name: 'hiya', channel_logo_url: 'https://avatars3.githubusercontent.com/u/14135445?s=460&v=4', price: 5732934}
      ]
    }
  },
  mounted() {
    if (this.$route.params.username != '' && this.$route.params.username != null && this.$route.params.username != undefined) {
      this.username1 = this.$route.params.username;
    }
  }
}
</script>

<style scoped>
.stat_view {
  display: flex;
  background-color: #383838;
  color: white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.stat_view span {
  flex-grow: 1;
  margin-left: 2%;
  margin-right: 2%;
}
.title {
  font-size: 2rem;
}
td {
  text-align: left;
}
</style>