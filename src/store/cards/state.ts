import { Card } from "../../models/card.model"

export default class State {

	public cards: Card[]

	constructor() {
		this.cards = []
		this.getInitialCards()
	}

	private getInitialCards() {
		for (let i = 0; i < 10; i++) {
			const newCard: Card = {
				id: i,
				coordinates: {
					x: i + 100,
					y: i + 100,
				},
				rotation: 0,
				isFacingUp: false,
				currentField: "deck",
			}
			this.cards.push(newCard)
		}
	}
}
