const form=document.getElementById("form");
form.addEventListener("submit",()=>{
    const loginformdata=new FormData(form);
   const UserName= loginformdata.get("name");
    const UserEmail=loginformdata.get("email");
    const UserNumber=loginformdata.get("number");
//     if(/^[A-Za-z0-9]{4,10}$/.test(UserName)){
// console.log("valid userName");

//     }else{

//     }
console.log(/^[A-Za-z0-9]{4,10}$/.test(UserName)?"valid username":"Invalid username");
console.log(/^[^\s@]+@[^\s@]+[^\s@]+$/.test(UserEmail)?"valid email":"Invalid email");
console.log(/^\d{10}$/.test(UserNumber)?"valid Number":"Invalid Number");
})