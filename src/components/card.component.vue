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
    	<div class="back" v-else>
			the back of the card
		</div>
  	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator"
import { Action } from "vuex-class"
import { Card } from "@/models/card.model"

@Component
export default class CardComponent extends Vue {

	private isMoving: boolean = false

	private startx: number = 0
	private starty: number = 0

	isFacingUp: boolean = false

	@Action dragCard: any
	@Action flipCard: any

	@Prop() card: Card
  @Prop() shuffle: boolean

  translate: number = 0
  zIndex: number = 0

  @Watch('shuffle')
  onShuffle() {
    const multiplier =  this.card.id % 2 === 0 ? 1 : -1
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.translate = 120 * multiplier
        res()
      }, 400)
    })
    .then(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          this.zIndex = this.card.id % 2 === 0 ? this.card.id - 1 : this.card.id +1
          res()
        }, 400)
      })
    })
    .then(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          this.translate = 0
          res()
        }, 400)
      })
    })
  }

	get style() {
		return {
			top: this.card.coordinates.y + 'px',
			left: this.card.coordinates.x + 'px',
      transform: `translate(${this.translate}px)`,
      'z-index': this.zIndex
		}
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
	transition-property transform
	transition-duration 1s, 1s

</style>
