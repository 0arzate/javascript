import { emojis } from '../utils/emojis.js'

const isArray = (subject) => Array.isArray(subject)

function showContent(array) {
	const arrayIsArray = isArray(array)

	if (!arrayIsArray) return console.log(array)

	if (array.length != 0) {
		let content = array[0]
		console.log(content)
		array.shift()
		showContent(array)
	} else {
		console.log('Fin del recorrido')
	}
}

showContent(emojis)
