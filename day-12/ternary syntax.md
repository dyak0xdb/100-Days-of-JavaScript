
### syntax:
```
(condition) ? expression1 : expression2
```


```javascript
let age = 19;

if (age >= 18) {
    console.log('u can...');
} else {
    console.log('u not can');
}
````

### Converted to Ternary Operator

```javascript
(age >= 18)
  ? console.log('u can...')
  : console.log('u cannot');
```

---

### Even Cleaner (Recommended)

Instead of repeating `console.log` in both branches:

```javascript
console.log(age >= 18 ? 'u can...' : 'u cannot');
```
