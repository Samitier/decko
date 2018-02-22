import { MutationTree } from "vuex"
import { MOVE_CARD, FLIP_CARD } from './constants'
import State from './state'

const mutations = <MutationTree<State>> {
    [MOVE_CARD](state: State, data: any) {
        let i = state.cards.findIndex(c => c.id === data.id)
        state.cards[i].coordinates = data.coordinates
    },
    [FLIP_CARD](state: State, id: number) {
        let i = state.cards.findIndex(c => c.id === id)
        state.cards[i].isFacingUp = !state.cards[i].isFacingUp
    }
}

export default mutations