const coursedata = document.getElementById("form1");


coursedata.addEventListener("submit", () => {
  
  const logincourse = new FormData(coursedata);
  const UserCourse = logincourse.get("course");
  if (/^[A-Z]{3}$/.test(UserCourse)) {
    console.log("Valid Course Code");
  } else {
    console.log("Invalid Course Code");
  }
  const UserCourse1=logincourse.get("course1");
  if(/^\d+$/.test(UserCourse1)){
  console.log("Valid digit");
  } else {
    console.log("Invalid digit");

  }
  const UserCourse2=logincourse.get("course2");
  if(/course/i.test(UserCourse2)){
console.log("It contins course");
  } else{
    console.log("It doesn't contain course");
  }
  
});

