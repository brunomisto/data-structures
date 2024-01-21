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
}
