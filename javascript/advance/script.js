const ob={
    name:"Abhi",
    gender:"male",
    college:"sam",
    year:4,
cgpa:8.2
}
console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

const ar=[10,20,30];
    console.log({...ar});
const{name,year,cgpa}=ob;
console.log(ob.gender);
console.log(year);

const ar2=[24,56,47,21,...ar];
console.log(ar2);
function sum(...n){
    return n.reduce((result=0,num)=>(result+=num));
}

const answer=sum(2,3,4,5,6,7,8,9);
console.log(answer);
