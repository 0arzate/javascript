const obj = {
  name: 'Jose',
  lastName: 'Perez Leon',
  age: 33,
  gender: 'Male',
}

console.log(Object.entries(obj))

const deepObj = {
  name: 'Jose',
  lastName: 'Perez Leon',
  adreess: {
    city: 'CDMX',
    state: 'CDMX',
    cp: 4369,
    street: {
      number: 98,
      name: 'Reforma',
      house: {
        color: 'white',
        floors: 3,
        references: 'three in front of the door',
      },
    },
  },
}

console.log(Object.entries(deepObj))

const functionsObj = {
  name: 'Jose',
  lastName: 'Perez Leon',
  age: 33,
  getFullName() {
    return `${this.name} ${this.lastName}`
  },
}

console.log(Object.entries(functionsObj)[3][1]())
