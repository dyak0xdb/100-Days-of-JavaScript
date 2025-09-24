# JavaScript Symbol Example

This is a simple example to demonstrate the use of **Symbol** in JavaScript and the difference between string keys and Symbol keys in an object.

```js
let obj = {}; // Create an empty object
let id = Symbol(21); // Create a variable using the Symbol type

obj.name = "0xdb"; // Add a string key and value to the object `obj`
obj[id] = 21; // Add a Symbol key to the object: Symbol(21): 21

console.log(obj); // { name: '0xdb', [Symbol(21)]: 21 }
console.log(Object.keys(obj)); // ['name']
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(21) ]
