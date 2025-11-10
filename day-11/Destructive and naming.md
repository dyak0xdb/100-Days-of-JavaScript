# Destructuring and Naming in JavaScript

## Shorthand Property Names

If the variable name is the same as the object key name, their values will automatically match.

```javascript
const name = "diyako";
const age = 21;

const userdata = {
  name,
  age
};

console.log(userdata); // { name: "diyako", age: 21 }
````

---

## What Is Destructuring?

**Destructuring** is a shorter and cleaner way to extract values from objects or arrays.

### Example

We have this object:

```javascript
const todo = {
  id: 1,
  title: "Todo 1",
  user: {
    name: "ali"
  }
};
```

Instead of writing this:

```javascript
const id = todo.id;
const title = todo.title;
const name = todo.user.name;
```

You can write it shorter:

```javascript
const { id: todoId, title, user: { name } } = todo;
```

---

## Note on Object Destructuring

```javascript
const todo = {
  id: 1,
  title: "Todo 1",
  user: {
    name: "ali"
  }
};

const { id } = todo;

console.log(id);   // 1
console.log({ id }); // { id: 1 }
```

### Why `{}` in `console.log({ id })`?

When you write `{ id }` inside `console.log()`,
you’re creating a **new object** whose **key** is the variable name (`id`)
and whose **value** is the value stored in that variable (`1`).

✅ **Result:** `{ id: 1 }`

---

## Destructuring Arrays

For **arrays**, the **order** of elements matters.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;
```

### Output

```javascript
console.log(first, second, rest);
// 10 20 [30, 40, 50]
```

* `first = 10`
* `second = 20`
* `rest = [30, 40, 50]`

---

## The Rest Operator (`...`)

The `...` syntax (called the **rest operator**) means:

> “There’s something left from the array (or object) that I haven’t assigned yet — collect it all and store it in a new variable.”

Example:

```javascript
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log(rest); // [30, 40, 50]
```
