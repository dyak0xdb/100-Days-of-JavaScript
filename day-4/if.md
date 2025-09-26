# JavaScript `if` Statement

Reference: [W3Schools JavaScript if](https://www.w3schools.com/js/js_if.asp)

## Syntax
The `if` statement executes a block of code if a specified condition evaluates to true.

```javascript
if (condition) {
  // block of code to be executed if the condition is true
}
```

**Note**: The keyword `if` must be in lowercase letters. Using uppercase letters (`If` or `IF`) will result in a JavaScript error.

## Example
```javascript
let age = 18;
let text = "You can Not drive";

if (age >= 18) {
  text = "You can drive";
}
```

## Nested `if` Statement
You can place an `if` statement inside another `if` statement to create nested conditions.

### Example
```javascript
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}
```
