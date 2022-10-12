const FULL_AGE = 18

const name = 'Osvaldo'
const lastName = 'Arzate Santiago'
const age = 24
const usernamePlatzi = 'osvaldo.arzate'
const email = 'osvarz.new@gmail.com'
const isOlder = age >= FULL_AGE
const savedMoney = 5000
const debts = 2000

const fullName = `${name} ${lastName}`
const totalMoney = savedMoney - debts

function getFullName({ name, lastName, nickname }) {
	console.log(
		`Mi nombre completo es ${name} ${lastName}, prefiero que me digas ${nickname}`
	)
}

// getFullName({ name: 'Jose', lastName: 'Perez Leon', nickname: 'Pepe' })

const userSubscriptionType = 'Expert'

const subscriptionTypes = [
	{
		subscriptionType: 'Free',
		message: 'Solo puedes tomar los cursos gratis',
	},
	{
		subscriptionType: 'Basic',
		message: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
	},
	{
		subscriptionType: 'Expert',
		message:
			'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un mes',
	},
	{
		subscriptionType: 'ExpertPlus',
		message:
			'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un mes y tendrás acceso a los mejores EXPERTOS de cada industria',
	},
]

const getFirstElementToArray = (array) => {
	console.log(array[0])
	return array[0]
}

const getAllElementsToArray = (array) => {
	array.forEach((element) => {
		console.log(element)
	})
}

const getAllElementsToObject = (object) => {
	for (const key in object) {
		console.log(`${key}: ${object[key]}`)
	}
}

getAllElementsToObject(subscriptionTypes[0])

/* subscriptionTypes.forEach((subscriptionType) => {
	if (subscriptionType.subscriptionType === userSubscriptionType) {
		console.log(subscriptionType.message)
	}
}) */

/* if (subscriptionType === 'Basic') {
	console.log('Puedes tomar casi todos los cursos de Platzi durante un mes')
} else if (subscriptionType === 'Expert') {
	console.log(
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
	)
} else if (subscriptionType === 'ExpertPlus') {
	console.log(
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
	)
} else if (subscriptionType === 'Free') {
	console.log('Solo puedes tomar los cursos gratis')
} */

/* if (subscriptionType === 'Free')
	console.log('Solo puedes tomar los cursos gratis')

if (subscriptionType === 'basic')
	console.log('Puedes tomar casi todos los cursos de Platzi durante un mes')

if (subscriptionType === 'Expert')
	console.log('Puedes tomar casi todos los cursos de Platzi durante un mes')

if (subscriptionType === 'ExpertPlus')
	console.log(
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
	) */
