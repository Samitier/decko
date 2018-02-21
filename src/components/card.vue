<template>
  	<div 
		class="card noselect" 
		@dblclick="rotateCard"
		@mousedown="startMovement"
		:style="style"
	>
    	<div class="face" v-if="isFacingUp">
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

@Component
export default class Card extends Vue {
	
	private isMoving: boolean = false
	private x: number = 0
	private y: number = 0

	private startx: number = 0
	private starty: number = 0
	
	isFacingUp: boolean = false

	@Getter coordinates: any;
	@Action('moveCard') moveCard: any;

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
			top: this.coordinates.y + 'px',
			left: this.coordinates.x + 'px'
		}
	}

	rotateCard() {
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
			this.x = this.coordinates.x || 0
			this.y = this.coordinates.y || 0
			this.x += (event.clientX - this.startx)
			this.y += (event.clientY - this.starty)
			this.startx = event.clientX
			this.starty = event.clientY
			this.moveCard({x: this.x, y: this.y})
		
		 
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
	border-radius border_radius
	background-color card_color
</style>