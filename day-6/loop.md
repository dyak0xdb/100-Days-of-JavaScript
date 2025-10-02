# JavaScript Loops Guide

Loops are used to execute a block of code multiple times. They are very useful when you want to run the same code repeatedly with different values.

## Syntax for `for` loop
```javascript
for (initialization; condition; finalExpression) {
  // body
}
```

### Example loop:
```javascript
for(let i = 0; i < 5; i++){
    console.log(i);      
} 
// Result: 0 1 2 3 4
```

### Parts of a `for` loop

**Initialization:**
```javascript
let i = 0;
```
- Creates a variable, usually named `i`. You can use any name.

**Condition:**
```javascript
i < 5;
```
- Checked before each loop iteration.
- If true → the loop runs.
- If false → the loop ends.

**Final Expression:**
```javascript
i++;
```
- Executed after each iteration.
- Updates the variable for the next round.

### Step by step execution:
1. Start: `i = 0` → Check: `0 < 5 ✅` → Print: `0` → `i++ → i = 1`
2. Second round: `i = 1` → Check: `1 < 5 ✅` → Print: `1` → `i = 2`
3. Third round: `i = 2` → Check: `2 < 5 ✅` → Print: `2` → `i = 3`
4. Fourth round: `i = 3` → Check: `3 < 5 ✅` → Print: `3` → `i = 4`
5. Fifth round: `i = 4` → Check: `4 < 5 ✅` → Print: `4` → `i = 5`
6. Sixth round: `i = 5` → Check: `5 < 5 ❌` → Loop stops

---

## When to use `++` or `--`
- `i++` → increase `i` by 1
- `i--` → decrease `i` by 1

💡 Mental note:
- `<` → going up → use `++`
- `>` → going down → use `--`

---

## `break` and `continue`

**`break`** stops the loop completely:
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 6) break; // stop at 6
  console.log(i);
}
// Output: 1 2 3 4 5
```

**`continue`** skips the current iteration:
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; 
  console.log(i);
}
// Output: 1 2 4 5
```

### Combined example
```javascript
for(i = 1 ; i <= 10 ; i++){
    if(i === 4 || i === 7) continue;
    else if(i === 9) break;
    console.log(i);
}
// Output: 1 2 3 5 6 8
```

---

## Multivariable `for` loop example
```javascript
for (let a = 2, b = 20; a < b; a += 3, b -= 4) {
  console.log(a, b);
}
```

### Step-by-step execution:
1. **First round:**
   - Before print: `a = 2`, `b = 20`
   - Condition: `2 < 20 ✅` → print: `2 20`
   - After print: `a = 5`, `b = 16`

2. **Second round:**
   - Before print: `a = 5`, `b = 16`
   - Condition: `5 < 16 ✅` → print: `5 16`
   - After print: `a = 8`, `b = 12`

3. **Third round:**
   - Before print: `a = 8`, `b = 12`
   - Condition: `8 < 12 ✅` → print: `8 12`
   - After print: `a = 11`, `b = 8`

4. **Fourth round:**
   - Condition: `11 < 8 ❌` → loop stops
   - Nothing is printed

💡 Key point:
- The `finalExpression` (`a += 3, b -= 4`) runs **after the loop body** each round and affects the next round.
- The loop stops only when the **condition becomes false**.

# Nested Loops Explanation

## Example 1

```javascript
for (let i = 1; i <= 3; i++) {       // outer
  for (let j = 1; j <= 3; j++) {     // inner
    console.log(i, j);
  }
}
```

### How to Detect These Loops? (A Simple Method)

💡 **Mental Note:**

1. **Outer Loop Analysis**  
   - Outer loop: `let i = 1; i <= 3`  
   - `i = 1, 2, 3` → **3 rounds** ✅

2. **Inner Loop Analysis**  
   - Inner loop: `let j = 1; j <= 3`  
   - `j = 1, 2, 3` → **3 rounds** ✅

3. **Calculate Total Rounds**  
   - Outer rounds × Inner rounds = `3 × 3 = 9` total rounds

4. **Execution Order**  
   ```
   1 1
   1 2
   1 3
   2 1
   2 2
   2 3
   3 1
   3 2
   3 3
   ```

---

## Example 2

```javascript
for (let i = 1; i <= 4; i++) {       // outer
  for (let j = 1; j <= 3; j++) {     // inner
    console.log(i, j);
  }
}
```

### How to Detect

- **Outer Loop**: `4` rounds  
- **Inner Loop**: `3` rounds  
- **Total Rounds**: `4 * 3 = 12`

**Execution Order**  
```
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
4 1
4 2
4 3
```
```
