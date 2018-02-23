import Vue from "vue"
import Vuex, { Store } from "vuex"

import State from "./state"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

const debug: boolean = process.env.NODE_ENV !== "production"

export const cards = {
	state: new State(),
	getters,
	mutations,
	actions,
}
