import HashMap from "./HashMap.js";

const myHashMap = new HashMap();
myHashMap.set("foo", "bar");
myHashMap.set("foo", "other value");
myHashMap.set("bar", "foo");
console.log(myHashMap.buckets);
console.log(myHashMap.capacity);
