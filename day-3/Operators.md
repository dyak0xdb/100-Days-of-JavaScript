# JavaScript Operators

**Reference**: [W3Schools JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)

JavaScript operators are used for mathematical and logical computations. They allow manipulation of variables and values through arithmetic, assignment, comparison, and logical operations.

## Types of JavaScript Operators

JavaScript supports several types of operators:

- **Arithmetic Operators**: Perform mathematical calculations.
- **Assignment Operators**: Assign values to variables.
- **Comparison Operators**: Compare values and return `true` or `false`.
- **Logical Operators**: Perform logical operations, often used in conditional statements.
- And more (e.g., Bitwise Operators, Type Operators, etc.).

---

## Arithmetic Operators

Arithmetic operators are used for mathematical computations.

### Operator Table

| Operator | Description                   | Example            |
|----------|-------------------------------|--------------------|
| `+`      | Addition                      | `5 + 3` // 8      |
| `-`      | Subtraction                   | `5 - 3` // 2      |
| `*`      | Multiplication                | `5 * 3` // 15     |
| `**`     | Exponentiation                | `2 ** 3` // 8     |
| `/`      | Division                      | `6 / 2` // 3      |
| `%`      | Modulus (Division Remainder)  | `5 % 2` // 1      |
| `++`     | Increment                     | `x++` // x + 1    |
| `--`     | Decrement                     | `x--` // x - 1    |

### Examples

#### Addition
```javascript
let x = 5;
let y = 2;
let z = x + y; // 7
```

#### Multiplication
```javascript
let a = 2;
let b = 3;
let z = a * b; // 6
```

#### Complex Multiplication
```javascript
let x = (100 * 50) * 3; // 15000
```

---

## String Addition

In JavaScript, the `+` operator can concatenate strings or combine strings with numbers. When a number is added to a string, the number is converted to a string, resulting in concatenation.

### Examples

#### Concatenating Strings
```javascript
let _1 = "0xdb";
let _2 = "786";
let _result = _1 + " " + _2;
console.log(_result); // "0xdb 786"
```

#### Adding Strings and Numbers
```javascript
let x = 5 + 5; // 10
let y = "5" + 5; // "55"
let z = "Hello" + 5; // "Hello5"
```

---

## Assignment Operators

Assignment operators are used to assign values to variables, often combining assignment with arithmetic operations.

### Operator Table

| Operator | Example      | Same As           |
|----------|--------------|-------------------|
| `=`      | `x = y`      | `x = y`           |
| `+=`     | `x += y`     | `x = x + y`       |
| `-=`     | `x -= y`     | `x = x - y`       |
| `*=`     | `x *= y`     | `x = x * y`       |
| `/=`     | `x /= y`     | `x = x / y`       |
| `%=`     | `x %= y`     | `x = x % y`       |
| `**=`    | `x **= y`    | `x = x ** y`      |

### Example
```javascript
let x = 10;
x += 5; // 15
```

---

## Comparison Operators

Comparison operators compare values and return `true` or `false`.

### Operator Table

| Operator | Description                       | Example            |
|----------|-----------------------------------|--------------------|
| `==`     | Equal to                          | `x == 5`          |
| `===`    | Equal value and equal type        | `x === 5`         |
| `!=`     | Not equal                         | `x != 5`          |
| `!==`    | Not equal value or not equal type | `x !== 5`         |
| `>`      | Greater than                      | `x > 5`           |
| `<`      | Less than                         | `x < 5`           |
| `>=`     | Greater than or equal to          | `x >= 5`          |
| `<=`     | Less than or equal to             | `x <= 5`          |

### Example
```javascript
let x = 2;
let a = 4;
console.log(a > x); // true
```

---

## Logical Operators

Logical operators are used to combine conditions, returning `true` or `false` based on the evaluation.

### Logical AND (`&&`)
Returns `true` only if both operands are `true`.

```javascript
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

#### Example
```javascript
let _age = 12;
if (_age == 12 && typeof _age === "number") {
    alert("Condition met");
}
```

### Logical OR (`||`)
Returns `true` if at least one operand is `true`.

```javascript
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

#### Example
```javascript
let _age = 12;
if (_age == 12 || typeof _age === "number") {
    alert("Condition met");
}
```

### Logical NOT (`!`)
Inverts the truth value of the operand.

```javascript
!true  // false
!false // true
```

#### Example
```javascript
let _ = false;
if (!_) {
    alert(1);
}
```

---

## Additional Resources

For practice, try the [W3Schools JavaScript Operators Quiz](https://www.w3schools.com/js/exercise.asp?filename=exercise_operators1).
