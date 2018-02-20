<template>
  	<div class="play fullscreen">
		This is the play area
		<router-link to="/">Deck</router-link> |
		<router-link to="/hand">Hand</router-link> 
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
	background-image url("https://www.transparenttextures.com/patterns/dark-stripes-light.png")
</style>
