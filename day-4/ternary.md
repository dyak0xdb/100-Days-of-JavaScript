# JavaScript Conditional (Ternary) Operator

Reference: [W3Schools JavaScript Ternary Operator](https://www.w3schools.com/js/js_if_ternary.asp)

## Overview
The ternary operator (`?:`) is a concise way to write an `if...else` statement. It evaluates a condition and returns one of two values based on whether the condition is true or false.

### Syntax
```javascript
condition ? expression1 : expression2
```

### Parameters
| Parameter   | Description |
|-------------|-------------|
| `condition` | Required. The condition to be tested. An expression that evaluates to `true` or `false`. |
| `?`         | Required. The operator separating the condition from the expressions. |
| `expression1` | Required. The value to return if the condition is `true`. |
| `:`         | Required. The operator separating the expressions. |
| `expression2` | Required. The value to return if the condition is `false`. |

### Example
If the value of `age` is less than 18, set the value of `text` to "Minor"; otherwise, set it to "Adult":

```javascript
let text = (age < 18) ? "Minor" : "Adult";
```

### Example with `alert`
```javascript
let s = 21;
let x = 21;
(s >= x) ? alert(origin) : alert(2);
```

## Ternary Inside Ternary
The ternary operator can be nested to handle multiple conditions, similar to nested `if...else` statements.

### `if` Example
```javascript
let stock = 50;
let order = 30;

if (order > 0) {
    if (order <= stock) {
        alert("order true✅");
    } else {
        alert("Not enough inventory.❌");
    }
} else {
    alert("Order quantity must be greater than zero.⚠️");
}
```

### Ternary Example
The same logic as the above `if` example can be written using nested ternary operators:

```javascript
let stock = 50;
let order = 30;

let message = (order > 0) 
    ? (order <= stock ? "order true✅" : "Not enough inventory.❌") 
    : "Order quantity must be greater than zero.⚠️";

alert(message);
```
