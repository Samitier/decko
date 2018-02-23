import { GetterTree } from "vuex"
import State from "./state"

const getters = {
	cards(state: State): any {
		return state.cards
	},
	card: (state: State) => ((id: number) =>
		state.cards.find(card => card.id === id)
	),
} as GetterTree<State, any>

export default getters
