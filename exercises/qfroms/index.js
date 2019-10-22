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

//! Queue: push/unshift vs. shift/pop vs. two push/pop stacks
// https://jsperf.com/queue-push-unshift-vs-shift-pop

//! pythontutor link for above solution. Added Stack definition above queue instead of export/importing
http://www.pythontutor.com/javascript.html#code=class%20Stack%20%7B%0A%20%20constructor%28%29%20%7B%0A%20%20%20%20this.data%20%3D%20%5B%5D%3B%0A%20%20%7D%0A%0A%20%20push%28record%29%20%7B%0A%20%20%20%20this.data.push%28record%29%3B%0A%20%20%7D%0A%0A%20%20pop%28%29%20%7B%0A%20%20%20%20return%20this.data.pop%28%29%3B%0A%20%20%7D%0A%0A%20%20peek%28%29%20%7B%0A%20%20%20%20return%20this.data%5Bthis.data.length%20-%201%5D%3B%0A%20%20%7D%0A%7D%0A%0Aclass%20Queue%20%7B%0A%20%20constructor%28%29%20%7B%0A%20%20%20%20this.s1%20%3D%20new%20Stack%28%29%3B%0A%20%20%20%20this.s2%20%3D%20new%20Stack%28%29%3B%0A%20%20%7D%0A%0A%20%20//%20add%20data%20to%20first%20stack%0A%20%20add%28data%29%20%7B%0A%20%20%20%20this.s1.push%28data%29%3B%0A%20%20%7D%0A%0A%20%20//%20in%20order%20to%20remove%20by%20means%20of%20First%20in,%20First%20out,%20we%20transfer%20data%20from%20first%20s1%20stack%20to%20s2%20stack%0A%20%20remove%28%29%20%7B%0A%20%20%20%20while%28this.s1.peek%28%29%29%20%7B%0A%20%20%20%20%20%20this.s2.push%28this.s1.pop%28%29%29%0A%20%20%20%20%7D%0A%0A%20%20%20%20//%20The%20data%20at%20the%20bottom%20before%20we%20transfered%20from%20s1%20to%20s2,%20is%20now%20at%20the%20top%20of%20s2%0A%20%20%20%20//%20Therefore%20we%20can%20%22pop%22%20that%20data%20and%20assign%20it%20variable%20named%20data.%0A%20%20%20%20const%20data%20%3D%20this.s2.pop%28%29%3B%0A%0A%20%20%20%20//%20Before%20we%20return%20the%20data%20above,%20we%20want%20to%20transfer%20data%20back%20to%20s1%0A%20%20%20%20while%28this.s2.peek%28%29%29%20%7B%0A%20%20%20%20%20%20this.s1.push%28this.s2.pop%28%29%29%0A%20%20%20%20%7D%0A%0A%20%20%20%20//%20Now%20data%20is%20s1%20is%20the%20same%20as%20before%20except%20that%20the%20first%20data%20added%20is%20now%20removed.%0A%20%20%20%20//%20Finally%20we%20return%20the%20data%20removed%0A%20%20%20%20return%20data%3B%0A%20%20%7D%0A%0A%20%20//%20Very%20similar%20to%20remove%28%29,%20but%20instead%20of%20removing%20and%20assigning%20the%20removed%20data%20to%20the%20data%20variable,%20we%20simply%20use%20peek%28%29%20to%20reference%20it.%0A%20%20peek%28%29%20%7B%0A%20%20%20%20while%20%28this.s1.peek%28%29%29%20%7B%0A%20%20%20%20%20%20this.s2.push%28this.s1.pop%28%29%29%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20data%20%3D%20this.s2.peek%28%29%3B%0A%0A%20%20%20%20while%20%28this.s2.peek%28%29%29%20%7B%0A%20%20%20%20%20%20this.s1.push%28this.s2.pop%28%29%29%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20data%3B%0A%20%20%7D%0A%7D%0A%0A%0Aconst%20q%20%3D%20new%20Queue%28%29%3B%0Aq.add%281%29%3B%0Aq.add%282%29%3B%0Aq.peek%28%29%3B%20%20//%20returns%201%0Aq.remove%28%29%3B%20//%20returns%201%0Aq.remove%28%29%3B%20//%20returns%202%0A&curInstr=126&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

module.exports = Queue;
