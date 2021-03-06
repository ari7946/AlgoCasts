// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

//TODO The methods on the Node class "add" and "remove"
// do not work with pythontutor. I suspect it is because in the add node we are
// creating a new instance of node inside its own method. I would like to
// write the code in a way that the "add" and the "remove" methods are in the tree class.
// The key thing to consider that we need to add a way to look up the node in the tree that we want to add the data passed in.
// comments will be updated as soon as I have a better understanding of do such implementation.
class Node {
  constructor(data) {
    this.data = data;
    this.children = []
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  //! Steps for BF traversal
  // 1: stick root into array
  // 2: while there is elements in array
  //   2.a: take out first element
  //   2.b: retrieve children of element
  //   2.c call function provided w/ traverse method on the element
  // 3: repeat step 2 untill array is empty.
  traverseBF(fn) {
    const arr = [this.root]
    while(arr.length) {
      // shift removes first element from array and returns it.
      const node = arr.shift();

      // alternative solution
      // for (let child of node.children) {
      //   arr.push(child);
      // }

      // shorter syntax using spread operator
      // arr.push(...node.children);

      // third solution using apply
      arr.push.apply(arr, node.children);

      // finally call the function passed in to each node.
      fn(node);
    }
  }

  //! DF traversal is similar to BF except nodes are placed at start of the array
  traverseDF(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
