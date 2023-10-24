const obj = {
  name: 'Osvaldo',
  lastName: 'Jose',
  age: 23,
  contrie: 'Mexico',
}

console.log(Object.entries(obj))

const advanceObj = {
  fullName: {
    names: 'Osvaldo',
    lastName: 'Arzate',
    mothersLastname: 'Santiago',
  },
  age: 24,
  adreess: {
    street: 'pascle',
    number: 98,
    country: {
      city: 'Mexico',
      town: 'Coyoacan',
      cp: 1234,
    },
  },
  getFullName: () => {
    return 'FULL NAME'
  },
}

console.log(Object.entries(advanceObj)[3][1]())
