import Vue from "vue"
import Vuex from "vuex"
import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"
import { card } from './card'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        card,
    },
    strict: debug
})
