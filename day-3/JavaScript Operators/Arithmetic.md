# JavaScript Arithmetic Operators

**Reference**: [W3Schools JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)

JavaScript arithmetic operators are used to perform mathematical calculations on numbers. These include addition, subtraction, multiplication, division, modulus, increment, decrement, and exponentiation.

---

## Arithmetic Operators

### Addition
The addition operator (`+`) adds numbers.

```javascript
let x = 100 + 50; // 150
```

```javascript
let x = 5;
let y = 2;
let z = x + y; // 7
```

### Subtraction
The subtraction operator (`-`) subtracts numbers.

```javascript
let x = 5;
let y = 2;
let z = x - y; // 3
```

### Multiplication
The multiplication operator (`*`) multiplies numbers.

```javascript
let x = 5;
let y = 2;
let z = x * y; // 10
```

```javascript
let a = 2;
let x = (100 + 50) * a; // 300
```

### Division
The division operator (`/`) divides numbers.

```javascript
let x = 5;
let y = 2;
let z = x / y; // 2.5
```

### Modulus
The modulus operator (`%`) returns the remainder of a division.

```javascript
let x = 5;
let y = 2;
let z = x % y; // 1
```

### Increment
The increment operator (`++`) increases a number by 1. It can be used as a prefix (`++x`) or postfix (`x++`), with no difference in the result when used in isolation.

```javascript
let x = 5;
++x; // 6
```

```javascript
let x = 5;
x++; // 6
```

**Note**: Both `++x` (prefix) and `x++` (postfix) produce the same result when used standalone. However, in expressions, prefix increments before the value is used, while postfix increments after.

### Decrement
The decrement operator (`--`) decreases a number by 1.

```javascript
let x = 5;
x--; // 4
```

### Exponentiation
The exponentiation operator (`**`) raises the first operand to the power of the second operand.

```javascript
let x = 5;
let z = x ** 2; // 25
```

Alternatively, you can use `Math.pow()` for exponentiation:

```javascript
let $ = 5;
let _ = 2;
console.log(Math.pow($, _)); // 25
```

---

## Operator Precedence

Operator precedence determines the order in which operations are performed in an arithmetic expression. Multiplication (`*`) and division (`/`) have higher precedence than addition (`+`) and subtraction (`-`). Parentheses can be used to override the default precedence.

### Examples

Without parentheses, multiplication is evaluated first:

```javascript
let x = 100 + 50 * 3; // 50 * 3 = 150, then 100 + 150 = 250
console.log(x); // 250
```

With parentheses, the expression inside is evaluated first:

```javascript
let x = (100 + 50) * 3; // 100 + 50 = 150, then 150 * 3 = 450
console.log(x); // 450
```

---

## Additional Resources

For practice, try the [W3Schools JavaScript Arithmetic Quiz](https://www.w3schools.com/js/exercise.asp?filename=exercise_arithmetic1).
