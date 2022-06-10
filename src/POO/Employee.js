import { Person } from './Person.js'

export class Employee extends Person {
	constructor({
		name,
		CURP,
		lastName,
		adress,
		age,
		dateBirth,
		phone,
		email,
		workplace,
	}) {
		super(name, CURP, lastName, adress, age, dateBirth, phone, email)
		this.workplace = workplace
	}

	generateAdoption() {}
}
