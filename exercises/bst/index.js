// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }

  contains(data) {
    if (this.data === data) return this
    if (data > this.data && this.right) return this.right.contains(data)
    if (data < this.data && this.left) return this.left.contains(data)

    return null
  }

  insert(value) {
    if (value < this.data && this.left) this.left.insert(value)
    else if (value < this.data) this.left = new Node(value)
    else if (value > this.data && this.right) this.right.insert(value)
    else if (value > this.data) this.right = new Node(value)
  }
}

module.exports = Node;
