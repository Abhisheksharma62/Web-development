const ar1=[2,1,4,3];
var ar2=[3,4,5,6];

console.log(ar1);
console.log(ar2);

ar1[0]=20;
ar2=[2,3,4,5];
console.log(ar1);
console.log(ar2);

ar1[3]=30;
ar2=10;
console.log(ar1);
console.log(ar2);


// const ar1=[1,2,3,4,5];
// var size=ar1.length;
// var st=0,end=size-1;
// while(st<end)
// {
//     var temp=ar1[st];
//     ar1[st]=ar1[end];
//     ar1[end]=temp;
//     st++;
//     end--;
// }
// for(var i=0;i<size;i++)
// {
// console.log(ar1[i]);
// }

const arr=['Apple',"Orange"];
for(var i=0;i<2;i++)
{
console.log(arr[i]);
// console.log(arr.at(-1));
}
arr.push("Banana");
console.log(arr);
arr.pop();
console.log(arr);



const fruits = ["Apple", "Banana", "Mango", "Orange"];

const selectedFruits = fruits.slice(1, 3);

console.log(selectedFruits);
// console.log(fruits);

const name="Abhishek kumar";

console.log(name);
let y=name.split(" ");
console.log(y);


// ar2.shift();
// console.log(ar2);
const arr3=["orange","mango",20]
arr3.forEach(element => {
    console.log(element);
});
