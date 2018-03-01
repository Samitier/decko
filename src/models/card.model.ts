import { FieldType } from "./field-type.enum"

export interface Card {
	id: number,
	coordinates: {
		x: number,
		y: number,
	},
	rotation: number,
	isFacingUp: boolean,
	currentField: FieldType
}
