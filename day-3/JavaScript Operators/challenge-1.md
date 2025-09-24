# Challenge 1: Calculate and Compare Discount (Beginner)

Description:
Imagine you have an online store. A variable price is defined as the original price of a product, and another variable discount represents the discount percentage. We want to calculate the final price after applying the discount and check whether the final price is less than 50 units of currency.
If it’s less than 50, show the message: "This product is at a great discount!"
Otherwise, show the message: "The price is still high!"


<details>
  <summary>Click to view solution</summary>

```js
let price = 100;
let discount = 20;

let result_discount = price - (price * (discount / 100)); // 100 - (100 * (20 / 100)) = 80

console.log("last price: " + result_discount); // 80

if (result_discount < 50){
    console.log("This product is at a great discount!") 
}else{
    console.log("The price is still high!");
}
