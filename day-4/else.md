# JavaScript `else` Statement

Reference: [W3Schools JavaScript if...else](https://www.w3schools.com/js/js_if_else.asp)

## The `else` Statement
The `else` statement specifies a block of code to be executed if a condition is false.

### Syntax
```javascript
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

### Example
If the hour is less than 18, create a "Good day" greeting; otherwise, create a "Good evening" greeting:

```javascript
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## The `else if` Statement
The `else if` statement allows you to test additional conditions if the previous conditions are false.

### Example
If the time is less than 10:00, create a "Good morning" greeting; if not, but the time is less than 20:00, create a "Good day" greeting; otherwise, create a "Good evening" greeting:

```javascript
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```
