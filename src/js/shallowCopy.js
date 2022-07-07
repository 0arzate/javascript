const original = {
	name: 'Osvaldo',
	lastName: 'Santiago',
	age: 24,
	birthday: '06/06/1998',
	bankAccount: {
		clave: '0000000000012345',
		bank: 'BBVA',
	},
}

// const copy = Object.create(original)

// copy.name = 'Jose'
// copy.bankAccount.bank = 'Banamex'
// original.lastName = 'Leon'

// console.log({ copy, original })

const stringCopy = JSON.stringify(original)
const newCopyObject = JSON.parse(stringCopy)

newCopyObject.name = 'Jose'
newCopyObject.bankAccount.bank = 'CITI Banamex'
original.lastName = 'Perez Leon'
original.bankAccount.clave = '0000000000067899'

console.log({ original, newCopyObject })
