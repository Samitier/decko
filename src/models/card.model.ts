export interface Card {
	id: number,
	coordinates: {
		x: number,
		y: number,
	},
	isFacingUp: boolean,
	currentField: string
}

