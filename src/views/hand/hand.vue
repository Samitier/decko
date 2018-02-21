<template>
  	<div class="hand">
		This is the hand
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

@Component
export default class Hand extends Vue {}
</script>
