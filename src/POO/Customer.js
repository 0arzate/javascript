import { Person } from './Person.js'

export class Customer extends Person {
	constructor(name, CURP, lastName, adress, age, dateBirth, phone, email) {
		super(name, CURP, lastName, adress, age, dateBirth, phone, email)
	}

	toAdop() {}

	donate() {}
}
