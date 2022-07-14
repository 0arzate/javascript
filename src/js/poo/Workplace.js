class Workplace {
	constructor({
		name,
		adress,
		manager,
		employeesAmount,
		petsAmount,
		adoptionsAmount,
	}) {
		this.name = name
		this.adress = adress
		this.manager = manager
		this.employeesAmount = employeesAmount
		this.petsAmount = petsAmount
		this.adoptionsAmount = adoptionsAmount
	}

	hireEmployee(employee) {}

	demissionEmployee(employeeId) {}

	addPet(pet) {}

	changeManager(newManagerId) {
		this.manager = newManagerId
	}
}
