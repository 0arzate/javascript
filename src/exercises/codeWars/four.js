function isPangram(string = ""){
  const ALPHABET_LETTERS = 26
  const FIND_SPECIAL_cHARACTERS_REGEX = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g

  const stringLowerCase = string.toLowerCase();
  const stringWithoutSpaces = stringLowerCase.replaceAll(" ", "")
  const stringWithoutSpecialCharacters = stringWithoutSpaces.replace(FIND_SPECIAL_cHARACTERS_REGEX, "")
  const sentenceLetters = new Set(stringWithoutSpecialCharacters)

  const hasAllAlphabetLetters = sentenceLetters.size === ALPHABET_LETTERS
  return hasAllAlphabetLetters
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))