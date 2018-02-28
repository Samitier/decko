import { MutationTree } from "vuex"
import { DRAG_CARD, FLIP_CARD, MOVE_CARD, ROTATE_CARD } from "./constants"
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
	[ROTATE_CARD](state: State, id: number) {
		const i = state.cards.findIndex(c => c.id === id)
		state.cards[i].rotation = Math.floor(Math.random() * 5) - 5
	},
} as MutationTree<State>

export default mutations
