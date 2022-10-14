export class Square {
	constructor({ side }) {
		this.side = side
	}

	get area() {
		return this.side * this.side
	}

	get perimeter() {
		return this.side * 4
	}
}
