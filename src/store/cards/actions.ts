import { ActionTree, ActionContext } from "vuex"
import { MOVE_CARD, FLIP_CARD } from "./constants"
import State from "./state"

const actions = {
	moveCard(store: ActionContext<State, any>, data: any) {
		store.commit(MOVE_CARD, data)
	},
	flipCard(store: ActionContext<State, any>, id: number) {
		store.commit(FLIP_CARD, id)
	},
} as ActionTree<State, any>

export default actions
