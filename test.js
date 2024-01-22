/* eslint-disable no-console */
// import HashMap from "./HashMap.js";

// const myHashMap = new HashMap();
// myHashMap.set("foo", "bar");
// myHashMap.set("foo", "other value");
// myHashMap.set("bar", "foo");
// console.log(myHashMap.capacity); // 2
// console.log(myHashMap.get("bar")); // "foo"
// console.log(myHashMap.get("foo")); // "another value"
// console.log(myHashMap.get("test")); // null
// console.log(myHashMap.has("bar")); // true
// console.log(myHashMap.has("test")); // false
// console.log(myHashMap.remove("bar")); // true
// console.log(myHashMap.get("bar")); // null
// console.log(myHashMap.length); // 1

// myHashMap.set("a", "foo");
// myHashMap.set("b", "foo");
// myHashMap.set("c", "foo");
// console.log(myHashMap.keys); // ["foo", "a", "b", "c"] (not necessarily in order)
// console.log(myHashMap.values); // ["another value", "foo", "foo", "foo"] (same as above)
// console.log(myHashMap.entries); // [["foo, "another value"], ["a", "foo"]...] (you get the point)
// console.log(myHashMap.length); // 4
// myHashMap.clear();
// console.log(myHashMap.length); // 0

// import HashSet from "./HashSet.js";

// const myHashSet = new HashSet();
// myHashSet.set("foo");
// myHashSet.set("bar");
// myHashSet.set("baz");
// console.log(myHashSet.keys);
// myHashSet.remove("bar");
// console.log(myHashSet.length);

// eslint-disable-next-line import/extensions
import Tree from "./BST.js";

// function from odin project
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const myTree = new Tree([1, 9, 4, 5, 3, 2, 1, 0, 4, 2, 2, 2]);
// console.log(myTree.levelOrder().map((foo) => foo.data));
// myTree.delete(3);
// myTree.delete(4);
// myTree.delete(5);

// console.log(myTree.find(9));
// myTree.levelOrder((node) => {
//   console.log(node.data);
// });

// console.log(myTree.preOrder());
// console.log(myTree.inOrder());
// console.log(myTree.postOrder());

[10, 20, 30, 40, 50].forEach((num) => myTree.insert(num));
prettyPrint(myTree.root);
// console.log(myTree.height(myTree.root.left));
// console.log(myTree.height(myTree.root.right));
console.log(myTree.isBalanced);

myTree.rebalance();
prettyPrint(myTree.root);
console.log(myTree.isBalanced);
