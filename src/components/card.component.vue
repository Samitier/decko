<template>
  	<div
		class="card noselect"
		@contextmenu.prevent="onFlipCard"
		@mousedown.left="startMovement"
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
// 
	@Action dragCard: any
	@Action flipCard: any
	@Action rotateCard: any

	@Prop() card: Card

	get style() {
		let style = {
			transform: `rotateZ(${ this.card.rotation }deg) translateZ(${ this.card.coordinates.z }px)`,
			top: this.card.coordinates.y + "px",
			left: this.card.coordinates.x + "px",
			"box-shadow": "0 0 0 1px #00000038"
		}
		if (this.isMoving) {
			const zCoord = this.card.coordinates.z + 40
			style.transform = `rotateX(-8deg) translateZ(${ zCoord }px)`
			style["box-shadow"] = "0 0 13px 3px #00000038"
		}
		return style
	}

	mounted() {
		window.addEventListener('mousemove', this.move)
		window.addEventListener('mouseup', this.stopMovement)
	}

	beforeDestroy () {
		window.removeEventListener('mousemove', this.move)
		window.removeEventListener('mouseup', this.stopMovement)
	}

	onFlipCard() {
		this.flipCard(this.card.id)
	}

	startMovement(event: MouseEvent) {
		this.startx = event.clientX
		this.starty = event.clientY
		this.isMoving = true
	}

	stopMovement(event: MouseEvent) {
		if (!this.isMoving) return
		this.isMoving = false
		this.rotateCard(this.card.id)
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
	transition transform 0.3s, box-shadow 0.3s
.back
	margin .8em
	border-radius back_border_radius
	background-color #211b36
	background-image url("/img/textures/escheresque-dark.png")

</style>
