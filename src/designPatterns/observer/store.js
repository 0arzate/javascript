import { ObserverManager } from "./observer-manager.js"

export class Store {
  constructor({ name }) {
    this.name = name
    this.newsLetter = new ObserverManager()
  }

  newsLetterSubscribe(customer, callback) {
    this.newsLetter.subscribe(customer, callback)
  }

  newsLatterUnsubscribe(customer) {
    this.newsLetter.unsubscribe(customer)
  }

  newsLetterPublish(data) {
    this.newsLetter.publish(data)
  }
}