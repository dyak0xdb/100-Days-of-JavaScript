Day 1 - JavaScript Basics

## 1. Variables

A **variable** in JavaScript is like a box for holding data. You can store values in it to use later.

### Syntax of `var`

```javascript
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

### Types of Variables

JavaScript has three types of variables:

- `var`
- `let`
- `const`

#### Examples of Legal Variable Names

- `Number_hits`
- `temp99`
- `$credit`
- `_name`

**Note:**

- `var` and `let` can be declared without an initial value.
- `const` must be initialized when declared.

```javascript
let x;
console.log(x); // logs "undefined"

var c;
console.log(c); // logs "undefined"

// ❌ This will cause an error
// const a; // SyntaxError: Missing initializer in const declaration
```

### Variable Scope

- `let` and `const` → **block-scoped** (only accessible inside `{}`)
- `var` → **function-scoped** or **global-scoped** (ignores block scope)

```javascript
var c = 1;
var c = 2;
console.log(c); // 2

// var example
if (Math.random() > 0.5) {
  var y = 5;
}
console.log(y); // 5 → var is function/global scoped

// let example
if (Math.random() > 0.5) {
  let y = 5;
}
console.log(y); // ReferenceError: y is not defined

// const example
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

## 2. Data Structures and Types

JavaScript has several **primitive data types**:

- **Boolean**: `true` or `false`
- **null**: A special keyword representing a null value.\
  *Case-sensitive*: `null` ≠ `Null` ≠ `NULL`
- **undefined**: A top-level property whose value is not defined
- **Number**: Integer or floating-point numbers\
  *Example*: `42`, `3.14159`
- **BigInt**: Integer with arbitrary precision\
  *Example*: `9007199254740992n`
- **String**: Sequence of characters representing text\
  *Example*: `"Howdy"`
- **Symbol**: A unique and immutable primitive value

### Examples

```javascript
let isAlive = true;       // Boolean
let emptyValue = null;    // null
let notAssigned;          // undefined
let age = 25;             // Number
let bigNumber = 9007199254740992n; // BigInt
let greeting = "Hello";   // String
let uniqueId = Symbol("id"); // Symbol
```

## Summary

- Variables store data and have different scopes based on `var`, `let`, or `const`.
- JavaScript has multiple primitive types: `Boolean`, `null`, `undefined`, `Number`, `BigInt`, `String`, `Symbol`.
- Always initialize `const` variables. Use `let` or `const` instead of `var` in modern code for better scoping.
