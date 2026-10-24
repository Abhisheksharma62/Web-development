let age = 20;
let hasId = true;
let isStudent = true;
let hasPass = false;

// AND (&&) 
console.log(age >= 18 && hasId);

// OR (||) 
console.log(isStudent || hasPass);

// NOT (!) 
console.log(!hasPass);


// second question

let number = 5;

//  Increase value using ++
number++;
console.log("After increment:", number); // 6

//  Increase value multiple times
number++;
number++;
console.log("After multiple increments:", number); // 8

//  Pre-increment (++number)
console.log("Pre-increment:", ++number); // 9

//  Post-increment (number++)
console.log("Post-increment:", number++); // 9
console.log("After post-increment:", number); // 10


//  Decrease value using 
let num = 10;
num--;
console.log("After decrement:", num); // 9

//  Decrease value multiple times
num--;
num--;
console.log("After multiple decrements:", num); // 7

// Pre-decrement (--num)
console.log("Pre-decrement:", --num); // 6

//  Post-decrement (num--)
console.log("Post-decrement:", num--); // 6
console.log("After post-decrement:", num); // 5
