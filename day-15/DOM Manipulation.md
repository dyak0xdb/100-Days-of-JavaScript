# DOM Manipulation Examples

## Creating a New Element

We can use the DOM to create a new tag or element. For example:

```javascript
const x = document.createElement("h1");
````

We can also add other properties, values, and attributes. For example:

```javascript
x.id = "xid";
x.setAttribute("title", "xtitle");
x.innerText = "webprog.io";
```

If we want to add this element to the body, we can use:

```javascript
document.body.appendChild(x);
```

---

## Using HTML as a String

We can also set a tag inside a variable as a string:

```javascript
const x = '<h1>happy hacking :)</h1>';
document.body.innerHTML = x;
```

---

## Replacing a Tag or Element

To replace an existing element:

```javascript
const change = document.getElementById("h1_id");
console.log(change.innerText);

const replace_tag = document.createElement("a");
replace_tag.href = 'https://google.com'; // output: href="https://google.com"
replace_tag.innerText = "click for me";

console.log(replace_tag);

// Replace the element
change.replaceWith(replace_tag);
```

> Here, we use the `replaceWith()` method to replace an element with another.

---

## Deleting an Element

To remove an element from the DOM:

```javascript
element.remove();
```
