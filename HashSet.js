import LinkedList from "./LinkedList.js";

class Node {
  constructor(key = null, next = null) {
    this.key = key;
    this.next = next;
  }

  toString() {
    return `( ${this.key} ) -> `;
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

export default class HashSet {
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

  index(string) {
    const index = this.hash(string) % this.buckets.length;

    // Unallow out of bound index
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    return index;
  }

  set(key) {
    const index = this.index(key);

    const bucket = this.buckets[index];

    if (!bucket) {
      this.buckets[index] = new Bucket();
      this.buckets[index].append(new Node(key));
      this.capacity++;
    } else if (bucket.contains(key)) {
      // Just return because a key already exists
      return;
    } else {
      // If not found, just append new node
      bucket.append(new Node(key));
      this.capacity++;
    }

    // Check if capacity is at load factor level or greater
    if (this.capacity / this.buckets.length >= this.loadFactor) {
      // create array with double current size
      // Copy current buckets to it
      let newBuckets = new Array(this.buckets.length * 2).fill(null);
      for (let i = 0; i < this.buckets.length; i++) {
        newBuckets[i] = this.buckets[i];
      }
      this.buckets = newBuckets;
    }
  }

  has(key) {
    const index = this.index(key);

    const bucket = this.buckets[index];

    if (!bucket) {
      return false;
    }

    return bucket.contains(key);
  }

  remove(key) {
    const index = this.index(key);

    const bucket = this.buckets[index];

    if (!bucket) {
      return false;
    }

    if (bucket.contains(key)) {
      const nodeIndex = bucket.find(key);
      bucket.removeAt(nodeIndex);
      this.capacity--;
      return true;
    }
    return false;
  }

  get length() {
    let count = 0;
    this.buckets.forEach((bucket) => {
      if (bucket) count += bucket.size;
    });
    return count;
  }

  clear() {
    this.buckets.forEach((bucket) => {
      if (!bucket) return;
      for (let i = 0; i < bucket.size; i++) {
        bucket.pop();
      }
    });
    this.buckets.fill(null);
  }

  get keys() {
    const keysArray = [];

    this.buckets.forEach((bucket) => {
      if (!bucket) return;

      // Push keys from bucket to array until pointer reaches null
      let pointer = bucket.head;

      while (pointer) {
        keysArray.push(pointer.key);
        pointer = pointer.next;
      }
    });

    return keysArray;
  }
}
