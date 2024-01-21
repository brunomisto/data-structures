import HashMap from "./HashMap.js";

const myHashMap = new HashMap();
myHashMap.set("foo", "bar");
myHashMap.set("foo", "other value");
myHashMap.set("bar", "foo");
console.log(myHashMap.buckets);
console.log(myHashMap.capacity);
console.log(myHashMap.get("bar")); // "foo"
console.log(myHashMap.get("foo")); // "another value"
console.log(myHashMap.get("test")); // null
