import { Card } from "../../models/card.model"
import { FieldType } from "@/models/field-type.enum"

const cardsContent = [
	"🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾",
	"🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮",
	"🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎",
	"🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞",
]
export default class State {

	public cards: Card[]

	constructor() {
		this.cards = []
		this.getInitialCards()
	}

	private getInitialCards() {
		for (let i = 56; i > 0; i--) {
			const newCard: Card = {
				id: i,
				coordinates: {
					x: i/1.5 + 200,
					y: i/1.5 + 200,
				},
				content: cardsContent[i],
				rotation: 0,
				isFacingUp: false,
				shuffle: {
					isShuffling: false,
					direction: 1,
				},
				currentField: FieldType.Deck,
			}
			this.cards.push(newCard)
		}
	}
}
