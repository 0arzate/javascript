export class ObserverManager {
  constructor() {
    this.subscribers = new Map()
  }

  subscribe(subscriber, callback) {
    this.subscribers.set(subscriber, callback)
  }

  unsubscribe(subscriber) {
    this.subscribers.delete(subscriber)
  }

  publish(data) {
    this.subscribers.forEach((subscriber) => {
      subscriber(data)
    })
  }
}