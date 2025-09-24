# JavaScript Symbols: Unique Keys and Hidden Properties

## What is a Symbol?

A `Symbol` is a primitive data type in JavaScript, introduced in ECMAScript 2015 (ES6). It is used to create unique identifiers, often for object properties, to avoid naming collisions. Each `Symbol` is guaranteed to be unique, even if created with the same description.

## Syntax and Uniqueness

```javascript
let sym1 = Symbol();
let sym2 = Symbol("id");
let sym3 = Symbol("id");

console.log(sym2 === sym3); // false
```

### Why `false`?
Even if two Symbols have the same description (e.g., `"id"`), they are distinct and unique. Every time you call `Symbol()`, a new, unique value is created. This ensures that Symbols can be used as unique property keys without conflicts.

## Using Symbols as Unique Object Keys

Symbols are commonly used to define unique, non-enumerable property keys in objects. This makes them "hidden" from standard property enumeration methods like `Object.keys()` or `for...in` loops.

### Example

```javascript
let user = { name: "0xdb" };
let id = Symbol("786");

user[id] = "ok";
console.log(user); // { name: "0xdb", Symbol(786): "ok" }
```

In this example:
- A `Symbol` named `id` with the description `"786"` is created.
- The `Symbol` is used as a key in the `user` object to store the value `"ok"`.
- The object now has a property that is uniquely identified by the `Symbol`.

### Why Are Symbols Hidden?

Symbol properties are not enumerable by default. This means they do not appear when you use methods like `Object.keys()` or loop through the object with `for...in`.

```javascript
console.log(Object.keys(user)); // ["name"]
```

The output only shows `"name"` because the `Symbol` key is not included in `Object.keys()`.

### Accessing Symbol Properties

To retrieve Symbol properties, you can use `Object.getOwnPropertySymbols()`:

```javascript
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(786)]
```

This method returns an array of all Symbol keys in the object, allowing you to access them if needed.

## Key Takeaways

- **Uniqueness**: Every `Symbol` is unique, even with the same description.
- **Hidden Properties**: Symbol properties are not enumerable, making them "hidden" from standard property iteration methods.
- **Use Case**: Symbols are ideal for creating unique object keys to avoid naming conflicts or to store metadata privately.

For more information on Symbols, refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
