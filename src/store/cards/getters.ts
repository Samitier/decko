import { GetterTree } from "vuex"
import State from "./state"
import { FieldType } from "@/models/field-type.enum"

const getters = {
	cards: (state: State) => ((field: FieldType) =>
		state.cards.filter(card => card.currentField === field)
	),
	card: (state: State) => ((id: number) =>
		state.cards.find(card => card.id === id)
	),
} as GetterTree<State, any>

export default getters
