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
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    } 
  }

  contains(data) {
    // if the root is equal to data passed, return "this" node
    if (this.data === data) {
      return this;

    // if there's a right node, check if the right node "contains" data, recursively 
    } else if (this.data < data && this.right) {
      return this.right.contains(data);

    // if there's a left node, check if left node "contains" data passed, recursively.
    } else if (this.data > data && this.left) {
      return this.left.contains(data);

    // if data value does not match any nodes, return null
    } else {
      return null
    }
  }

}

module.exports = Node;
