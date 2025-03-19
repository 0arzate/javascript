export default function miltipliesThreeFive(number = 0, sum = 0) {
  console.log('number', number)
  console.log('sum', sum)
  if(number <= 0) {
    return sum
  }

  if(number >= 10) {
    return miltipliesThreeFive(number - 1, sum)
  }

  const residueOfThree = number % 3
  const isMultipleOfThree = residueOfThree === 0

  const residueOfFive = number % 5
  const isMultipleOfFive = residueOfFive === 0

  if(isMultipleOfFive) {
    sum += number
  }

  if(isMultipleOfThree && !isMultipleOfFive) {
    sum += number
  }

  return miltipliesThreeFive(number - 1, sum)
}