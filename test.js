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
console.log(myHashMap.remove("bar")); // true
console.log(myHashMap.get("bar")); // null
console.log(myHashMap.length); // 1

myHashMap.set("a", "foo");
myHashMap.set("b", "foo");
myHashMap.set("c", "foo");
console.log(myHashMap.keys); // ["foo", "a", "b", "c"] (not necessarily in order)
console.log(myHashMap.values); // ["another value", "foo", "foo", "foo"] (same as above)
console.log(myHashMap.entries); // [["foo, "another value"], ["a", "foo"]...] (you get the point)
console.log(myHashMap.length); // 4
myHashMap.clear();
console.log(myHashMap.length); // 0
