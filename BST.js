function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

export default class Tree {
  constructor(array) {
    // Sort and remove duplicates
    const sortedUniqueArray = [...new Set(array.sort())];
    this.root = Tree.buildTree(
      sortedUniqueArray,
      0,
      sortedUniqueArray.length - 1,
    );
  }

  static buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);

    const root = new Node(array[mid]);
    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }

  insert(value) {
    let pointer = this.root;
    // just add if root doesn't exists
    if (!pointer) {
      this.root = new Node(value);
    }

    while (pointer) {
      if (value > pointer.data) {
        if (pointer.right) {
          pointer = pointer.right;
        } else {
          pointer.right = new Node(value);
          return;
        }
      } else if (value < pointer.data) {
        if (pointer.left) {
          pointer = pointer.left;
        } else {
          pointer.left = new Node(value);
          return;
        }
      } else {
        // Return since is a duplicate
        return;
      }
    }
  }

  delete(value) {
    const innerDelete = (deleteValue, node = this.root) => {
      const root = node;
      // base case
      if (root === null) {
        return null;
      }

      // Perform operations in preorder
      if (root.data === deleteValue) {
        // Check if is leaf
        if (!root.left && !root.right) {
          // just delete it
          return null;
        }

        // Check if has 2 childs
        if (root.left && root.right) {
          // find minimum value from right subtree
          let minimumValue = root.right;
          while (minimumValue.left) {
            minimumValue = minimumValue.left;
          }
          minimumValue = minimumValue.data;

          // replace it in current root
          root.data = minimumValue;

          // delete it from right subtree
          root.right = innerDelete(root.data, root.right);

          return root;
        }

        // if only 1 child replace it
        return root.left || root.right;
      }

      if (deleteValue < root.data) {
        root.left = innerDelete(deleteValue, root.left);
      } else {
        root.right = innerDelete(deleteValue, root.right);
      }

      return root;
    };

    this.root = innerDelete(value);
  }

  find(value) {
    let pointer = this.root;
    while (pointer) {
      if (pointer.data === value) {
        break;
      }

      if (value > pointer.data) {
        pointer = pointer.right;
      }

      if (value < pointer.data) {
        pointer = pointer.left;
      }
    }
    return pointer;
  }

  levelOrder(callback) {
    if (!this.root) return;
    const list = [];

    const queue = [];
    queue.push(this.root);

    while (queue.length !== 0) {
      const currentNode = queue.shift();
      // Do something with current node
      if (callback) {
        callback(currentNode);
      } else {
        list.push(currentNode);
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    if (!callback) {
      // eslint-disable-next-line consistent-return
      return list;
    }
  }

  preOrder(callback = null, node = this.root) {
    if (!node) {
      return [];
    }

    let list = [];

    if (callback) {
      list.push(callback(node));
    } else {
      list.push(node.data);
    }

    list = list.concat(this.preOrder(callback, node.left));
    list = list.concat(this.preOrder(callback, node.right));

    return list;
  }

  inOrder(callback = null, node = this.root) {
    if (!node) {
      return [];
    }

    let list = [];

    list = list.concat(this.preOrder(callback, node.left));

    if (callback) {
      list.push(callback(node));
    } else {
      list.push(node.data);
    }

    list = list.concat(this.preOrder(callback, node.right));

    return list;
  }

  postOrder(callback = null, node = this.root) {
    if (!node) {
      return [];
    }

    let list = [];

    list = list.concat(this.preOrder(callback, node.left));
    list = list.concat(this.preOrder(callback, node.right));

    if (callback) {
      list.push(callback(node));
    } else {
      list.push(node.data);
    }

    return list;
  }

  height(node, count = 0) {
    // number of edges in the longest path from a given node to a leaf node
    // height of a leaf node should be 0
    if (!node) {
      return count;
    }

    if (!node.left && !node.right) {
      // base case: check if node is leaf
      return count;
    }

    return Math.max(
      this.height(node.left, count + 1),
      this.height(node.right, count + 1),
    );
  }

  depth(node) {
    // number of edges in the path from a given node to the tree’s root node
    let pointer = this.root;
    let count = 0;

    while (pointer) {
      // check if find node
      if (pointer === node) {
        return count;
      }

      if (node.data > pointer.data) {
        pointer = pointer.right;
      }

      if (node.data < pointer.data) {
        pointer = pointer.left;
      }

      count += 1;
    }

    return null;
  }

  get isBalanced() {
    const leftHeight = this.height(this.root.left);
    const rightHeight = this.height(this.root.right);
    if (leftHeight > rightHeight) {
      return leftHeight - rightHeight <= 1;
    }
    return rightHeight - leftHeight <= 1;
  }

  rebalance() {
    const array = this.preOrder();
    this.root = Tree.buildTree(array.sort());
  }
}
