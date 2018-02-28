<template>
  	<div class="play fullscreen">
      <app-card
        v-for="card in playCards"
        :card="card"
        :key="card.id"
      />
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
import { Getter } from 'vuex-class'
import CardComponent from "@/components/card.component.vue"
import { Card } from "@/models/card.model"
import { FieldType } from "@/models/field-type.enum"

@Component({
	components: { "app-card": CardComponent }
})
export default class Play extends Vue {

	@Getter cards: Function
	get playCards() { return this.cards(FieldType.Play) }
	
}
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
