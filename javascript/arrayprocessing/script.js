const arry=["Apple",2.5,99,"Himachal","a"];
console.log("With for Each");
arry.forEach(element => {
    if(typeof element === "number"){
        console.log(element);
    }
})

const ar2=["Apple",2.5,99,"Himachal","a"];
var f=ar2.filter((item)=>
 
    item!==99
);
console.log("f=",f);

var f1=ar2.find((item)=> item===99);
console.log("f1=",f1);
var fix=ar2.findIndex((item)=> item===99);
console.log("fix=",fix);

const arr3=[2,5,3,4,1];
var s=arr3.sort((a,b)=>b-a);
console.log("s=",s);

