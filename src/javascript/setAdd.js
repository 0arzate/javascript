const array = [
  {
    name: 'Juan',
    fullname: {
      name: 'juan',
      lastName: 'Perez Lopez',
    },
    address: {
      street: {
        name: 'Pascle',
        number: 98,
      },
    },
  },
  {
    name: 'Juan',
  },
  {
    name: 'Juan',
  },
  {
    name: 'Juan',
    fullname: {
      name: 'juan',
      lastName: 'Perez Lopez',
    },
    address: {
      street: {
        name: 'Pascle',
        number: 98,
      },
    },
  },
]

const otherArray = [
  1,
  2,
  3,
  4,
  4,
  4,
  5,
  'osvaldo',
  'Osvaldo',
  'Jose',
  'Jose',
  'jose',
  [1],
  [1],
  [2],
]

const set = new Set(otherArray)
console.log(set.has(1))
console.log([...set])
