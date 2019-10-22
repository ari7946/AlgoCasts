// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue;
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove())
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove())
    }
  }
  return q; 
}

//! Pythontutor for above solution
// http://www.pythontutor.com/javascript.html#code=class%20Queue%20%7B%0A%20%20constructor%28%29%20%7B%0A%20%20%20%20this.data%20%3D%20%5B%5D%0A%20%20%7D%0A%0A%20%20add%28record%29%20%7B%0A%20%20%20%20this.data.unshift%28record%29%3B%0A%20%20%7D%0A%0A%20%20remove%28record%29%20%7B%0A%20%20%20%20return%20this.data.pop%28%29%3B%0A%20%20%7D%0A%0A%20%20peek%28%29%20%7B%0A%20%20%20%20%20%20return%20this.data%5Bthis.data.length%20-%201%5D%0A%20%20%20%20%7D%0A%7D%0Aconst%20sourceOne%20%3D%20new%20Queue%28%29%3B%0AsourceOne.add%281%29%0AsourceOne.add%282%29%0A%0Aconst%20sourceTwo%20%3D%20new%20Queue%28%29%3B%0AsourceTwo.add%28%22Hi%22%29%0AsourceTwo.add%28%22There%22%29%0A%0Afunction%20weave%28sourceOne,%20sourceTwo%29%20%7B%0A%20%20%20%20const%20n%20%3D%20new%20Queue%3B%0A%20%20%20%20while%20%28sourceOne.peek%28%29%20%3E%200%29%20%7B%0A%20%20%20%20%20%20%20%20n.add%28sourceOne.remove%28%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20n.add%28sourceTwo.remove%28%29%29%0A%20%20%7D%0A%20%20%20%20return%20n.data%3B%0A%7D%0A%0Aweave%28sourceOne,%20sourceTwo%29%3B&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

module.exports = weave;
