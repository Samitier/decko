import { Card } from "../../models/card.model"
import { FieldType } from "@/models/field-type.enum"

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
					x: i + 500,
					y: i + 200,
				},
				isFacingUp: false,
				currentField: FieldType.Deck,
			}
			this.cards.push(newCard)
		}
	}
}
