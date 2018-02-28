<template>
  	<div
		class="card noselect"
		@dblclick="onFlipCard"
		@mousedown="startMovement"
		:style="style"
	>
		<div class="face" v-if="card.isFacingUp">
			the face of the card
		</div>
		<div class="back fullscreen" v-else></div>
  	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Action } from "vuex-class"
import { Card } from "@/models/card.model"

@Component
export default class CardComponent extends Vue {

	private isMoving: boolean = false

	private startx: number = 0
	private starty: number = 0

	isFacingUp: boolean = false

	@Action('dragCard') dragCard: any
	@Action('flipCard') flipCard: any
	@Action('rotateCard') rotateCard: any

	@Prop() card: Card

	mounted() {
		window.addEventListener('mousemove', this.move)
		window.addEventListener('mouseup', this.stopMovement)
	}

	beforeDestroy () {
		window.removeEventListener('mousemove', this.move)
		window.removeEventListener('mouseup', this.stopMovement)
	}

	get style() {
		return {
			transform: `rotateX(${ this.isMoving ? 0 : 10 }deg ) ` 
				+ `rotateZ(${ this.isMoving ? 0 : this.card.rotation }deg) `
				+ `translateZ(${ this.isMoving ? 40 : 0 }px)`,
			top: this.card.coordinates.y + 'px',
			left: this.card.coordinates.x + 'px',
		}
	}

	onFlipCard() {
		this.flipCard(this.card.id)
		this.isFacingUp = !this.isFacingUp
	}

	startMovement(event: MouseEvent) {
		this.startx = event.clientX
		this.starty = event.clientY
		this.isMoving = true
	}

	stopMovement(event: MouseEvent) {
		if (!this.isMoving) return
		this.isMoving = false
		// this.card.rotation = Math.floor(Math.random() * 10) - 5
	}

	move(event: MouseEvent) {
		if (!this.isMoving) return
		const 	x = this.card.coordinates.x + (event.clientX - this.startx),
				    y = this.card.coordinates.y + (event.clientY - this.starty)
		this.startx = event.clientX
		this.starty = event.clientY
		this.dragCard({
			id: this.card.id,
			coordinates: { x, y }
		})
	}
}
</script>

<style lang="stylus" scoped>
card_width = 180px
card_height = card_width * 1.4
card_color = white
border_radius = 10px
back_border_radius = border_radius / 2
.card
	position absolute
	width card_width
	height card_height
	border 1px solid darken(white, 25)
	border-radius border_radius
	background-color card_color
	transition transform 0.3s
.back
	margin .8em
	border-radius back_border_radius
	background-color #211b36
	background-image url("/img/textures/escheresque-dark.png");
</style>
