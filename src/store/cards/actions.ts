import { ActionTree, ActionContext } from "vuex"
import { DRAG_CARD, FLIP_CARD, MOVE_CARD, SHUFFLE_CARD } from "./constants"
import State from "./state"

const actions = {
	dragCard(store: ActionContext<State, any>, data: any) {
		store.commit(DRAG_CARD, data)
	},
	flipCard(store: ActionContext<State, any>, id: number) {
		store.commit(FLIP_CARD, id)
	},
	moveCard(store: ActionContext<State, any>, data: any) {
		store.commit(MOVE_CARD, data)
	},
	shuffleCard(store: ActionContext<State, any>, id: number) {
		store.commit(SHUFFLE_CARD, id)
	},
} as ActionTree<State, any>

export default actions
