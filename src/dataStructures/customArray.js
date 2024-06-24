export class CustomArray {
	constructor() {
		this.length = 0
		this.data = {}
	}

	get(index) {
		return this.data[index]
	}

	set(newItem) {
		this.data[this.length] = newItem
		this.length++
		return this.length
	}
}