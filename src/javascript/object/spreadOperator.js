const obj = {
  name: 'Osvaldo',
  lastName: 'Arzate Santiago',
  age: 18,
  address: {
    city: 'CDMX',
    country: 'Mexico',
    state: 'Ciudad de Mexico',
    street: {
      name: 'Pascle',
      number: 190,
      description: {
        color: 'White',
        references: 'Five floors and a three in front of the house',
      },
    },
    cp: '04410',
  },
}

const myArray = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10, [11, 12, 13]]]]

const newObj = {
  ...myArray,
}

console.log(newObj)
