import { FieldType } from "./field-type.enum"

export interface Card {
	id: number,
	coordinates: {
		x: number,
		y: number,
		z: number,
	},
	content: string,
	rotation: number,
	isFacingUp: boolean,
	shuffle: any,
	currentField: FieldType
}
