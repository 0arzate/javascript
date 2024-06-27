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

    delete this.data[0]
		this.length--
		console.log({ data: this.data })
		for (let index = 0; index <= this.length; index++) {
			const currentValue = index + 1
			this.data[index] = this.data[currentValue]
		}
  }
}

const myArray = new CustomArray()

myArray.unshift("!!!")
myArray.unshift("Platzinauta")
myArray.unshift("lograste")
myArray.unshift("lo")
console.log(myArray)