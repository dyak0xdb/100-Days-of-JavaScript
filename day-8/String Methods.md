# JavaScript String Methods

## 1️⃣ Get Characters
- `charAt(index)` → get character at position
- `charCodeAt(index)` → get UTF-16 number of char
- `codePointAt(index)` → get Unicode number
- `at(index)` → like `charAt`, negative works too
```js
let str = "HELLO";
str.charAt(0); // "H"
str.at(-1);    // last char
```
- `[index]` → same as charAt, quick way
```js
str[0]; // "H"
```

## 2️⃣ Join Strings
- `concat()` → join two or more strings
```js
"HELLO".concat(" ", "WORLD"); // "HELLO WORLD"
```

## 3️⃣ Get Part of a String
- `slice(start,end)` → get from start to end (end not included), negative works
- `substring(start,end)` → like slice, negative becomes 0
- `substr(start,length)` → start + length
```js
let str = "Hello";
str.slice(1,4);     // "ell"
str.slice(-2);      // "lo"
str.substring(1,4); // "ell"
str.substr(1,3);    // "ell"
```

## 4️⃣ Change Case
- `toUpperCase()` → make all letters uppercase
- `toLowerCase()` → make all letters lowercase
```js
"Hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"
```

## 5️⃣ Unicode Safety
- `isWellFormed()` → check if string is valid Unicode
- `toWellFormed()` → fix broken Unicode, replace bad chars with "�"
```js
"👍".isWellFormed();        // true
"\uD800".isWellFormed();    // false
"\uD800".toWellFormed();    // "�"
```

## 6️⃣ Remove Spaces
- `trim()` → remove spaces both sides
- `trimStart()` → remove spaces from start
- `trimEnd()` → remove spaces from end
```js
"   Hello   ".trim();      // "Hello"
"   Hello".trimStart();    // "Hello"
"Hello   ".trimEnd();      // "Hello"
```

## 7️⃣ Add Padding
- `padStart(length, char)` → add char at start until length
- `padEnd(length, char)` → add char at end until length
```js
"5".padStart(3,"0"); // "005"
"5".padEnd(4,"0");   // "5000"
```

## 8️⃣ Repeat String
- `repeat(n)` → repeat string n times
```js
"Hi! ".repeat(3); // "Hi! Hi! Hi! "
```

## 9️⃣ Replace Content
- `replace(old,new)` → replace first match
```js
"apple banana apple".replace("apple","orange"); // "orange banana apple"
```
- `replaceAll(old,new)` → replace all matches
```js
"apple banana apple".replaceAll("apple","orange"); // "orange banana orange"
```

## 10️⃣ Regular Expressions
- `/i` → ignore case (big/small letters same)
```js
"Microsoft".replace(/MICROSOFT/i,"W3Schools"); // works
```
- `/g` → global, change all matches
```js
"apple banana apple".replace(/apple/g,"orange"); // all replaced
```

## 11️⃣ Split String
- `split(separator)` → split string into array
```js
"apple,banana,kiwi".split(","); // ["apple","banana","kiwi"]
```
<a href="https://www.w3schools.com/js/js_string_methods.asp">refrence</a>
