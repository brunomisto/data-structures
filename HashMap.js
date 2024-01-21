import LinkedList from "./LinkedList.js";

class Node {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }

  toString() {
    return `( ${this.key} : ${this.value} ) -> `;
  }
}

class Bucket extends LinkedList {
  contains(key) {
    let pointer = this.head;
    while (pointer) {
      if (pointer.key === key) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  find(key) {
    let pointer = this.head;
    let count = 0;
    while (pointer) {
      if (pointer.key === key) {
        return count;
      }
      pointer = pointer.next;
      count++;
    }
    return null;
  }
}

export default class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null);
    this.capacity = 0;
    this.loadFactor = 0.75;
  }

  hash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key) % this.buckets.length;

    // Unallow out of bound index
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let bucket = this.buckets[index];

    if (!bucket) {
      this.buckets[index] = new Bucket();
      this.buckets[index].append(new Node(key, value));
      this.capacity++;
    } else if (bucket.contains(key)) {
      // Find node index
      let nodeIndex = bucket.find(key);

      // Change its value
      bucket.at(nodeIndex).value = value;
    } else {
      // If not found, just append new node
      bucket.append(new Node(key, value));
      this.capacity++;
    }
  }
}
