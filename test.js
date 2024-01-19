import LinkedList from "./LinkedList.js";

const myList = new LinkedList();
console.log(myList.size); // 0
myList.append(10);
myList.prepend(5);
console.log(myList.head); // 5 value node
console.log(myList.tail); // 10 value node
myList.append(3);
console.log(myList.at(2)); // 3 value node
myList.pop();
console.log(myList.size); // 2
console.log(myList.contains(3)); // false
console.log(myList.contains(10)); // true
console.log(myList.find(10)); // 1
console.log(myList.toString()); // ( 5 ) -> ( 10 ) -> null
myList.insertAt(1, 12);
console.log(myList.toString()); // ( 5 ) -> ( 12 ) -> ( 10 ) -> null
myList.insertAt(2, 13);
console.log(myList.toString()); // ( 5 ) -> ( 12 ) -> ( 13 ) -> ( 10 ) -> null
myList.insertAt(0, 13);
console.log(myList.toString()); // ( 13 ) -> ( 5 ) -> ( 12 ) -> ( 13 ) -> ( 10 ) -> null
myList.removeAt(0);
console.log(myList.toString()); // ( 5 ) -> ( 12 ) -> ( 13 ) -> ( 10 ) -> null
myList.removeAt(1);
console.log(myList.toString()); // ( 5 ) -> ( 13 ) -> ( 10 ) -> null
