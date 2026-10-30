const container=document.getElementById("courseContainer");

function creatCourse(title,Description,duration)
{
const card=document.createElement("div");
card.classList.add("course-card","bg-danger");

const heading=document.createElement("h2");
heading.textContent=title;
const para=document.createElement("p");
para.textContent=Description;
const time=document.createElement("p");
time.textContent=duration;
card.append(heading,para,time);
container.append(card);
}

creatCourse(
    "HTML Fundamentals",
    "Learn HTML",
    "Duration:12 days"
);
creatCourse(
    "JavaScript Essentials",
    "Learn JavaScript basics  ",
    "Duration:30 days"
);
creatCourse(
    "React Development",
    "Learn React components and frontend development ",
    "Duration:40 days"
);

