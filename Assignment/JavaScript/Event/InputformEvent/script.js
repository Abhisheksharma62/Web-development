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

const form=document.getElementById("registration");
const message=document.getElementById("message");

form.addEventListener("submit",function(event){
    event.preventDefault();
    message.textContent="Enrollment form submitted."
})
