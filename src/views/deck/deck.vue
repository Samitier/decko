<template>
	<div>
		<div class="deck-bkg fullscreen">
			<div class="fullscreen middle bkg-decoration"><h1>DECKO</h1></div>
		</div>
		<div class="deck fullscreen">
			<app-card
				v-for="card in deckCards"
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
import { FieldType } from "@/models/field-type.enum"

@Component({
	components: { "app-card": CardComponent }
})
export default class Deck extends Vue {

	@Getter cards: Function
	get deckCards() { return this.cards(FieldType.Deck) }
	 
}
</script>

<style lang="stylus" scoped>
bkg_color = #433d44
bkg_decoration_color = darken(bkg_color, 7)
.deck-bkg 
	background-color bkg_color
	background-image url("/img/textures/dark-stripes-light.png")
.bkg-decoration
	opacity 0.6
	margin 1.5rem
	border 8px solid bkg_color
	>h1
		color bkg_color
		margin auto
		font-size 26vw
	
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
