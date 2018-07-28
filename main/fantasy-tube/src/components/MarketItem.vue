<style scoped lang="scss">
	#root {

	}

</style>

<template>
   <v-card class="grey darken-3">

    <v-container grid-list-md text-xs-center>
	    <v-layout row wrap>

	      <v-flex shrink>
	      	<ChannelThumbnail v-bind:channel="channel" v-bind:preview="true"></ChannelThumbnail>
	      </v-flex>

	      <v-spacer></v-spacer>

	      <v-flex>
	      	<v-layout row>
	      		<v-flex style="text-align:right">
		    		<v-btn @click="addToTeam()" large color="primary">Add to Inventory</v-btn>
		    		<v-btn @click="removeFromTeam()" large color="orange">Sell from Inventory</v-btn>
		    	</v-flex>
	      	</v-layout>

	      	<v-layout row>
	      		<v-flex>
			        <v-card xs2>
			          <v-card-text>Followers <v-spacer></v-spacer> 346 K<v-spacer></v-spacer><span style="color:green">+1.1K</span> </v-card-text>
			        </v-card>
			      </v-flex>

			      <v-flex>
			        <v-card xs2>
			          <v-card-text>Value <v-spacer></v-spacer>$100 K <v-spacer></v-spacer><span style="color:green">+5%</span></v-card-text>
			        </v-card>
			      </v-flex>

			      <v-flex>
			        <v-card xs2>
			          <v-card-text>Daily VMs (avg) <v-spacer></v-spacer>1.23 K<v-spacer></v-spacer><span style="color:green">+0.3K</span></v-card-text>
			        </v-card>
			      </v-flex>
	      	</v-layout>
	      </v-flex>

	    </v-layout>

	    <v-tabs  dark>
	      <v-tab ripple> Followers </v-tab>
	      <v-tab ripple> Views </v-tab>
	      <v-tab-item>
	      	<v-card flat>
	          <v-card-text>followers chart</v-card-text>
	        </v-card>
	      </v-tab-item>
	      <v-tab-item>
	      	<v-card flat>
	          <v-card-text>views chart</v-card-text>
	        </v-card>
	      </v-tab-item>
	    </v-tabs>

  </v-container>
   </v-card>
</template>

<script>
import ChannelThumbnail from '@/components/ChannelThumbnail'

export default {
  name: 'MarketItem',
  components: {
  	ChannelThumbnail
  },
  props: {
  	// channel: Object
  },
  data() {
  	return {
			channel: {},
			username: ''
  	}
  },
  methods: {
		addToTeam() {
			// add to local storage
			this.$store.commit('addInventory', {
				channel: this.channel,
			});
		},
		removeFromTeam() {
			// remove from local storage
			this.$store.commit('removeInventory', {
				channel_name: this.channel.name
			});
		}
  },
  mounted() {
		// console.log("MarketItem", this.$route.params.channelId);
		this.channel = this.$route.params.channel;
		this.username = this.$route.params.username;
  }
}
</script>