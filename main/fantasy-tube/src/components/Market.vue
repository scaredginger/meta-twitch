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
	            			v-bind:max="maxPrice"
	            			v-bind:min="minPrice"
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
		      <template slot="items" slot-scope="props" >

		        <td>{{ props.item.name }}</td>
		        <td>{{props.item.followers[29]}}</td>
		        <td >{{props.item.avgvmscore}}</td>
		        <td
		        class="text-xs-right">${{ props.item.price[29] }}</td>
		        <td 
		        class="text-xs-left"
		        v-bind:style="{ color: props.item.change > 0 ? 'green' : 'red' }">{{props.item.change}}%</td>

		        <td class="justify-center layout px-0" @click="$router.push({ path: '/market/channel/' + props.item.name })">
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
  		price: [0, 250000],
  		minPrice: 0,
  		maxPrice: 250000,
  		headers: [
	        {
	          text: 'Channel',
	          align: 'left',
	          value: 'name'
	        },
	        { text: 'Followers', value: 'followers[29]' },
	        { text: 'Daily vm (avg)', value: 'avgvmscore' },
	        { text: 'Price', value: 'price[29]' },
	        { text: '% Change', value: 'change' }
	    ],
	    market: window.market,
  		players: [

	    ]
  	}
  },
  methods: {
  	customFilter(items, search, filter) {

  		search = search.toString().toLowerCase();
  		return items.filter(row => (row.name.indexOf(search) >= 0 && (row.price[29] <= this.price[1] && row.price[29] >= this.price[0])))
  	}
  },
  mounted() {

  	for (var k in this.market.twitch){
	    const price = this.market.twitch[k]

	    const vmscore = this.market.vm[k]
	    const avgvmscore = Math.round(vmscore.reduce((a, b) => a + b, 0) / 30, 0);

	    const followers = this.market.followers[k]

	    const change = Math.round(((price[29] - price[28]) / price[28]) * 1000 ) / 10;
	    this.players.push({
	    	name: k,
	    	price: price.map(x => Math.round(x, 0)),
	    	vmscore: vmscore.map(x => Math.round(x, 0)),
	    	avgvmscore: avgvmscore,
	    	followers: followers.map(x => Math.round(x, 0)),
	    	change: change
	    })
	}
  }
}
</script>