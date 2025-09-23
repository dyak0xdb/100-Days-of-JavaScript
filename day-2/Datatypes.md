```markdown
# JavaScript Datatypes

JavaScript supports 8 datatypes that variables can hold. This document outlines these datatypes, provides examples, and explains related concepts like the `typeof` operator, strings, numbers, booleans, undefined, and empty values.

## Datatypes

| Type          | Description                                      |
|---------------|--------------------------------------------------|
| **String**    | A sequence of text characters enclosed in quotes |
| **Number**    | A numeric value (integer or floating-point)      |
| **BigInt**    | A large integer beyond the Number range          |
| **Boolean**   | Represents `true` or `false`                     |
| **Object**    | A collection of key-value pairs                 |
| **Undefined** | A variable declared but not assigned a value     |
| **Null**      | A primitive value representing object absence    |
| **Symbol**    | A unique and immutable primitive identifier      |

## Examples

```js
// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let bigNum1 = 1234567890123456789012345n;
let bigNum2 = BigInt(1234567890123456789012345);

// Boolean
let bool1 = true;
let bool2 = false;

// Object
const person = { firstName: "John", lastName: "Doe" };

// Array Object
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");

// Undefined
let xUndefined;
let yUndefined;

// Null
let xNull = null;
let yNull = null;

// Symbol
const sym1 = Symbol();
const sym2 = Symbol();
```

## The `typeof` Operator

The `typeof` operator returns the datatype of a variable or expression as a string.

### Examples

```js
typeof ""          // Returns "string"
typeof "John"      // Returns "string"
typeof 0           // Returns "number"
typeof 3.14        // Returns "number"
typeof (3 + 4)     // Returns "number"
```

## JavaScript Strings

Strings are sequences of characters, enclosed in single (`'`) or double (`"`) quotes. Quotes inside a string are allowed if they differ from the enclosing quotes.

### Examples

```js
let carName1 = "Volvo XC60";          // Double quotes
let carName2 = 'Volvo XC60';          // Single quotes
let answer1 = "It's alright";          // Single quote inside double quotes
let answer2 = "He is called 'Johnny'"; // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes
```

## JavaScript Numbers

JavaScript numbers are stored as floating-point decimals, with or without decimal points. Exponential notation is supported for very large or small numbers.

### Examples

```js
let x1 = 34.00;    // With decimals
let x2 = 34;       // Without decimals
let y = 123e5;     // 12300000 (exponential notation)
let z = 123e-5;    // 0.00123 (exponential notation)
```

## JavaScript Booleans

Booleans represent `true` or `false` and are commonly used in comparisons.

### Example Comparisons

| Description       | Expression  | Returns |
|-------------------|-------------|---------|
| Equal to          | `x == 8`    | `false` |
| Not equal to      | `x != 8`    | `true`  |
| Greater than      | `x > 8`     | `false` |
| Less than         | `x < 8`     | `true`  |

## Undefined

A variable declared without a value has the datatype `undefined` and the value `undefined`.

### Example

```js
let carName; // Value is undefined, type is "undefined"
```

## Empty Values

An empty string is a valid value with the type `string`, distinct from `undefined`.

### Example

```js
let car = ""; // Value is "", type is "string"
```

## Reference

For more details, see [W3Schools JavaScript Datatypes](https://www.w3schools.com/js/js_types.asp).

## Additional Notes

- **String**: Can include letters, numbers, or symbols, enclosed in quotes.
- **Number**: Supports integers and decimals (e.g., `42`, `3.14`).
- **BigInt**: Used for integers beyond the safe `Number` range.
- **Boolean**: Basis for logical operations and comparisons.
- **Object**: Includes complex types like arrays and dates.
- **Undefined**: Indicates a variable without an assigned value.
- **Null**: Represents an intentional absence of an object.
- **Symbol**: Useful for creating unique identifiers, often for object keys.

*Source: W3Schools, Copyright 1999-2025 by Refsnes Data. All Rights Reserved.*
```
