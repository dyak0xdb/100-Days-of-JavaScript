# Escape Characters in JavaScript

Escape Characters are special characters that take on a special meaning when preceded by a \ (backslash).

---

## Example

```javascript
let text = "Ali said: \"Hello!\"";
console.log(text);
```

**Result:**

```
Ali said: "Hello!"
```

If you didn't put the `\"`, JavaScript would think your string was over and would throw an error.

---

## Additional Examples

```javascript
// let text = "Ali said: \"Hello!\"";
// let text = 'It\'s a nice day!'; // It's a nice day!
// let path = "C:\\Users\\Ali\\Documents"; // C:\Users\Ali\Documents
// let text = "Hello\nWorld"; // Hello
//                             World

// let text = "a\tb\tc" // a  b c
// let text = "ABC \b D"; // ABC  

// let text = "\u0061"; // a
// let text = "\x3c\x69"; // H و i
```

---

## Six Other Escape Sequences in JavaScript

| Code | Result              |
|------|---------------------|
| \b   | Backspace           |
| \f   | Form Feed           |
| \n   | New Line            |
| \r   | Carriage Return     |
| \t   | Horizontal Tabulator|
| \v   | Vertical Tabulator  |
