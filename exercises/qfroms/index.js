// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  // add data to first stack
  add(data) {
    this.s1.push(data);
  }

  // in order to remove by means of First in, First out, we transfer data from first s1 stack to s2 stack
  remove() {
    while(this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }

    // The data at the bottom before we transfered from s1 to s2, is now at the top of s2
    // Therefore we can "pop" that data and assign it variable named data.
    const data = this.s2.pop();

    // Before we return the data above, we want to transfer data back to s1
    while(this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }

    // Now data is s1 is the same as before except that the first data added is now removed.
    // Finally we return the data removed
    return data;
  }

  // Very similar to remove(), but instead of removing and assigning the removed data to the data variable, we simply use peek() to reference it.
  peek() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }

    const data = this.s2.peek();

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return data;
  }
}

// Queue: push/unshift vs. shift/pop vs. two push/pop stacks
// https://jsperf.com/queue-push-unshift-vs-shift-pop

module.exports = Queue;
