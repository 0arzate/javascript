class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class MySinglyLinkedList {
  constructor(initialValue) {
    this.head = {
      value: initialValue,
      next: null
    }
		this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value)
    let currentIndex = 0
    let currentNode = this.head
    let previousNode = null

    while(index >= currentIndex) {
      previousNode = currentNode
      currentNode = previousNode.next
      currentIndex++
    }

    previousNode.next = newNode
    newNode.next = currentNode
  }
}