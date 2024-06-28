class CustomArray {
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

	pop(index) {
		delete this.data[this.length]
	}

	unshift(newItem) {
		if(!newItem) {
			return this.length
		}

		for(let i = this.length; i > 0; i--) {
			const currentValue = this.data[i - 1]
			const newIndex = i

			this.data[newIndex] = currentValue
		}

		this.data[0] = newItem
		this.length++
		return this.length
	}

	shift(){
		if(this.length === 0) {
			return undefined
		}

		const firstElement = this.data[0]

		for(let i = 0; i < this.length; i++) {
			const currentValue = this.data[i + 1]
			const newIndex = i

			this.data[newIndex] = currentValue
		}

		delete this.data[this.length - 1]
		this.length--

		return firstElement
  }
}

const myArray = new CustomArray()

myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")
myArray.unshift("Nuevo")

myArray.shift()
console.log(myArray)