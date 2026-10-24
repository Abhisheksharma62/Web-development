// question 1

let age = 20;

// Check Adult or Minor
let result = age >= 18 ? "Adult" : "Minor";
console.log("Age Result:", result);

// Check Even or Odd
let number = 7;
let answer = number % 2 === 0 ? "Even" : "Odd";
console.log("Number Result:", answer);


// question 2

 // 1. Addition and multiplication
let result1 = 11+ 4 * 2;
console.log("Addition and Multiplication:", result1);

// 2. Subtraction and division
let result2 = 30- 6 / 2;
console.log("Subtraction and Division:", result2);

// 3. Parentheses change calculation order
let result3 = (12 + 4) * 4;
console.log("Using Parentheses:", result3);

// 4. Price, quantity and discount
let price = 200;
let quantity = 3;
let discount = 20;

let total = (price * quantity) - ((price * quantity) * discount / 100);
console.log("Total Price after Discount:", total);
