import { GetterTree } from "vuex"
import State from "./state"

const getters = {
	cards: (state: State) => ((field: string) =>
		state.cards.filter(card => card.currentField === field)
	),
	card: (state: State) => ((id: number) =>
		state.cards.find(card => card.id === id)
	),
} as GetterTree<State, any>

export default getters
