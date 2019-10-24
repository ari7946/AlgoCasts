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

  getFirst() {
    return this.head;
  }
  
  getLast() {
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node.next) {
      node = node.next
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    let nextNode = this.head.next;

    while (node.next) {
      if (!nextNode.next) {
        node.next = null;
        return;
      }
      node = node.next;
      nextNode = node.next;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    this.getLast().next = new Node(data);
  }

  getAt(index) {
    if (!this.head) return null;
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter == index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    // if there are no nodes return null
    if (!this.head) return null;

    const previous = this.getAt(index - 1);

    // a more readable code below that also passes unit tests is as follows.
    // const nextNode = this.getAt(index + 1)
    // The "getAt" method returns null if the index is "out of bounds", taking care of all edge cases.
    // However, that code makes another call to "getAt()"" method and in turn another iteration of the linked list negatively affects runtime.
    // In the defined "nextNode" variable below, "previous" resolves to null if the node is also the head.
    // If that's the case, calling "null.next" will result in undefined, leading to errors.
    // The code below ensures "previous" and "previous.next" are not null before assigning "previous.next.next" to the "nextNode" variable.
    // A different but similar edge case scenerio happens when we call a node that is one index more that the last node in the linked list.
    // In that case, "previous" will target the last node and "previous.next" will be set to null. There is nothing incorrect about that behaviour
    // as the last node always has its next property set to null. The the issue arises by calling "previous.next.next".
    // if "prevous.next" equals null, "previous.next.next" will lead to an error.
    // That is the reason for testing if both "previous" and "previous.next" are truthy values before assigning "previous.next.next" to the "nextNode" variable.
    const nextNode = previous && previous.next ? previous.next.next : null;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      previous.next = nextNode;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.insertFirst(data)
    };
    const previous = this.getAt(index - 1);
    const nextNode = previous ? previous.next : null;
    if (index === 0) {
      this.insertFirst(data);
    } else if (index > this.size() - 1) {
      const newNode = new Node(data);
      const last = this.getLast();
      last.next = newNode;
    } else {
      const newNode = new Node(data, nextNode);
      previous.next = newNode;
    }
  }
}

module.exports = { Node, LinkedList };
//! Pythontutor link with comments up to the size method
// http://www.pythontutor.com/live.html#code=class%20Node%20%7B%0A%20%20constructor%28data,%20next%20%3D%20null%29%20%7B%0A%20%20%20%20this.data%20%3D%20data%3B%0A%20%20%20%20//%20For%20all%20nodes%20except%20the%20first%28the%20first%20references%20null%20to%20null%29,%20the%20%22next%22%20argument%20passed%20is%20the%20current%20head%20of%20the%20linked%20list.%0A%20%20%20%20//%20Soon%20after%20the%20line%20below%20executes,%20the%20newly%20added%20node%20will%20become%20the%20new%20head%20of%20the%20Linked%20list%0A%20%20%20%20this.next%20%3D%20next%3B%0A%20%20%7D%0A%7D%0A%0Aclass%20LinkedList%20%7B%0A%20%20constructor%28%29%20%7B%0A%20%20%20%20this.head%20%3D%20null%3B%0A%20%20%7D%0A%0A%20%20insertFirst%28data%29%20%7B%0A%20%20%20%20//%20the%20head%20is%20a%20reference%20to%20the%20most%20recently%20added%20node%28not%20the%20one%20currently%20in%20process%20of%20being%20added%29%0A%20%20%20%20//%20the%20head%20is%20passed%20in%20the%20node%20instantiation%20to%20be%20assigned%20to%20next%20property%0A%20%20%20%20const%20node%20%3D%20new%20Node%28data,%20this.head%29%3B%0A%20%20%20%20%0A%20%20%20%20//%20after%20the%20node%20has%20been%20instantiated%20and%20the%20current%20head%20was%20passed%20and%20assigned%20to%20the%20next%20property,%0A%20%20%20%20//%20the%20node%20is%20assigned%20to%20the%20head%20of%20the%20linked%20list.%0A%20%20%20%20this.head%20%3D%20node%3B%0A%20%20%7D%3B%0A%0A%20%20size%28%29%20%7B%0A%20%20%20%20let%20counter%20%3D%200%3B%0A%20%20%20%20//%20the%20current%20head%20is%20assigned%20to%20node%20variable%0A%20%20%20%20let%20node%20%3D%20this.head%3B%0A%20%20%20%20%0A%20%20%20%20//%20so%20long%20as%20node%20is%20a%20truthy%20value%20the%20while%20loop%20will%20continue%20to%20run%20and%20counter%20will%20keep%20count%20of%20the%20number%20of%20iterations%0A%20%20%20%20while%28node%29%20%7B%0A%20%20%20%20%20%20counter%2B%2B%3B%0A%20%20%20%20%20%20//%20the%20next%20node%20is%20assigned%20to%20node%20variable%0A%20%20%20%20%20%20//%20only%20the%20last%20node%20has%20the%20the%20next%20property%20of%20null,%20so%20iterations%20effectively%20end%20once%20all%20nodes%20have%20been%20counted%20%0A%20%20%20%20%20%20node%20%3D%20node.next%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20counter%3B%0A%20%20%7D%0A%0A%7D%0A%0Aconst%20list%20%3D%20new%20LinkedList%28%29%3B%0Alist.insertFirst%281%29%3B%0Alist.insertFirst%282%29%3B%0Alist.insertFirst%283%29%3B%0Alist.insertFirst%284%29%3B%0A%0Alist.size%28%29%20%20%0A&cumulative=false&curInstr=47&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

//! Pythontutor link up to removeAt method
// http://www.pythontutor.com/live.html#code=class%20Node%20%7B%0A%20%20constructor%28data,%20next%20%3D%20null%29%20%7B%0A%20%20%20%20this.data%20%3D%20data%3B%0A%20%20%20%20//%20For%20all%20nodes%20except%20the%20first%28the%20first%20references%20null%20to%20null%29,%20the%20%22next%22%20argument%20passed%20is%20the%20current%20head%20of%20the%20linked%20list.%0A%20%20%20%20//%20Soon%20after%20the%20line%20below%20executes,%20the%20newly%20added%20node%20will%20become%20the%20new%20head%20of%20the%20Linked%20list%0A%20%20%20%20this.next%20%3D%20next%3B%0A%20%20%7D%0A%7D%0A%0Aclass%20LinkedList%20%7B%0A%20%20constructor%28%29%20%7B%0A%20%20%20%20this.head%20%3D%20null%3B%0A%20%20%7D%0A%0A%20%20insertFirst%28data%29%20%7B%0A%20%20%20%20//%20the%20head%20is%20a%20reference%20to%20the%20most%20recently%20added%20node%28not%20the%20one%20currently%20in%20process%20of%20being%20added%29%0A%20%20%20%20//%20the%20head%20is%20passed%20in%20the%20node%20instantiation%20to%20be%20assigned%20to%20next%20property%0A%20%20%20%20const%20node%20%3D%20new%20Node%28data,%20this.head%29%3B%0A%20%20%20%20%0A%20%20%20%20//%20after%20the%20node%20has%20been%20instantiated%20and%20the%20current%20head%20was%20passed%20and%20assigned%20to%20the%20next%20property,%0A%20%20%20%20//%20the%20node%20is%20assigned%20to%20the%20head%20of%20the%20linked%20list.%0A%20%20%20%20this.head%20%3D%20node%3B%0A%20%20%7D%3B%0A%20%20%0A%20%20getAt%28index%29%20%7B%0A%20%20%20%20let%20counter%20%3D%200%3B%0A%20%20%20%20let%20node%20%3D%20this.head%3B%0A%0A%20%20%20%20while%28node%29%20%7B%0A%20%20%20%20%20%20if%20%28counter%20%3D%3D%20index%29%20%7B%0A%20%20%20%20%20%20%20%20return%20node%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20node%20%3D%20node.next%3B%0A%20%20%20%20%20%20counter%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%20return%20null%0A%20%20%7D%0A%20%20%0A%20%20removeAt%28index%29%20%7B%0A%20%20%20%20if%20%28!this.head%29%20return%20null%3B%0A%20%20%20%20const%20previous%20%3D%20this.getAt%28index%20-%201%29%3B%20%0A%20%20%20%20const%20nextNode%20%3D%20previous%20%26%26%20previous.next%20%3F%20previous.next.next%20%3A%20null%3B%0A%20%20%20%20if%20%28index%20%3D%3D%3D%200%29%20%7B%0A%20%20%20%20%20%20this.head%20%3D%20this.head.next%3B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%20%20else%20%7B%0A%20%20%20%20%20%20previous.next%20%3D%20nextNode%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aconst%20list%20%3D%20new%20LinkedList%28%29%3B%0Alist.insertFirst%28'first'%29%3B%0Alist.insertFirst%28'second'%29%3B%0Alist.insertFirst%28'third'%29%3B%0Alist.insertFirst%28'fourth'%29%3B%0Alist.insertFirst%28'fifth'%29%3B%0Alist.removeAt%282%29%3B%0A%20&cumulative=false&curInstr=55&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
