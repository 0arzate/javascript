import { PERCENTAGE_CONST } from './constants.js'

export class Percentage {
	constructor() {}

	static getPercentage({ percentage, value }) {
		return ((PERCENTAGE_CONST - percentage) * value) / PERCENTAGE_CONST
	}
}
