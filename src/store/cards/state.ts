import { CardModel } from '../../models/CardModel'

export default class State {
	public cards: CardModel[];

	constructor() {
		this.cards = []
		this.getInitialCards()
	}

	getInitialCards() {
		for (let i = 0; i < 10; i++) {
			let newCard: CardModel = {
				id: i,
				coordinates: {
				    x: i+10,
				    y: i+10
				},
				isFacingUp: false
			}
			this.cards.push(newCard)
		}
	}

}