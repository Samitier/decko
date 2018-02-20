<template>
  	<div class="hand">
		This is the hand
		<router-link to="/">Deck</router-link> |
		<router-link to="/play">Play</router-link> 
  	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Hand extends Vue {}
</script>
