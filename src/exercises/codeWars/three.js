const binaryArrayToNumber = arr => {
  const reversedBinary = [ ...arr ].reverse();

  const ZeroOnePositions = reversedBinary.map((number, index) => {
    return index
  })

  const orderPositions = [ ...ZeroOnePositions ].reverse();

  const positionByPotencialTwo = orderPositions.map((number) => {
    return 2 ** number
  });

  const binaryNumberMultiplyByPotencial = arr.map((number, index) => {
    return number * positionByPotencialTwo[index]
  })

  const exponentialsMultipliedByOne = binaryNumberMultiplyByPotencial.map((number) => {
    return 1 * number
  });

  const result = exponentialsMultipliedByOne.reduce((acc, number) => {
    return acc + number
  });

  return result;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]))
console.log(binaryArrayToNumber([0, 0, 1, 0]))
console.log(binaryArrayToNumber([1, 1, 1, 1]))