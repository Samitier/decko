<template>
  	<div class="hand">
  		<app-card
  			v-for="card in handCards"
  			:card="card"
  			:key="card.id"
  		/>
		<div class="top row">
			<div class="col-xs-6 text-center">
				<router-link to="/">Deck</router-link>
			</div>
			<div class="col-xs-6 text-center">
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
export default class Hand extends Vue {

  	@Getter cards: Function
	get handCards() { return this.cards(FieldType.Hand) }
	
}
</script>
