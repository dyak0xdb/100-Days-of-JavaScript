# New challenge: Adding odd numbers

Now that you have printed the even numbers, write a program that uses a for loop to calculate the sum of the odd numbers between 1 and 20 (i.e. 1 + 3 + 5 + ... + 19). Finally, just print the final sum to the console (e.g. console.log(sum)).


<details>
  <summary>Click to view solution</summary>

  ```js
let sum = 0

for(let i = 1 ; i <= 20 ; i++){
    if( i % 2 !== 0){
        sum += i;
        console.log(sum);    
    }
}
```
