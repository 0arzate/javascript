import { Person } from './src/POO/Person.js'

const osvaldo = new Person({
	name: 'Osvaldo',
	CURP: 'AASO980606HDFRNS05',
	lastName: 'Arzate',
	adress: 'Pascle 183',
	age: '18',
	dateBirth: '06/06/2021',
	phone: '5573771023',
	email: 'osvarz.new@gmail.com',
	workplace: '001',
})

console.log(Person.getCURP())
