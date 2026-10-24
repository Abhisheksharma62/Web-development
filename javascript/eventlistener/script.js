const showAssBtn=document.getElementById("showAssignmentNotification");
const showAttBtn=document.getElementById("showAttendenceNotification");
const stopAssBtn=document.getElementById("stopAssignmentNotification");

const assPara=document.getElementById("AssignmentNotification");
const attPara=document.getElementById("AttendenceNotification");

function ShowAssingment(){
    assPara.textContent="Your assignment deadline is approaching!";
}
showAssBtn.addEventListener("click",ShowAssingment);

showAttBtn.addEventListener("click",()=>{
    attPara.textContent="Please check your attendence status!";
});

stopAssBtn.addEventListener("click",()=>{

    // showAssBtn.removeEventListener("click",ShowAssingment);

    assPara.textContent="Your assignment Notification is Stopped";
    attPara.textContent="Your attendence stopped";
});

const parent=document.getElementById("outer");


