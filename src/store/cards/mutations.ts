import { MutationTree } from "vuex"
import { DRAG_CARD, FLIP_CARD, MOVE_CARD, SHUFFLE_CARD, ROTATE_CARD } from "./constants"
import State from "./state"

const mutations = {
	[DRAG_CARD](state: State, data: any) {
		const card = state.cards.find(c => c.id === data.id)
		if (!card) return
		let maxZ = 0
		for (const { coordinates } of state.cards) {
			if (maxZ < coordinates.z) maxZ = coordinates.z
			if (coordinates.z > card.coordinates.z) coordinates.z--
		}
		const { x, y } = data.coordinates
		card.coordinates = { x, y, z: maxZ }
	},
	[FLIP_CARD](state: State, id: number) {
		const i = state.cards.findIndex(c => c.id === id)
		state.cards[i].isFacingUp = !state.cards[i].isFacingUp
	},
	[MOVE_CARD](state: State, data: any) {
		const i = state.cards.findIndex(c => c.id === data.id)
		state.cards[i].currentField = data.field
	},
	[SHUFFLE_CARD](state: State, data: any) {
		const i = state.cards.findIndex(c => c.id === data.id)
		state.cards[i].shuffle = {
			isShuffling: true,
			direction: data.direction,
		}
	}
	[ROTATE_CARD](state: State, id: number) {
		const i = state.cards.findIndex(c => c.id === id)
		state.cards[i].rotation = Math.floor(Math.random() * 10) - 5
	},
} as MutationTree<State>

export default mutations
