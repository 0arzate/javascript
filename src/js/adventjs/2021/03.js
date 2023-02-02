function isValid(letter) {
	const allWords = letter.split(' ')

	const isParentheses = (word) =>
		word[0] === '(' && word[word.length - 1] === ')'

	const hasParentheses = allWords.some(isParentheses)
	const wordsInParentheses = allWords.filter(isParentheses)
	const parenthesesHasContent = wordsInParentheses.some(
		(word) => word.length > 2
	)
	const hasStrangeSimbols = wordsInParentheses.some(
		(word) =>
			word.includes('{') ||
			word.includes('[') ||
			word[1].includes('(') ||
			word[1].includes('(')
	)

	console.log({ parenthesesHasContent })
	console.log({ hasParentheses })
	console.log({ hasStrangeSimbols })

	return !hasStrangeSimbols && hasParentheses && parenthesesHasContent
}

console.log(isValid('bici coche (oso) bici coche'))
