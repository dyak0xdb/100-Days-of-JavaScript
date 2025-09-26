# JavaScript `switch` Statement

Reference: [W3Schools JavaScript Switch](https://www.w3schools.com/js/js_switch.asp)

## Syntax
The `switch` statement evaluates an expression and executes the corresponding code block based on matching case values.

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

## How It Works
- The `switch` expression is evaluated once.
- The value of the expression is compared with the values of each `case`.
- If there is a match, the associated block of code is executed.
- If there is no match, the `default` block (if provided) is executed.
- The `break` statement exits the `switch` block to prevent fall-through to subsequent cases.

## Example
The `getDay()` method returns the weekday as a number between 0 and 6 (Sunday=0, Monday=1, Tuesday=2, ..., Saturday=6). This example uses the weekday number to determine the weekday name:

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
```
