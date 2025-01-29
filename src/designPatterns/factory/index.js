function userFactory({ name, lastName, age }) {
  return {
    name,
    lastName,
    age,
    getFullName() {
      return `${this.name} ${this.lastName}`;
    },
  };
}

const osvaldo = userFactory({ name: 'Osvaldo', lastName: 'Alonso', age: 30 });