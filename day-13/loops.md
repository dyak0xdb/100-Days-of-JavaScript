# `for...of` and `for...in` Loops in JavaScript

## The `for...of` Loop

The `for...of` loop is one of the simplest and most powerful ways to iterate over **iterable** values such as:

- Arrays  
- Strings  
- Map  
- Set  
- NodeList  

### Example: Converting a Classic `for` Loop to `for...of`

Original:

```javascript
let arr = ['as', 'dwe', 'rtgr'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
````

Converted to `for...of`:

```javascript
let fruits = ["apple", "banana", "mango"];

for (const f of fruits) {
  console.log(f);
}
```

---

## The `for...in` Loop

The `for...in` loop is used to iterate over **keys** (object property names or array indexes).

### Example With an Object

```javascript
const user = {
  name: "ali",
  age: 21,
  city: "istanbul"
};

for (const key in user) {
  console.log(key, user[key]);
}
```

### Example With an Array

```javascript
const arr = ["a", "b", "c"];

for (const index in arr) {
  console.log(arr[index]);
}
```

---

## Important Notes

### ❗ 1. `for...in` is NOT recommended for arrays

Because:

* It does **not guarantee ordering**
* It may read **inherited properties** that are not actual array elements

### ✅ Use these instead for arrays:

* `for...of`
* `forEach()`
* Classic `for` loop
