import { FieldType } from "./field-type.enum"

export interface Card {
	id: number,
	coordinates: {
		x: number,
		y: number,
	},
	isFacingUp: boolean,
	isShuffling: boolean,
	currentField: FieldType
}
