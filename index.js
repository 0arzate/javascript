import { peopleGenerator } from './src/js/peopleGenerator.js'

const osvaldo = peopleGenerator({
	email: 'osvarz.new@gmail.com',
	age: 24,
	phone: 5573771023,
})

osvaldo.name = ''

console.log(osvaldo.name)
