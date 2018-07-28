<style scoped>

</style>

<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{title}}</h3>
    </v-card-title>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

          <draggable element="v-layout" v-model="channels" :options="{group:'.item'}">

              <v-flex v-for="x in channels" :key="x.name">
                <ChannelThumbnail :channel="x" :active="true"></ChannelThumbnail>
              </v-flex>

          </draggable>

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