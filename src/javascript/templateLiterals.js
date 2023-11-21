// ANTES DE ES6

const string1 = 'Hola'
const string2 = 'Mundo'

const stringConcat = string1 + '\n' + string2

console.log(stringConcat)

// DESPUÉS DE ES6

const str1 = 'Hola'
const str2 = 'Mundo'

const strConcat = `${str1} ${str2}`
const multline = `${str1}
mundo
`

console.log(multline)
