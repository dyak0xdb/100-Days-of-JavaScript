# JavaScript Symbol vs String Keys Example

This example demonstrates how **Symbols** work in JavaScript and the difference between **string keys** and **Symbol keys** in an object.

```js
// Step 1: Create an object with string keys
let data = {};
data.name = "0xdb";
data.age = 21;
data.city = "dubai";

// Step 2: Create Symbol keys
let job = Symbol("bug hunter");
let favoritebug = Symbol("authentication");

// Step 3: Add Symbol keys to the object
data[job] = "bug hunter";
data[favoritebug] = "authentication";

// Step 4: Modify a string key value
data.name = "dyak0xdb";

// Step 5: Display keys and symbols
console.log(Object.keys(data)); // ['name', 'age', 'city']
console.log(Object.getOwnPropertySymbols(data)); // [Symbol(bug hunter), Symbol(authentication)]
