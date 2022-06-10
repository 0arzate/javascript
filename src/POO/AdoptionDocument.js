class AdoptionDocument {
	constructor({
		dateAdoption,
		workplaceId,
		employeeId,
		petId,
		custumerId,
		donationId,
	}) {
		this.dateAdoption = dateAdoption
		this.workplaceId = workplaceId
		this.employee = employeeId
		this.petId = petId
		this.custumerId = custumerId
		this.donationId = donationId
	}

	generateDocument() {}
}
