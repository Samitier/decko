import { ActionTree, ActionContext } from "vuex"
import { DRAG_CARD, FLIP_CARD, MOVE_CARD, ROTATE_CARD, SHUFFLE_CARD } from "./constants"
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
	rotateCard(store: ActionContext<State, any>, id: number) {
		store.commit(ROTATE_CARD, id)
	},
	shuffleCard(store: ActionContext<State, any>, data: any) {
		store.commit(SHUFFLE_CARD, data)
	},
} as ActionTree<State, any>

export default actions
