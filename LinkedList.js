class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `( ${this.value} ) -> `;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(node) {
    if (!this.head) {
      this.head = node;
      return;
    }

    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = node;
  }

  prepend(node) {
    if (!this.head) {
      this.head = node;
      return;
    }

    let newNode = node;
    newNode.next = this.head;
    this.head = newNode;
  }

  get size() {
    let count = 0;
    let pointer = this.head;
    while (pointer) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  get tail() {
    if (!this.head) {
      return null;
    }

    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }

  at(index) {
    let count = 0;
    let pointer = this.head;
    while (pointer) {
      if (count === index) {
        return pointer;
      }
      pointer = pointer.next;
      count++;
    }
    return null;
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let pointer = this.head;
    while (pointer.next.next) {
      pointer = pointer.next;
    }

    pointer.next = null;
  }

  contains(value) {
    let pointer = this.head;
    while (pointer) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  find(value) {
    let pointer = this.head;
    let count = 0;
    while (pointer) {
      if (pointer.value === value) {
        return count;
      }
      pointer = pointer.next;
      count++;
    }
    return null;
  }

  toString() {
    let string = "";
    let pointer = this.head;
    while (pointer) {
      string += pointer.toString();
      pointer = pointer.next;
      if (!pointer) {
        string += "null";
      }
    }
    return string;
  }

  insertAt(index, node) {
    if (index === 0) {
      this.prepend(node);
      return;
    }

    let pointer = this.head;
    let count = 0;

    while (pointer) {
      if (pointer.next && count + 1 === index) {
        let newNode = node;
        newNode.next = pointer.next;
        pointer.next = newNode;
      }
      pointer = pointer.next;
      count++;
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let pointer = this.head;
    let count = 0;

    if (pointer.next && count + 1 === index) {
      pointer.next = pointer.next.next;
    }
  }
}
