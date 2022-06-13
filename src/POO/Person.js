export class Person {
	constructor({ name, CURP, lastName, adress, age, dateBirth, phone, email }) {
		this.name = name
		this.CURP = CURP
		this.lastName = lastName
		this.adress = adress
		this.age = age
		this.dateBirth = dateBirth
		this.phone = phone
		this.email = email
	}

	sayHi() {
		console.log(`Hola soy ${this.name} ${this.lastName}`)
	}

	static getCURP() {
		console.log('CURP: ' + this.CURP)
	}
}
