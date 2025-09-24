
# JavaScript Assignment Operators

**Reference**: [W3Schools JavaScript Assignment](https://www.w3schools.com/js/js_assignment.asp)

JavaScript assignment operators are used to assign values to variables. They can also combine arithmetic or logical operations with assignment. This document covers standard assignment operators, logical assignment operators, string assignment, and related concepts like the spread operator with `Math.min()`.

---

## Standard Assignment Operators

Assignment operators assign values to variables, often combining arithmetic operations. Given `x = 10` and `y = 5`, the table below explains the operators:

| Operator | Example     | Same As          | Result       |
|----------|-------------|------------------|--------------|
| `=`      | `x = y`     | `x = y`          | `x = 5`      |
| `+=`     | `x += y`    | `x = x + y`      | `x = 15`     |
| `-=`     | `x -= y`    | `x = x - y`      | `x = 5`      |
| `*=`     | `x *= y`    | `x = x * y`      | `x = 50`     |
| `**=`    | `x **= y`   | `x = x ** y`     | `x = 100000` |
| `/=`     | `x /= y`    | `x = x / y`      | `x = 2`      |
| `%=`     | `x %= y`    | `x = x % y`      | `x = 0`      |

### Examples

#### The `=` Operator
```javascript
let x = 10;
x = 5; // x = 5
```

#### The `+=` Operator
```javascript
let x = 10;
x += 5; // x = 15
```

#### The `-=` Operator
```javascript
let x = 10;
x -= 5; // x = 5
```

#### The `*=` Operator
```javascript
let x = 10;
x *= 5; // x = 50
```

#### The `**=` Operator
```javascript
let x = 10;
x **= 5; // x = 100000
```

#### The `/=` Operator
```javascript
let x = 10;
x /= 5; // x = 2
```

#### The `%=` Operator
```javascript
let x = 10;
x %= 5; // x = 0
```

---

## Logical Assignment Operators

Logical assignment operators combine logical operations with assignment, modifying a variable based on its truthiness or nullish status.

### Logical AND Assignment (`&&=`)
The `&&=` operator assigns a value to a variable only if the variable is truthy.

**Logic**: If `x` is truthy, assign `y` to `x`. If `x` is falsy, do nothing.

```javascript
let x = true;
x &&= 10;
console.log(x); // 10
```

```javascript
let x = "true";
x &&= "0xdb";
console.log(x); // "0xdb"
```

**Note**: In JavaScript, an empty string (`""`) is falsy, while any non-empty string is truthy.

### Logical OR Assignment (`||=`)
The `||=` operator assigns a value to a variable only if the variable is falsy.

**Logic**: If `x` is falsy, assign `y` to `x`. If `x` is truthy, do nothing.

**Equivalent to**:
```javascript
if (!x) {
    x = y;
}
```

```javascript
let x = "";
x ||= "0xdb";
console.log(x); // "0xdb"
```

### Logical Nullish Assignment (`??=`)
The `??=` operator assigns a value to a variable only if the variable is `null` or `undefined`.

**Logic**: If `x` is `null` or `undefined`, assign `y` to `x`. Otherwise, do nothing.

**Equivalent to**:
```javascript
if (x === null || x === undefined) {
    x = y;
}
```

```javascript
let x = null;
x ??= 10;
console.log(x); // 10
```

```javascript
let x = 0;
x ??= 100;
console.log(x); // 0 (unchanged)
```

---

## String Assignment

The addition assignment operator (`+=`) can be used to concatenate strings.

```javascript
let text = "Hello";
text += " World";
console.log(text); // "Hello World"
```

---

## Spread Operator and `Math.min()`

The spread operator (`...`) extracts elements from an array, allowing them to be passed as individual arguments to functions like `Math.min()`, which returns the smallest number among its arguments.

### Example
```javascript
let arr = [3, 7, 2, 9];
console.log(arr); // [3, 7, 2, 9]
console.log(...arr); // 3 7 2 9
console.log(Math.min(...arr)); // 2
```

---

## Additional Resources

For practice, try the [W3Schools JavaScript Assignment Quiz](https://www.w3schools.com/js/exercise.asp?filename=exercise_assignment1).
