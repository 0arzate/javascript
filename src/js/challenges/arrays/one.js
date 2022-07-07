function solution(array) {
	const words = []

	array.forEach((word) => {
		if (word.length >= 4) {
			words.push(word)
		}
	})

	return words
}

console.log(solution(['amor', 'sol', 'piedra', 'día']))
