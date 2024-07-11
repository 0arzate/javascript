class Node {
  constructor(value) {
		this.value = value
		this.next = null
	}
}

export class Stack {
	constructor(){
		this.top = null;
		this.buttom = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value)
		const isFirstElement = this.length === 0
		this.length++

		if(isFirstElement) {
			this.top = newNode
			this.buttom = newNode
			return this
		}

		const currentTop = this.top
		this.top = newNode
		this.top.next = currentTop

		return this
	}

	peek() {
		return this.pop()
	}

	pop() {
		const currentTop = this.top
		const newTop = currentTop.next
		this.top = newTop
		this.length--

		const isLastNode = this.length === 0

		if(isLastNode) {
			this.buttom = null
		}

		return currentTop
	}
}