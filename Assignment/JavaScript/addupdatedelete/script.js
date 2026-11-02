const student={
    name:"Abhishek",
    age:21,

};
student.course="WebDevelopment";

student["city"]="Siwan";//add

const newProperty="Branch";//add
student[newProperty]="AIDS";

student["age"]=24;//update
student.course="Java";//update
console.log(student);
