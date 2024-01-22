import Tree from "./BST.js";

// function from odin project
// const prettyPrint = (node, prefix = "", isLeft = true) => {
//   if (node === null) {
//     return;
//   }
//   if (node.right !== null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   }
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//   if (node.left !== null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//   }
// };

function getRandomArray(size, min = 0) {
  const array = new Array(size);
  for (let i = 0; i < size; i += 1) {
    array[i] = Math.floor(Math.random() * 100 + min);
  }
  return array;
}

const randomArray = getRandomArray(5);
const myBST = new Tree(randomArray);
// prettyPrint(myBST.root);
console.log(myBST.isBalanced);
console.log(myBST.preOrder());
console.log(myBST.inOrder());
console.log(myBST.postOrder());

getRandomArray(5, 100).forEach((num) => {
  myBST.insert(num);
});

console.log(myBST.isBalanced);
console.log(myBST.preOrder());
console.log(myBST.inOrder());
console.log(myBST.postOrder());

myBST.rebalance();
console.log(myBST.isBalanced);
console.log(myBST.preOrder());
console.log(myBST.inOrder());
console.log(myBST.postOrder());
