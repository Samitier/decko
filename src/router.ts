import Vue from "vue"
import Router from "vue-router"
import Deck from "./views/deck/deck.vue"
import Hand from "./views/hand/hand.vue"
import Play from "./views/play/play.vue"

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "deck",
			component: Deck,
		},
		{
			path: "/hand",
			name: "hand",
			component: Hand,
		},
		{
			path: "/play",
			name: "play",
			component: Play,
		},
	],
})
