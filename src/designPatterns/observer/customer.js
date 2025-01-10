export class Customer {
  constructor({ name, lastName, email }) {
    this.name = name
    this.lastName = lastName
    this.email = email
    this.newsLetters = []
  }

  get fullName () {
    return `${this.name} ${this.lastName}`
  }
}