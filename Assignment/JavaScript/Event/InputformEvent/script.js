const studentName=document.getElementById("studentName");
const name=document.getElementById("name");
const courseName=document.getElementById("courseName");
const course=document.getElementById("course");

studentName.addEventListener("input",function(){
name.textContent=studentName.value;
});

courseName.addEventListener("input", function(){
    course.textContent=courseName.value;
});