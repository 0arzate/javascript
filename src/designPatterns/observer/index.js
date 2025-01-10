import { Customer } from "./customer.js";
import { Store } from "./store.js";

const store = new Store("Abarrotes")

const osvaldo = new Customer({ name: 'Osvaldo', lastName: 'Arzate', email: 'osvarz.new@gmail.com' })
const mariana = new Customer({ name: 'Mariana', lastName: 'Arzate', email: 'mari.test@gmail.com' })
const Dante = new Customer({ name: 'Dante', lastName: 'Arzate', email: 'dante.test@gmail.com' })
const Joss = new Customer({ name: 'Josabet', lastName: 'Nava', email: 'joss.test@gmail.com' })

store.newsLetterSubscribe(osvaldo.name, (data) => {
  console.log(osvaldo.name, data)
})

store.newsLetterSubscribe(mariana.name, (data) => {
  console.log(mariana.name, data)
})

store.newsLetterPublish({ message: "Hola a todos" })

store.newsLatterUnsubscribe(osvaldo.name)

store.newsLetterPublish({ message: "Hola de nuevo a todos" })