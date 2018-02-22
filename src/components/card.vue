<template>
  	<div 
		class="card noselect" 
		@dblclick="rotateCard"
		@mousedown="startMovement"
		:style="style"
	>
    	<div class="face" v-if="card.isFacingUp">
			the face of the card
		</div>
    	<div class="back" v-else>
			the back of the card
		</div>
  	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {Getter, Action} from 'vuex-class'

@Component({
	props: ['card']
})
export default class Card extends Vue {
	
	private isMoving: boolean = false
	private x: number = 0
	private y: number = 0

	private startx: number = 0
	private starty: number = 0
	
	isFacingUp: boolean = false

	@Action('moveCard') moveCard: any;
	@Action('flipCard') flipCard: any;

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
			top: this.card.coordinates.y + 'px',
			left: this.card.coordinates.x + 'px'
		}
	}

	rotateCard() {
		this.flipCard(this.card.id)
		this.isFacingUp = !this.isFacingUp
	}

	startMovement(event: MouseEvent) {
		this.startx = event.clientX
		this.starty = event.clientY
		this.isMoving = true
	}

	stopMovement(event: MouseEvent) {
		this.isMoving = false
	}

	move(event: MouseEvent) {
		if (!this.isMoving) return
		else 
			this.x = this.card.coordinates.x || 0
			this.y = this.card.coordinates.y || 0
			this.x += (event.clientX - this.startx)
			this.y += (event.clientY - this.starty)
			this.startx = event.clientX
			this.starty = event.clientY
			this.moveCard({
				id: this.card.id,
				coordinates: {
					x: this.x, 
					y: this.y
				}
			})
	}
}
</script>

<style lang="stylus" scoped>
card_width = 200px
card_height = 300px
card_color = white
border_radius = 4px

.card
	position absolute
	width card_width
	height card_height
	border 1px solid grey
	border-radius border_radius
	background-color card_color
</style>