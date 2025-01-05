const person = {
  name: "Osvaldo",
  lastName: "Arzate",
  age: 25,
  email: "osvarz.new@gmail.com",
  address: {
    street: "Calle 1",
    number: 123,
    city: "CDMX",
    country: "Mexico"
  },
}

const myJSON = JSON.stringify(person, ["address"]);

console.log({myJSON});


const stringJSON = JSON.parse(myJSON);

console.log({stringJSON});