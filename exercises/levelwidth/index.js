// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const stopper = 's';
  const arr = [root, stopper];

  while (arr.length > 1) {
    if (arr[0] === stopper) {
      counters.push(0);
      let node = arr.shift();
      arr.push(node);
    } else {
      let node = arr.shift();
      arr.push(...node.children);
      counters[counters.length - 1] += 1;
    }
  }
  
  return counters; 
}

module.exports = levelWidth;
