export class Triangle {
	constructor({ side, base }) {
		this.side = side
		this.base = base
	}

	get perimeter() {
		return this.side * 3 + this.base
	}
}
