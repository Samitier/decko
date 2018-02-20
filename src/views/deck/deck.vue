<template>
  	<div class="deck fullscreen">
    	This is the deck
		<router-link to="/hand">Hand</router-link> |
		<router-link to="/play">Play</router-link>
  	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Deck extends Vue {}
</script>

<style lang="stylus" scoped>
.deck
	background-color #1c5e59
	background-image url("https://www.transparenttextures.com/patterns/asfalt-dark.png")
</style>

