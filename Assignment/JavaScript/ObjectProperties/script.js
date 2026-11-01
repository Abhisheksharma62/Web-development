 const student={
    name:"Abhishek",//key,value
    age:22,
    course:"Web Development",
    isEnrolled:true,
    "student name":"Abhishek Kumar"

}
console.log(student.name);
console.log(student.course);
console.log(student["age"]);
console.log(student["isEnrolled"]);
console.log(student["student name"]);

let selectedProperty="name";
console.log(student[selectedProperty]);



