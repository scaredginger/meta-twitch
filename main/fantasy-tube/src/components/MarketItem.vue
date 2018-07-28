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
		    		<v-btn @click="addToTeam()" large color="primary">Add to team</v-btn>
		    		<v-btn @click="removeFromTeam()" large color="orange">Sell</v-btn>
		    	</v-flex>
	      	</v-layout>

	      	<v-layout row>
	      		<v-flex>
			        <v-card xs2>
			          <v-card-text>Followers <v-spacer></v-spacer> {{channel.followers[29]}}<v-spacer></v-spacer><span v-bind:style="{ color: channel.newFollowers > 0 ? 'green' : 'red' }">{{channel.newFollowers}}</span> </v-card-text>
			        </v-card>
			      </v-flex>

			      <v-flex>
			        <v-card xs2>
			          <v-card-text>Value <v-spacer></v-spacer>{{channel.price[29]}} <v-spacer></v-spacer><span
			          	v-bind:style="{ color: channel.changePrice > 0 ? 'green' : 'red' }">{{channel.changePrice}}%</span></v-card-text>
			        </v-card>
			      </v-flex>

			      <v-flex>
			        <v-card xs2>
			          <v-card-text>Daily VMs (avg) <v-spacer></v-spacer>{{channel.avgvmscore}}<v-spacer></v-spacer><span v-bind:style="{ color: channel.dailyVMChange > 0 ? 'green' : 'red' }">{{channel.dailyVMChange}}%</span></v-card-text>
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
  		channel: {

  		}
  	}
  },
  watch: {
    '$route.params.channelId': function (channelId) {
      this.updateChannelData();
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
		},
  	updateChannelData: function () {
  		// console.log("MarketItem", this.$route.params.channelId);
	  	let k = this.$route.params.channelId;

	    const price = window.market.twitch[k]

	    const vmscore = window.market.vm[k]
	    const avgvmscore = Math.round(vmscore.reduce((a, b) => a + b, 0) / 30, 0);

	    const followers = window.market.followers[k].map(x => Math.round(x, 0));

	    const changePrice = Math.round(((price[29] - price[28]) / price[28]) * 1000 ) / 10;
	    const newFollowers = followers[29] - followers[28];

	    const prevavgvmscore = Math.round(vmscore.slice(0,29).reduce((a, b) => a + b, 0) / 29, 0);
	    const dailyVMChange = Math.round((avgvmscore - prevavgvmscore) / prevavgvmscore * 1000) / 10;

		this.channel = {
			name: this.$route.params.channelId,
			followers: followers,
			price: price.map(x => Math.round(x, 0)),
			changePrice: changePrice,
			newFollowers: newFollowers,
			vmscore: vmscore.map(x => Math.round(x, 0)),
			avgvmscore: avgvmscore,
			dailyVMChange: dailyVMChange
		}
		console.log(this.channel)
  	}
  },
  mounted() {
  	this.updateChannelData();
  	console.log("mounted item")
  }
}
</script>