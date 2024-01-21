import HashMap from "./HashMap.js";

const myHashMap = new HashMap();
myHashMap.set("foo", "bar");
myHashMap.set("foo", "other value");
myHashMap.set("bar", "foo");
console.log(myHashMap.capacity); // 2
console.log(myHashMap.get("bar")); // "foo"
console.log(myHashMap.get("foo")); // "another value"
console.log(myHashMap.get("test")); // null
console.log(myHashMap.has("bar")); // true
console.log(myHashMap.has("test")); // false
