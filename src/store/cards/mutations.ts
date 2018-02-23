import { MutationTree } from "vuex"
import { MOVE_CARD, FLIP_CARD } from "./constants"
import State from "./state"

const mutations = {
	[MOVE_CARD](state: State, data: any) {
		const i = state.cards.findIndex(c => c.id === data.id)
		state.cards[i].coordinates = data.coordinates
	},
	[FLIP_CARD](state: State, id: number) {
		const i = state.cards.findIndex(c => c.id === id)
		state.cards[i].isFacingUp = !state.cards[i].isFacingUp
	},
} as MutationTree<State>

export default mutations
