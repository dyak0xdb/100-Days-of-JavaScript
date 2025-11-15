# Logical Operators in JavaScript  
`&&`, `||`, `!`, and `??`

---

## Basic Logical Operators

### AND — `&&`
Returns **the first falsy value** or, if none exist, **the last value**.

Examples:

```javascript
a = 10 && 20;            // 20
a = 10 && 20 && 30;      // 30
a = 10 && 0 && 30;       // 0 (first falsy)
a = 10 && '' && 0 && 30; // '' (first falsy)
console.log(a);
````

---

### OR — `||`

Returns **the first truthy value** or, if none exist, **the last value**.

```javascript
let b;

b = 10 || 20;                          // 10
b = 0 || 20;                           // 20
b = 0 || null || undefined || 30;      // 30
console.log(b);
```

---

### Using `&&` in Conditions

```javascript
const posts = ["post 1", "post 2"];
// const posts = [];

posts.length > 0 && console.log(posts[0]);  
// Prints "post 1" only if the array is not empty
```

---

## NOT — `!`

Negates a boolean value:

```javascript
const a = true;

if (!a) {
  console.log("If");
} else {
  console.log("else"); // this runs
}
```

---

## Nullish Coalescing — `??`

`??` returns the **right side** only when the **left side is null or undefined**.

```javascript
let c;

c = 10 ?? 20;        // 10
c = null ?? 20;      // 20
c = undefined ?? 30; // 30
c = 0 ?? 30;         // 0 (0 is NOT null/undefined)
c = '' ?? 30;        // '' (empty string is NOT null/undefined)

console.log(c);
```

---

# Logical Assignment Operators

## Logical OR Assignment — `||=`

This operator assigns a value **only if the left side is falsy**.

Falsy values:
`0`, `""`, `false`, `null`, `undefined`, `NaN`

Example:

```javascript
let name = "";
name ||= "default";  // left side is falsy → assign "default"

console.log(name); // "default"
```

---

## Logical AND Assignment — `&&=`

This operator assigns a value **only if the left side is truthy**.

```javascript
let count = 5;
count &&= 10;   // left is truthy → assign 10
console.log(count); // 10
```

---

# Truthy and Falsy (Quick Summary)

## Falsy Values

* `0`
* `""` (empty string)
* `false`
* `null`
* `undefined`
* `NaN`

## Truthy Values

Everything **not** in the falsy list, including:

* `true`
* `"0"`
* `" "` (space)
* `"false"`
* `[]`
* `{}`
* `function(){}`
