import { MutationTree } from "vuex"
import { DRAG_CARD, FLIP_CARD, MOVE_CARD, SHUFFLE_CARD } from "./constants"
import State from "./state"

const mutations = {
	[DRAG_CARD](state: State, data: any) {
		const i = state.cards.findIndex(c => c.id === data.id)
		state.cards[i].coordinates = data.coordinates
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
			direction: data.direction
		}
	},
} as MutationTree<State>

export default mutations
