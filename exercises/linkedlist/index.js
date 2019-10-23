// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    // For all nodes except the first(the first references null to null), the "next" argument passed is the current head of the linked list.
    // Soon after the line below executes, the newly added node will become the new head of the Linked list
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // the head is a reference to the most recently added node(not the one currently in process of being added)
    // the head is passed in the node instantiation to be assigned to next property
    const node = new Node(data, this.head);

    // after the node has been instantiated and the current head was passed and assigned to the next property,
    // the node is assigned to the head of the linked list.
    this.head = node;
  };

  size() {
    let counter = 0;
    // the current head is assigned to node variable
    let node = this.head;

    // so long as node is a truthy value the while loop will continue to run and counter will keep count of the number of iterations
    while (node) {
      counter++;
      // the next node is assigned to node variable
      // only the last node has the the next property of null, so iterations effectively end once all nodes have been counted 
      node = node.next;
    }

    return counter;
  }

}


module.exports = { Node, LinkedList };
