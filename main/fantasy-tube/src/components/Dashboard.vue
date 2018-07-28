
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

    <v-container grid-list-md fluid class="grey lighten-2">
      <h1>Quick Stats</h1>
      <v-layout row wrap justify-center>

        <v-flex shrink>
          <v-card class="grey darken-3 white--text">
            <v-card-text>
              Total Value
              <v-spacer></v-spacer> 
              <h1>$346 K</h1>
              <v-spacer></v-spacer>
              <span style="color:lightgreen;">+1.1K</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex shrink>
          <v-card class="grey darken-3 white--text">
            <v-card-text>
              Active team value
              <v-spacer></v-spacer> 
              <h1>$123K</h1>
              <v-spacer></v-spacer>
              <span style="color:lightgreen;">+0.5K</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex shrink>
          <v-card class="grey darken-3 white--text">
            <v-card-text>
              Cash on hand
              <v-spacer></v-spacer> 
              <h1>$346 K</h1>
              <v-spacer></v-spacer>
              <span style="color:lightgreen;">+1.1K</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex shrink>
          <v-card class="grey darken-3 white--text">
            <v-card-text>
              Average vm per day
              <v-spacer></v-spacer> 
              <h1>6.7M</h1>
              <v-spacer></v-spacer>
              <span style="color:lightgreen;">+0.2M</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex shrink>
          <v-card class="grey darken-3 white--text">
            <v-card-text>
              Streamers count
              <v-spacer></v-spacer> 
              <h1>22</h1>
              <v-spacer></v-spacer>
              <span style="color:grey;">0</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex shrink>
          <v-card class="grey darken-3 white--text">
            <v-card-text>
              Total owned followers
              <v-spacer></v-spacer> 
              <h1>1.2M</h1>
              <v-spacer></v-spacer>
              <span style="color:grey;">0</span>
            </v-card-text>
          </v-card>
        </v-flex>

        
      </v-layout>
    </v-container>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex >
          <v-card dark class="grey darken-3 white--text dark-clickable">
            <v-card-title primary-title>
              <h3 class="headline mb-0">Yesterday's Game</h3><v-spacer></v-spacer><h1 style="color:salmon;">LOSS</h1>
            </v-card-title>

            <v-layout row v-show="expandYesterday">
              <v-flex>
                <v-list subheader style="background:none;">
                  <v-subheader>Stats</v-subheader>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-container grid-list class="py-0 ">
                        <v-layout row justify-space-between>
                          <v-flex>Passive Earnings</v-flex><v-spacer></v-spacer><v-flex style="text-align:right;color:lightgreen;">+$1.5K</v-flex>
                        </v-layout>
                      </v-container>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-container grid-list class="py-0 ">
                        <v-layout row justify-space-between>
                          <v-flex>Game Cost</v-flex><v-spacer></v-spacer><v-flex style="text-align:right; color:salmon;">-$50K</v-flex>
                        </v-layout>
                      </v-container>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-container grid-list class="py-0">
                        <v-layout row justify-space-between>
                          <v-flex>Winnings</v-flex><v-spacer></v-spacer><v-flex style="text-align:right; color:grey;">$0</v-flex>
                        </v-layout>
                      </v-container>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-divider></v-divider>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-container grid-list class="py-0">
                        <v-layout row justify-space-between>
                          <v-flex>Total</v-flex><v-spacer></v-spacer><v-flex style="text-align:right; color:salmon;">-$49K</v-flex>
                        </v-layout>
                      </v-container>
                    </v-list-tile-content>
                  </v-list-tile>

                </v-list>
              </v-flex>
            </v-layout>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="expandYesterday = !expandYesterday">
                <v-icon>{{ expandYesterday ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="light-clickable">
            <v-card-title primary-title>
              <h3 class="headline mb-0">Today's Game</h3><v-spacer></v-spacer><h1>10:00:00</h1>
            </v-card-title>

            <v-container>
              <v-layout row wrap justify-center>
                <v-flex><h1>{{ username }}</h1></v-flex>
                <v-flex><h1>Opposition</h1></v-flex>
              </v-layout>
              <v-layout row wrap justify-space-between>
                <v-flex><h1>20 <small>Kvm</small></h1></v-flex>
                <v-flex><h1>100 <small>Kvm</small></h1></v-flex>
              </v-layout>

              <div class="grey lighten-2">
                <br/><br/>
                graph here
                <br/><br/><br/>
              </div>

              <v-layout row wrap>
                <v-flex ><h1>$150K Prize</h1></v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

    <router-link to="/team">
      <LineUp title="Tomorrow's Lineup" class="grey lighten-2" :channels="currentLineup"/>
      <v-container fluid class="light-clickable">
        <h3 class="display-1">MANAGE INVENTORY</h3>
      </v-container>
    </router-link>

    <router-link to="/market">
      <v-container fluid class="light-clickable">
        <h3 class="display-1">VIEW MARKET</h3>
      </v-container>
    </router-link>
  </div>
</template>

<script>

import LineUp from '@/components/LineUp.vue'

export default {
  name: 'Dashboard',
  components: {
    LineUp
  },
  data() {
    return {
      username: '',
      user_money: 73428243,
      user_ranking: 563,
      user_wins: 124,
      user_matches: 306,
      expandYesterday: false,
      currentLineup: [
        {name: 'test', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/69ead2c6-2e23-4ec3-bb9b-5a866c03cc21-profile_image-50x50.jpg', price: 239492},
        {name: 'other_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d4837db8-36a0-4949-b937-837bf5c79383-profile_image-50x50.png', price: 342983},
        {name: 'third_user', channel_logo_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbecd8c4-141c-422b-8285-e3f8cae79dbb-profile_image-50x50.jpg', price: 9849537},
        {name: 'scaredginger', channel_logo_url: 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-70x70.jpg', price: 9001},
        {name: 'etopiei', channel_logo_url: 'https://avatars1.githubusercontent.com/u/17671663?s=460&v=4', price: 9120803}
      ]
    }
  },
  mounted() {
    this.username = this.$store.state.username;
    if (this.$store.state.next_team != null && this.$store.state.next_team != undefined) {
      this.currentLineup = this.$store.state.next_team;
    }
  },
  methods: {
    gameView() {
      this.$router.push({ name: 'GameView', params: { username: this.username }})
    },
    tomorrowView() {
      this.$router.push({ name: 'TomorrowView', params: { username: this.username }})
    },
    marketView() {
      this.$router.push({ name: 'Market', parms: { username: this.username}})
    }
  },
}
</script>
