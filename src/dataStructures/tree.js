class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class Tree {
  constructor(){
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if(this.root === null) {
      return this.root = newNode
    }

    const nodeFound = this.search(value)

    const isHigherValue = value > nodeFound.value

    if(isHigherValue) {
      nodeFound.right = newNode
    } else {
      nodeFound.left = newNode
    }

    return this
  }

  search(value, node = this.root) {
    const isSameValue = node.value === value

    if(isSameValue) {
      return node
    }

    if(node.left === null || node.right === null) {
      return node
    }

    const isHigherValue = value > node.right.value
    const isLowerValue = value < node.left.value

    if(isHigherValue) {
      if(node.right.right === null) return node.right
      this.search(value, node.right.right)
    }

    if(isLowerValue){
      if(node.left.left === null) return node.left
      this.search(value, node.left.left)
    }
  }
}