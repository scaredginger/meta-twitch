<style scoped lang="scss">
	#root {

	}

</style>

<template>
	<v-app>
		
		<router-view>
		</router-view>

	    <v-card>
		    <v-card-title>
		      Market
		      <v-spacer></v-spacer>

		      <v-text-field
		        v-model="search"
		        append-icon="search"
		        label="Search"
		        single-line
		        hide-details
		      ></v-text-field>

		    </v-card-title>

		    <v-container fluid grid-list-lg
		    style="width:500px;float:right;">

			    <v-layout row justify-space-between >
			    	<v-flex
			    		style="line-height:30px; width:75px;">
			    		${{price[0]}}
			    	</v-flex>
					<v-flex>
			    		<v-range-slider
	            			v-model="price"
	            			:max="10000000"
	            			:min="0"
	            			:step="10000"
	            			style=" width: 300px;"
	          			></v-range-slider>
			    	</v-flex>
			    	<v-flex
			    		style="line-height:30px; width:75px;">
			    		${{price[1]}}
			    	</v-flex>
				</v-layout>
			</v-container>

		    <v-data-table
		      :headers="headers"
		      :items="players"
		      :search="search"
		      :custom-filter="customFilter"
		    >
		      <template slot="items" slot-scope="props">
		        <td>{{ props.item.name }}</td>
		        <td>1.2 M</td>
		        <td >3.6 M</td>
		        <td
		        class="text-xs-right">${{ props.item.price }}</td>
		        <td 
		        class="text-xs-left"
		        style="color:green;">+5%</td>

		        <td class="justify-center layout px-0">
		          <v-icon
		            small
		            v-if="!props.item.owned"
		            class="mr-2"
		            @click=""
		          >
		            monetization_on
		          </v-icon>
		          <v-icon
		          	small
		          	v-if="props.item.owned"
		          	class="mr-2">
		          	check_circle
		          </v-icon>
		        </td>
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
  name: 'Market',
  props: {

  },
  data() {
  	return {
  		search: '',
  		price: [20000, 10000000],
  		headers: [
	        {
	          text: 'Channel',
	          align: 'left',
	          value: 'name'
	        },
	        { text: 'Followers', value: 'followers' },
	        { text: 'Daily views (avg)', value: 'daily_views' },
	        { text: 'Price', value: 'price' },
	        { text: '% Change', value: 'change' }
	    ],
  		players: [
        {name: 'test', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/69ead2c6-2e23-4ec3-bb9b-5a866c03cc21-profile_image-50x50.jpg', price: 239492, owned:false},
        {name: 'other_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d4837db8-36a0-4949-b937-837bf5c79383-profile_image-50x50.png', price: 342983, owned:false},
        {name: 'third_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbecd8c4-141c-422b-8285-e3f8cae79dbb-profile_image-50x50.jpg', price: 9849537, owned:true},
        {name: 'scaredginger', channel_logo_url: 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-70x70.jpg', price: 9001, owned:false},
        {name: 'etopiei', channel_logo_url: 'https://avatars1.githubusercontent.com/u/17671663?s=460&v=4', price: 9120803, owned:false}
      ]
  	}
  },
  methods: {
  	customFilter(items, search, filter) {

  		search = search.toString().toLowerCase();
  		return items.filter(row => (row.name.indexOf(search) >= 0 && (row.price <= this.price[1] && row.price >= this.price[0])))
  	}
  }
}
</script>