<template>
  	<div class="deck fullscreen">
			<button @click="onShuffle" type="button" name="button"> Shufle </button>
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import CardComponent from "@/components/card.component.vue"
import { Card } from "@/models/card.model"
import { FieldType } from "@/models/field-type.enum"

@Component({
	components: { "app-card": CardComponent }
})
export default class Deck extends Vue {
	@Getter cards: Function
  @Action shuffleCard: any

	get deckCards() { return this.cards(FieldType.Deck) }

	onShuffle() {
    this.deckCards.reduce((p, item) => {
      return p.then(()  => {
          return this.shuffle(item.id);
      });
    }, Promise.resolve())
  }

  shuffle(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.shuffleCard(id)
        resolve()
      },10)
    })
  }

}
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
