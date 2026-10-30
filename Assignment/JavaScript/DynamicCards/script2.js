const container1=document.getElementById("studentContainer");

function profile(name,course,status){
    const card=document.createElement("div");
    card.classList.add("student-card","bg-danger");

    const nameh3=document.createElement("h3");
    nameh3.textContent="Name:"+name;
    const coursep=document.createElement("p");
    coursep.textContent="Course:"+course;

    const statusp=document.createElement("p");
    statusp.textContent="Status:"+status;
    card.append(nameh3,coursep,statusp);
    container1.append(card);
}
profile(
    "Abhishek",
    "Web Development",
    "Running"
);
profile(
    "Dheeraj",
    "Web Development",
    "Running"
);
profile(
    "Aman",
    "Java",
    "Running"
);