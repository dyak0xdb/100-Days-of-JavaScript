# JavaScript Strings as Objects

Normally, JavaScript strings are defined as:

```javascript
let x = "John";
```

But strings can also be defined as objects with the keyword `new`:

```javascript
let y = new String("John");
```

---

## Comparing Strings and String Objects

When using the `===` operator, `x` and `y` are **not equal**:

```javascript
let x = "John";
let y = new String("John");
```

### Example:

```javascript
(x == y) // true or false? `true`
```

This is because the `==` operator compares the values, and both `x` and `y` have the value `"John"`.

```javascript
(x === y) // true or false? `false`
```

This is because the `===` operator compares both value and type, and `x` is a string primitive while `y` is a String object.

---

## Comparing Two String Objects

```javascript
let x = new String("John");
let y = new String("John");
```

### Example:

```javascript
(x == y) // true or false? `false`
```

```javascript
(x === y) // true or false? `false`
```

**Note:** Comparing two JavaScript objects always returns `false`, as they are distinct objects in memory, even if their values are the same.
