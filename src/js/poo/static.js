const osvaldo = {
	_name: 'Osvaldo',
	lastName: 'Arzate',
	age: 24,
	birthday: '06/06/1998',
	ageIncrest() {
		this.age++
	},
}

Object.defineProperties(osvaldo, 'name', {
	get() {
		return this._name
	},
	set(newName) {
		this._name = newName
	},
})

console.log(osvaldo.name)
