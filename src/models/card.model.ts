export interface Card {
	id: number,
	coordinates: {
		x: number,
		y: number,
	},
	rotation: number,
	isFacingUp: boolean,
	currentField: string
}
