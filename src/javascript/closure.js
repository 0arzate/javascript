function counter() {
  let number = 0
  return function (amount = 0) {
    return (number += amount)
  }
}

const newCounter = counter()
newCounter(10)
newCounter(5)
console.log(newCounter(10))

const otherCounter = counter()
otherCounter(5)
otherCounter(10)
console.log(otherCounter())
