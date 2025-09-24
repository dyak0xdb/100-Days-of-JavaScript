# JavaScript Comparison Operators

**Reference**: [W3Schools JavaScript Comparison](https://www.w3schools.com/js/js_comparisons.asp)

JavaScript comparison operators are used to compare two values, always returning `true` or `false`. They are commonly used in conditional statements to evaluate relationships between numbers, strings, or other types.

---

## Comparison Operators

Comparison operators compare two values and return a boolean result (`true` or `false`). The behavior depends on the types of the operands (e.g., numbers, strings) and how JavaScript handles type coercion.

### Common Comparison Operators

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

---

## String Comparison

When comparing strings, JavaScript uses lexicographical order based on the Unicode values of the characters.

### Example
```javascript
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result); // true
```

**Why true?** In the Unicode table, "A" (Unicode 65) comes before "B" (Unicode 66), so `text1 < text2` evaluates to `true`.

---

## Number and String Comparisons

JavaScript performs type coercion when comparing values of different types. If a string can be converted to a number, it is converted before comparison. If conversion fails, the result is often `false` due to `NaN`.

### Examples
```javascript
console.log(2 < 12); // true
// Because 2 is less than 12.
```

```javascript
console.log(2 < "12"); // true
// The string "12" is converted to the number 12, so 2 < 12 is true.
```

```javascript
console.log(2 < "John"); // false
// "John" cannot be converted to a number, becomes NaN, and any comparison with NaN is false.
```

```javascript
console.log(2 > "John"); // false
// Same reason: "John" becomes NaN, so comparison yields false.
```

```javascript
console.log(2 == "John"); // false
// "John" becomes NaN, and comparing a number with NaN is false.
```

```javascript
console.log("2" < "12"); // false
// Strings are compared lexicographically. "2" (Unicode 50) is greater than "1" (Unicode 49), so "2" < "12" is false.
```

```javascript
console.log("2" > "12"); // true
// Lexicographically, "2" (Unicode 50) is greater than "1" (Unicode 49), so "2" > "12" is true.
```

```javascript
console.log("2" == "12"); // false
// Strings are compared for exact equality, and "2" is not equal to "12".
```

---

## Additional Resources

For practice, try the [W3Schools JavaScript Comparison Quiz](https://www.w3schools.com/js/exercise.asp?filename=exercise_comparisons1).
