<style lang="scss" scoped>
	.thumbnail {
		position:relative;
		overflow:hidden;
		width: 150px;
		height: 150px;
		background:white;
		user-select: none;
		cursor: pointer;
		float:left;
		margin: 5px 20px;

		transition: box-shadow 0.5s;

		.thumb {
			position:relative;
			z-index:1;
			width: 80px;
			height:80px;
			margin: 20px 35px 8px 35px;
			border-radius: 80px;
			float:left;
			box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.2);
		}

		.name {
			position:relative;
			z-index:1;
			height:42px;
			width:100%;
			text-align:center;
			float:left;
			word-wrap:break-word;
			padding: 0px 10px;
		}

		.spotlight {
			background: rgba(240, 240, 240, 0.3);
			width: 100px;
			height: 300px;
			z-index: 0;
			position: absolute;
			bottom: -100px;
			left: 25px;
			border-top-left-radius: 150px !important;
			border-top-right-radius: 150px !important;
			-webkit-box-shadow: 0px 0px 10px 2px #f3caa7;
			box-shadow: 0px 0px 10px 2px #d8d8d8 inset;
			opacity: 1;

			transition: background 0.3s, box-shadow 0.3s;
			transform: rotateX(70deg)
		}

		.spotlight.active {
			background: rgba(216, 150, 250, 0.3);
			box-shadow: 0px 0px 10px 2px #d4b6ff inset;
		}

		.spotlight.preview {
			display:none;
		}
	}

	.thumbnail:hover {
		// box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.4);
		background: rgba(240, 240, 240, 1);
	}

</style>

<template>
	<v-card class="thumbnail">
		<div class="spotlight" v-bind:class="{ active: active, preview: preview }"></div>
		<img class="thumb" :src='channel.channel_logo_url'>
		<span class="name">{{channel.name}}</span>
	</v-card>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'ChannelThumbnail',
  components: {
  	draggable
  },
  props: {
  	active: Boolean,
  	preview: Boolean,
  	channel: Object
  },
  methods: {
  	onDragStart: function (event) {
  		event.dataTransfer.setData("text/plain", event.target.id);
  		event.dataTransfer.dropEffect = "move";
  		console.log("dragstart")
  	}
  },
  mounted() {
  	console.log('mounted')
  }
}
</script>