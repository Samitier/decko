<template>
	<div>
		<div class="deck-bkg fullscreen"></div>
		<div class="deck fullscreen">
			<app-card
				v-for="card in cards('deck')"
				:card="card"
				:key="card.id"
			/>
			<div class="bottom text-center">
				<router-link to="/hand">Hand</router-link>
			</div>
			<div class="right middle">
				<router-link to="/play">Play</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import CardComponent from "@/components/card.component.vue"
import { Card } from "@/models/card.model"

@Component({
	components: { "app-card": CardComponent }
})
export default class Deck extends Vue {
  @Getter cards: Card[]
}
</script>

<style lang="stylus" scoped>
.deck-bkg 
	background-color #564E58
.deck
	perspective 450px
	transform-style preserve-3d
.bottom, .right
	position absolute
	bottom 0
	right 0
.bottom
	left 0
.right
	top 0
</style>
