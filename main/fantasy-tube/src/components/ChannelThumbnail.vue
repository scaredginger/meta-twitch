<style scoped lang="scss">
	#root {
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
			background: rgba(162, 162, 162, 0.3);
			width: 150px;
			height: 180px;
			z-index: 0;
			position: absolute;
			bottom: 0px;
			left: auto;
			border-top-left-radius: 150px;
			border-top-right-radius: 150px;
			-webkit-box-shadow: 0px 0px 10px 2px #f3caa7;
			box-shadow: 0px 0px 10px 2px #aaa inset;
			opacity: 1;

			transition: background 0.3s, box-shadow 0.3s;
			transform: rotateY(50deg);
		}

		.spotlight.active {
			background: rgba(255, 198, 0, 0.3);
			box-shadow: 0px 0px 10px 2px #ffd196 inset;
		}
	}



	#root:hover {
		// box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.4);
		.spotlight {
			background: rgba(255, 255, 255, 0.3);
			box-shadow: 0px 0px 10px 2px #d8d8d8 inset;
		}
	}



</style>

<template>
	<v-card id="root">
		<div class="spotlight" v-bind:class="{ active: active }"></div>
		<img class="thumb" :src='channel.channel_logo_url'>
		<span class="name">{{channel.name}}</span>
	</v-card>
</template>

<script>
export default {
  name: 'ChannelThumbnail',
  props: {
  	active: Boolean,
  	channel: Object
  }
}
</script>