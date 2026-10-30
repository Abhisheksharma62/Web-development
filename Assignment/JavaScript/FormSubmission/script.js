const form=document.getElementById("studentForm");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submitted");

    const fullName=document.getElementById("fullName").value;
    const email=document.getElementById("email").value;
    const course=document.getElementById("course").value;
     
    console.log("FullName:"+fullName);
    console.log("Email:"+email);
    console.log("Course:"+course);
});
