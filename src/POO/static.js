const osvaldo = {
	name: 'Osvaldo',
	lastName: 'Arzate',
	age: 24,
	birthday: '06/06/1998',
	ageIncrest() {
		this.age++
	},
}

console.log(Object.getOwnPropertyDescriptors(osvaldo))
