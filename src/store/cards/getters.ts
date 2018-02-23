import { GetterTree } from "vuex"
import State from './state'

const getters = <GetterTree<State, any>> {
    cards(state: State): any {
        return state.cards
    },
    card: (state: State) => ((id: number) => 
        state.cards.find(card => card.id === id)
    ),
}

export default getters
