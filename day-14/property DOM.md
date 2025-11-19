# Useful DOM Properties in JavaScript
## Basic DOM Properties

### `document.all`
Returns **all elements** in the entire page.

```javascript
document.all
````

### `document.all.length`

Returns **the total number of elements** in the page.

```javascript
document.all.length
```

### `document.documentElement`

Returns the **root `<html>` element** of the page.

```javascript
document.documentElement
```

### `document.body.children`

Returns a **live collection of all direct child elements** inside the `<body>`.

```javascript
document.body.children
```

### `document.links`

Returns all `<a>` and `<area>` elements that **have an `href` attribute**.

```javascript
document.links
```

---

## Additional Important DOM Properties

### `document.head`

Returns the `<head>` element of the page.

```javascript
document.head
```

### `document.title`

Gets or sets the **title of the page**.

```javascript
document.title       // Get
document.title = "New Title"; // Set
```

### `document.URL`

Returns the **full URL of the page**.

```javascript
document.URL
```

### `document.domain`

Returns the **domain** of the page.

```javascript
document.domain
```

### `document.forms`

Returns a **collection of all `<form>` elements**.

```javascript
document.forms
document.forms[0] // first form
```

### `document.images`

Returns a **collection of all `<img>` elements**.

```javascript
document.images
```

### `document.scripts`

Returns a **collection of all `<script>` elements**.

```javascript
document.scripts
```

### `document.cookie`

Gets or sets **cookies** for the page.

```javascript
document.cookie
```

### `document.readyState`

Shows the **loading state of the document**:

* `loading`
* `interactive`
* `complete`

```javascript
document.readyState
```
