<template>
  	<div class="deck fullscreen">
    	<card/>
		<div class="bottom text-center">
			<router-link to="/hand">Hand</router-link>
		</div>
		<div class="right middle">
			<router-link to="/play">Play</router-link>
		</div>
  	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from "@/components/card.vue"

@Component({
	components: { Card }
})
export default class Deck extends Vue {}
</script>

<style lang="stylus" scoped>
.deck
	background-color #1c5e59
	background-image url("/img/textures/asfalt-dark.png")
.bottom, .right
	position absolute
	bottom 0
	right 0
.bottom
	left 0
.right
	top 0 
</style>

