const form = document.getElementById("form");
form.addEventListener("submit", () => {
  const loginformdata = new FormData(form);
  const UserName = loginformdata.get("name");
  const UserEmail = loginformdata.get("email");
  const UserNumber = loginformdata.get("number");
  if (/^[A-Za-z0-9]{4,10}$/.test(UserName)) {
    console.log("valid userName");
  } else {
    console.log("Invalid userName");
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(UserEmail)) {
    console.log("valid email");
  } else {
    console.log("Invalid email");
  }
  if (/^\d{10}$/.test(UserNumber)) {
    console.log("valid number");
  } else {
    console.log("Invalid number");
  }
});
