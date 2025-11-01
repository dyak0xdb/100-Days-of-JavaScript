
# JavaScript Array Methods

## push()
`push()` adds one or more elements to the end of an array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
````

---

## pop()

`pop()` removes the last item from an array.

```javascript
let a = [1, 2, 3];
a.pop();
console.log(a); // [1, 2]
```

---

## unshift()

`unshift()` adds one or more items to the beginning of an array.

```javascript
let a = [2, 3];
a.unshift(1);
console.log(a); // [1, 2, 3]
```

---

## shift()

`shift()` removes the first item from an array.

```javascript
let a = [1, 2, 3];
a.shift();
console.log(a); // [2, 3]
```

---

## reverse()

`reverse()` reverses the order of elements in an array.

```javascript
let a = [1, 2, 3];
a.reverse();
console.log(a); // [3, 2, 1]
```

---

## includes()

`includes()` checks if an array contains a specific value.

```javascript
let a = [1, 2, 3];
console.log(a.includes(2)); // true
```

---

## indexOf()

`indexOf()` returns the first index of a given value in an array (or -1 if not found).

```javascript
let a = [1, 2, 3];
console.log(a.indexOf(2)); // 1
```

---

## slice()

`slice()` returns a shallow copy of a part of an array.

```javascript
let a = [1, 2, 3, 4];
console.log(a.slice(1, 3)); // [2, 3]
```

---

## splice()

`splice()` removes or replaces elements in an array and can insert new items.

```javascript
let a = [1, 2, 3];
a.splice(1, 1);
console.log(a); // [1, 3]
```

---

## concat() / Spread Operator

`concat()` or the spread operator `(...)` combines arrays.

```javascript
let a = [1, 2, 3];
let d = [786, 678];

let x = [...a, ...d];
console.log(x); // [1, 2, 3, 786, 678]
```

---

## flat()

`flat()` flattens nested arrays into a single-level array.

```javascript
let a = [1, [2, 3]];
console.log(a.flat()); // [1, 2, 3]
```

---

## Array.isArray()

`Array.isArray()` checks if a value is an array.

```javascript
let a = [1, 2, 3];
console.log(Array.isArray(a)); // true
```

---

## Array.from()

`Array.from()` creates a new array from an array-like or iterable object.

```javascript
let str = "123";
let a = Array.from(str);
console.log(a); // ["1", "2", "3"]
```

---

## Array.of()

`Array.of()` creates a new array from its arguments.

```javascript
let a = Array.of(1, 2, 3);
console.log(a); // [1, 2, 3]
```
