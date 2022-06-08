class dog {
	constructor(name, color) {
		this.name = name
		this.color = color
	}

	speak() {
		console.log(`${this.name} says woof`)
	}
}

const kuma = new dog('kuma', 'gray')

console.log(kuma)
