const course={
    courseName:"WebDevelopment",
    duraiton:"4 Months",
    fees:12000,
    mode:"Offline",
};
console.log("Before ",course);

course.fees=13000;

course.instructor="Raj Sir";

const newProperty1="name";
course[newProperty1]="Abhishek";


delete course.mode;
delete course["fees"];

console.log(course);
console.log("After:",course);

console.log(course.mode);