// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let node = this.head

    if (!this.head) return 0
    while(node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head
    while(node) {
      if (!node.next) return node
      node = node.next
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return null
    this.head = this.head.next
  }

  removeLast() {
  }

  insertLast(data) {
    let node = new Node(data)
    let last = this.getLast()
    if (last) last.next = node
    else this.head = node
  }

  getAt(index) {
    let node = this.head
    let count = 0
    while(node) {
      if (index === count) return node
      node = node.next
      count++
    }
    return null
  }

  removeAt(index) {
    if (!this.head) return null
    if (index === 0) this.head = this.head.next

    let node = this.getAt(index-1) || this.getLast()
    if (!node.next) return node = null
    node.next = node.next.next
  }

  insertAt(data, index) {
    if (!this.head) this.head = new Node(data)
    if (index === 0) this.head = new Node(data, this.head)

    let node = this.getAt(index-1) || this.getLast()
    if (!node.next) node.next = new Node(data)
    node.next = new Node(data, node.next)
  }

  forEach(transform) {
    let node = this.head
    while(node) {
      transform(node)
      node = node.next
    }
  }

  reverse() {
    let node = this.head
    let prev = null
    let next

    while(node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    this.head = prev
  }
}

module.exports = { Node, LinkedList };
