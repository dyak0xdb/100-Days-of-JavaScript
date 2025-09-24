# Challenge 2 (Review):
You need to create a simple calculator that:

1. Takes two numbers (num1 and num2) and an operator (operator).
2. Performs the correct calculation based on the operator `(+, -, *, /)`.
3. Displays the result with the label "Result: ".
4. If the operator is invalid, shows the message "Invalid operator!".

<details>
  <summary>Click to view solution</summary>

  
```js
let num1 = 10;
let num2 = 5;
let operator = "*";

switch (operator) {
    case "+":
    console.log(`result: ${num1 + num2}`)
    break;
    
    case "-":
        console.log(`result: ${num1 - num2}`)
    break;

    case "*":
        console.log(`result: ${num1 * num2}`)
    break;

    case "/":
        console.log(`result: ${num1 / num2}`);
    break;

    default: console.log("The operator is invalid.")
}

```
