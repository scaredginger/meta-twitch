<template>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
        <div class="container">
			<div id="player_list">
				<div class="a_title">
					<h2> My Streamers </h2>
				</div>
					<draggable :model="market_data" id="player_list_el" class="list-group" :options="{group:'people'}">
                        <li v-for="channels in market_data" :key="channels.name">
                            <img class="channel_logo" :src='channels.channel_logo_url'>
                            {{ channels.name }}
                            <span class="price"> {{ formatMoney(channels.price) }} </span>
                        </li>
					</draggable>
			</div>
			<div id="team_list">
				<div class="a_title team_title">
					<h2> Active Team </h2>
				</div>
				<draggable :model="player_team" id="team_list_el" class="list-group" :options="{group:'people'}">
				</draggable>
                <li v-for="channels in player_team" :key="channels.name">
                    <img class="channel_logo" :src='channels.channel_logo_url'>
                        {{ channels.name }}
                    <span class="price"> ${{ channels.price }} </span>
                </li>
			</div>
		</div>
        <button :class="getSubmitClass()"> Submit My Match Team </button>
    </div>
</template>

<script>

import draggable from 'vuedraggable'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

export default {
  name: 'TeamBuild',
  components: {
      draggable
  },
  data () {
    return {
      market_data: [
          {
            name: 'MKBHD',
            channel_logo_url: 'https://lh3.googleusercontent.com/a-/ACSszfGZoERWK5GeO053zzNJOZZaKrMjTaqrPIj5Dg=s176-c-k-c0x00ffffff-no-rj-mo', 
            price: 2098563
          }, {
              name: 'The Slo Mo Guys',
              channel_logo_url: 'https://lh3.googleusercontent.com/a-/ACSszfFNsz9My-c_EOzCS1W9DaVTUrN0HpmtJ1hcRQ=s176-c-k-c0x00ffffff-no-rj-mo',
              price: 582390
          }, {
              name: 'Casually Explained',
              channel_logo_url: 'https://lh3.googleusercontent.com/a-/ACSszfHXxQy8LtjoqOlVWlLVHdv_G-fK50lC1dWqUA=s176-c-k-c0x00ffffff-no-rj-mo',
              price: 382098
          }, {
              name: 'Internet Historian',
              channel_logo_url: 'https://lh3.googleusercontent.com/a-/ACSszfE0C5KFRaoB5XSXG3VC0qYs4j3D87FB22neyA=s176-c-k-c0x00ffffff-no-rj-mo',
              price: 97854
          },
      ],
      player_team: [],
      total_budget: 5000000,
      total_team_price: 0,
      submit_ready: false,
    }
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
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100%;
    display: flex;    
    padding: 0;
}
#player_list {
    flex-grow: 2;
    height: 90%;
    text-align: center;
}
#team_list {
    flex-grow: 2;
    height: 90%;
    text-align: center;
}
#player_list_el {
    min-height: 200px;
}
#team_list_el {
    min-height: 200px;
}
.a_title {
    background-color:#ec6666;
    color: white;
    font-size: 1.4rem;
    padding-top: 16px;
    padding-bottom: 16px;
}
.team_title {
    background-color: #4690ad;
}
ul {
    margin: 0;
    border: 0 solid silver;
    border-width: 0 0 1px 1px;
    list-style-type: none;
}
li {
    padding: 20px;
    border: 0 solid silver;
    border-width: 1px 1px 1px 1px;
    list-style: none;
}
li:hover {
	cursor: move;
}
.channel_logo {
	height: 60px;	
	border-radius: 50%;
}
.price {
    color: green;
    float: right;
    line-height: 60px;
}
.submit_button {
    background-color: #4690ad;
    border-radius: 8px;
    color: white;
    width: 80%;
    padding: 20px;
    margin-top: 2%;
}
.submit_button_cancel {
    background-color: #d0d1d2;
    color: black;
    border-radius: 8px;
    width: 80%;
    padding: 20px;
    margin-top: 2%;
}
.submit_button_cancel:hover {
    cursor: default;
}
</style>
