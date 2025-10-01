# Advanced Exercise (Challenging)

**Scenario:**
We have two loops: an outer loop (i) and an inner loop (j).  
- The outer loop `i` goes from 1 to 5.  
- The inner loop `j` goes from 1 to 5.  
- If the sum of `i+j` is 5, skip this round of the inner loop (`continue`).  
- If `i*j` is 6, skip the entire inner loop (`fail`).  
- In each round where the conditions are not met, print: "i = X, j = Y"

<details>
<summary>Click to view solution</summary>

```javascript
for(let i = 1 ; i <= 5 ; i++ ){
    console.log(`Outer loop i = ${i}`);

    for(let j =  1; j <= 5 ; j++ ){
        if( i == j ) continue;
        else if(i * j) break;

        console.log(`Inner loop j = ${j}`);
    }
}
