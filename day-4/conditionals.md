
# JavaScript Conditionals

Reference: [W3Schools JavaScript Conditionals](https://www.w3schools.com/js/js_conditionals.asp)

## Overview
Conditional statements in JavaScript allow you to execute different code blocks based on whether a condition evaluates to true or false.

### Types of Conditional Statements
- `if`
- `if...else`
- `if...else if...else`
- `switch`
- Ternary operator (`?:`)

## When to Use Conditionals
- Use `if` to execute a code block when a specified condition is true.
- Use `else` to execute a code block when the same condition is false.
- Use `else if` to test a new condition if the first condition is false.
- Use `switch` to select one of many code blocks to execute.
- Use the ternary operator (`?:`) as a shorthand for simple `if...else` statements.

## The `if` Statement
Executes a code block if the specified condition is true.

### Syntax
```javascript
if (condition) {
  // code to execute if the condition is true
}
```

## The `else` Statement
Executes a code block if the same condition is false.

### Syntax
```javascript
if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}
```

## The `else if` Statement
Tests a new condition if the first condition is false.

### Syntax
```javascript
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition1 is false and condition2 is true
} else {
  // code to execute if condition1 is false and condition2 is false
}
```

## The `switch` Statement
Selects one of many code blocks to execute based on the value of an expression.

### Syntax
```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

## Ternary Operator (`?:`)
A concise way to write simple `if...else` statements.

### Syntax
```javascript
condition ? expression1 : expression2
```

### Example
```javascript
let order = (stock > 20) ? alert(1) : alert(2);
```
