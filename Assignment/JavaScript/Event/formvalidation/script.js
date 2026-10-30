function login(){
    const nm=document.getElementById("userName").value.trim();
    const ps=document.getElementById("password").value;


    console.log(nm,ps);
}

const loginForm=document.getElementById("loginForm");
// const loginFormDataJSON={};
loginForm.addEventListener("submit",(e) =>{
e.preventDefault();
console.log("form submitted");

const loginFormData=new FormData(loginForm);

const UN=loginFormData.get("userName");
const PS=loginFormData.get("password");

console.log(UN,PS);
// loginFormData.forEach((value,key)=> console.log(key,":",value));
// loginFormData.forEach((key,value)=> (loginFormDataJSON[key] = value));
// console.log(loginFormDataJSON);
});


