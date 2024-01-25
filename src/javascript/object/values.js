const obj = {
  name: 'Jose',
  lastName: 'Perez Leon',
  age: 10,
  gender: 'Male',
}

console.log(Object.values(obj))

const deepObj = {
  name: 'Jose',
  lastName: 'Perez Leon',
  address: {
    city: 'CDMX',
    state: 'CDMX',
    street: {
      number: 98,
      name: 'Reforma',
      house: {
        color: 'White',
        references: 'Three in front of the garage',
      },
    },
  },
}

console.log(Object.values(deepObj))

const fnObj = {
  name: 'Jose',
  lastName: 'Perez Leon',
  age: 18,
  getFullName() {
    console.log()
  },
}

Object.values(fnObj)[3]()
