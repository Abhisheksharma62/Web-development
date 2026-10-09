sum(3,4)

function sum(a,b) {
    let c=a+b;
    console.log(c);
}
sum(5,10);

function sum_with_d(x,y=10){
    console.log(x+y);
}
sum_with_d(7);
sum_with_d(8,20);

function calculate(a,b,c) {
    return a+b-c;
}
let answer= calculate(5,6,7);
console.log(answer);