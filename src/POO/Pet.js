class Pet {
	constructor(
		name,
		age,
		type,
		isAdopted = false,
		dateBirth,
		dateAdopted,
		deathCause,
		alive = true
	) {
		this.name = name
		this.age = age
		this.type = type
		this.isAdopted = isAdopted
		this.dateBirth = dateBirth
		this.dateAdopted = dateAdopted
		this.alive = alive
		this.deathCause = deathCause
	}

	changeAge(newAge) {
		this.age = newAge
	}

	changeName(newName) {
		this.name = newName
	}

	petDie(comment) {
		this.alive = false
		this.deathCause = comment
	}
}
