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
		    		<v-btn @click="addToTeam()" v-if="!inTeam" large color="primary">Add to team</v-btn>
		    		<v-btn @click="removeFromTeam()" v-if="inTeam" large color="orange">Sell</v-btn>
		    	</v-flex>
	      	</v-layout>

	      	<v-layout row>
	      		<v-flex>
			        <v-card xs2>
			          <v-card-text>Followers <v-spacer></v-spacer> {{channel.followers ? channel.followers[29] : 0}}<v-spacer></v-spacer><span v-bind:style="{ color: channel.newFollowers > 0 ? 'green' : 'red' }">{{channel.newFollowers}}</span> </v-card-text>
			        </v-card>
			      </v-flex>

			      <v-flex>
			        <v-card xs2>
			          <v-card-text>Value <v-spacer></v-spacer>{{channel.price ? channel.price[29] : 0}} <v-spacer></v-spacer><span
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
	      <v-tab ripple> Market Price </v-tab>
	      <v-tab ripple> Daily Followers </v-tab>
	      <v-tab ripple> Daily View Minutes  </v-tab>
	      <v-tab-item>
	      	<v-card flat>
	          <canvas ref="priceChart" width="400" height="200"></canvas>
	        </v-card>
	      </v-tab-item>
	      <v-tab-item>
	      	<v-card flat>
	          <canvas ref="followersChart" width="400" height="200"></canvas>
	        </v-card>
	      </v-tab-item>
	      <v-tab-item>
	      	<v-card flat>
	          <canvas ref="vmChart" width="400" height="200"></canvas>
	        </v-card>
	      </v-tab-item>
	    </v-tabs>

  </v-container>
	   <router-link to="/team">
	 	<div class="backToTeam">
			 Go Back To Team
		</div>
	 </router-link>
   </v-card>
	 
</template>

<script>
import ChannelThumbnail from '@/components/ChannelThumbnail'
import Chart from 'chart.js';

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

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

  		},
  		vmChart: null,
  		follChart: null,
			priceChart: null,
			inTeam: false
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
			this.inTeam = true;
		},
		removeFromTeam() {
			// remove from local storage
			this.$store.commit('removeInventory', {
				channel_name: this.channel.name
			});
			this.inTeam = false;
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

		if (this.follChart && this.vmChart && this.priceChart) {
			this.follChart.config.data.datasets[0].data = this.channel.followers;
			this.vmChart.config.data.datasets[0].data = this.channel.vmscore;
			this.priceChart.config.data.datasets[0].data = this.channel.price;
			this.follChart.update();
			this.vmChart.update();
			this.priceChart.update();
		}
  	},
  	drawGraphs() {
  		let labels = []
	  	for (var i = 30; i > 0; i--) {
	  		const now = new Date();
	  		now.setDate(now.getDate() - i);
	  		// labels.push(now.getDate() + "/" + now.getMonth());
	  		labels.push(days[now.getDay()]);
	  	}

	  	let vmCtx = this.$refs.vmChart;
		this.vmChart = new Chart(vmCtx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [ 
				{
					data: this.channel.vmscore,
					label: "Total View Minutes",
					borderColor: "#8e5ea2",
					steppedLine: true
				}
				]
			},
			options: {

			}
		});

		let follCtx = this.$refs.followersChart;
		this.follChart = new Chart(follCtx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [ 
				{
					data: this.channel.followers,
					label: "Followers",
					borderColor: "#247acc",
					steppedLine: true
				}
				]
			},
			options: {

			}
		});

		let priceCtx = this.$refs.priceChart;
		this.priceChart = new Chart(priceCtx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [ 
				{
					data: this.channel.price,
					label: "Market Price",
					borderColor: "#247acc",
					steppedLine: true
				}
				]
			},
			options: {

			}
		});
  	}
  },
  mounted() {

		const data = this.$store.getters.inventory;
		for(let i = 0; i < data.length; i += 1) {
			if (data[i]['name'] == this.channel.name) {
				this.inTeam = true;
			}
		}

  	this.updateChannelData();

  	this.drawGraphs();

  	console.log(this.vmChart.config.data.datasets[0].data)
  },
  render() {
  	console.log("render", document.getElementById("vmChart"))
	},

			
}
</script>
<style scoped>
.backToTeam {
	width: 100%;
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  color: black;
}
</style>