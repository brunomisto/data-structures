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

  static buildTree(array, start, end) {
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
    const setNewRoot = (deleteValue, node = this.root) => {
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
          root.right = setNewRoot(root.data, root.right);

          return root;
        }

        // if only 1 child replace it
        return root.left || root.right;
      }

      if (deleteValue < root.data) {
        root.left = setNewRoot(deleteValue, root.left);
      } else {
        root.right = setNewRoot(deleteValue, root.right);
      }

      return root;
    };

    this.root = setNewRoot(value);
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
    const list = [];
    if (!this.root) return list;

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

    return list;
  }
}
