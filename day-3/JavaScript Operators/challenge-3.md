# Challenge 3: Stock Checker

**Description:**  

Write a program that:

1. Checks if the **stock** is enough for a customer **order**.
2. If the stock is sufficient (`stock >= order`):
   - Calculate the remaining stock (`stock - order`).
   - Print: `"Remaining stock: X"` (where X is the remaining amount).
3. If the stock is insufficient (`stock < order`):
   - Print: `"Not enough stock!"`.

<details>
 **<summary>Click to view solution</summary>


```js
let stock = 50;
let order = 30;

if(stock >= order){
    console.log("Remaining stock: " + (stock - order));
}else{
    console.log("Not enough inventory!");
   
}
