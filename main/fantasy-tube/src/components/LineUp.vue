<style scoped>
  .thumbnail {
    margin:20px;
  }
</style>

<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{title}}</h3>
    </v-card-title>

    <v-container grid-list-md text-xs-center>
      <v-layout row style="position:relative;">

          <draggable 
          style="min-width:100px; min-height:100px;"
          element="v-layout" wrap justify-center v-model="channels" :options="{group:'.item'}" v-if="editable">

              <ChannelThumbnail :channel="x" :active="true" v-for="x in channels" :key="x.name"></ChannelThumbnail>

          </draggable>

          <v-flex v-for="x in channels" :key="x.name" v-if="!editable">
            <ChannelThumbnail :channel="x" :active="true"></ChannelThumbnail>
          </v-flex>


          <h1 style="text-align:center;position:absolute;bottom:10px;left:0px;width:100%;" v-if="channels.length === 0">
            Drag players into your team from your inventory
          </h1>
          

      </v-layout>
    </v-container>

    <v-card-actions v-if="!editable">
      <v-spacer></v-spacer>
      <router-link to="/team"
        <v-btn icon>
          <v-icon>edit</v-icon>
        </v-btn>
      </router-link>
    </v-card-actions>

  </v-card>
</template>

<script>
import ChannelThumbnail from '@/components/ChannelThumbnail'
import draggable from 'vuedraggable'

export default {
  name: 'LineUp',
  components: {
    ChannelThumbnail,
    draggable
  },
  props: {
    channels: Array,
    title: String,
    editable: Boolean
  },
  data() {
    return {

    }
  },
  mounted() {

  },
}
</script>