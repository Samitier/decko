<template>
  	<div class="play fullscreen">
		This is the play area
		<div class="left middle">
			<router-link to="/">Deck</router-link>
		</div>
		<div class="bottom text-center">
			<router-link to="/hand">Hand</router-link>
		</div>
  	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Play extends Vue {}
</script>

<style lang="stylus" scoped>
.play
	background-color #1e6654
	background-image url("/img/textures/dark-stripes-light.png")
.bottom, .left
	position absolute
	bottom 0
	left 0
.bottom
	right: 0
.left
	top: 0
</style>
