# New challenge: printing stars in the shape of triangles

Problem:
Now that you have the sum of odd numbers, write a program that uses a for loop to print a triangle of asterisks (*) to the console. The triangle should have 5 rows, with each row having one more asterisk than the previous row. For example:

```js
*
**
***
****
*****
```

<details>
  <summary>Click to view solution</summary>

 ```js
let ads = "";

for (let i = 1; i <= 5; i++) {
    ads = "*".repeat(i);
    console.log(ads);
}
  
