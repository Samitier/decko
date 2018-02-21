import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"

export class State {
    coordinates: any = {
        x: 0,
        y: 0
    }
}

const getters = <GetterTree<State, any>> {
    coordinates(state: State): any {
        return state.coordinates
    }
};

const mutations = <MutationTree<State>> {
    moveCard(state: State, coordinates: any) {
        state.coordinates = coordinates
    }
};

const actions = <ActionTree<State, any>> {
    moveCard(store: ActionContext<State, any>, coordinates: any) {
        store.commit('moveCard', coordinates)
    }
};

export const card = {
    state: new State(),
    getters: getters,
    mutations: mutations,
    actions: actions
};