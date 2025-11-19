# Selecting and Manipulating DOM Elements in JavaScript

## `document.getElementById()`

Selects a single element by its **id**.

```javascript
// Select element with id "xss"
const elem = document.getElementById("xss");

// Change class
elem.setAttribute("class", "newclass");

// Change text content
elem.textContent = "Hello World";

// Change inner HTML
elem.innerHTML = "<strong>dede</strong>";

// Change style
elem.style.color = "blue";
````

---

## `document.querySelector()`

Selects the **first element** that matches a CSS selector.

```javascript
document.querySelector("h1");   // selects first <h1>
document.querySelector("#h2");  // selects element with id="h2"
document.querySelector(".h2");  // selects first element with class="h2"
```

---

## `document.querySelectorAll()`

Selects **all elements** that match a CSS selector.

```javascript
document.querySelectorAll("h1");  // returns NodeList of all <h1> elements
```

---

## `document.getElementsByClassName()`

Returns a **live HTMLCollection** of elements with the given class name.

```javascript
document.getElementsByClassName("ss")[0]; // selects the first element with class "ss"
```

---

## `document.getElementsByTagName()`

Returns a **live HTMLCollection** of elements with the given tag name.

```javascript
document.getElementsByTagName("div"); // selects all <div> elements
```

---

### Notes

* `querySelector` and `querySelectorAll` use **CSS selectors**.
* `getElementsByClassName` and `getElementsByTagName` return **live collections**, meaning they update automatically if the DOM changes.
* `getElementById` always returns a **single element**.
If you want, I can **combine this with all your previous DOM, loops, arrays, destructuring, and JS notes** into one **complete `.md` file** for learning and reference.
