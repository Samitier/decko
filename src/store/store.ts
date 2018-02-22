import Vue from "vue"
import Vuex from "vuex"
import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"
import { cards } from './cards/index'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        cards,
    },
    strict: debug
})
