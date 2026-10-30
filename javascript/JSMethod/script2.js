const student=[
    {
    name:"Abhi",
    age:28,
    gender:"male",
   marks:78,
    projects:[{projectName:"abacdab",timeline:5,role:"xyz"}],

},
 {
    name:"Dheeraj",
    age:24,
    gender:"male",
   marks:80,
    projects:[{projectName:"abacd",timeline:2,role:"xyz"},
        {projectName:"def",timeline:4,role:"prq"},
    ],

},
 {
    name:"Aman",
    age:29,
    gender:"male",
    marks:76,
    projects:[{projectName:"abacd",timeline:4,role:"yxz"}],

},
]
// console.log(student[1].marks);
// console.log(student[2].projects[0]);
// student[2].projects[0].timeline=5;
// student[1].marks=99;
// console.log(student[1]);
// delete student[0].name;
// console.log(student[0]);
student[1].projects[1].projectName="Chartbot";
console.log(student[1]);


