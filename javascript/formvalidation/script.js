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

const TestFrom = document.getElementById("testform");

const testFromDataJSON = {};
TestFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  const testFromData = new FormData(TestFrom);

  if (testFromData.get("password").length < 8) {
    document.getElementById("passwordError").innerText =
      "Password Must Contain 8 Charcaters";
  }
  if (testFromData.get("password") !== testFromData.get("cfpassword")) {
    document.getElementById("cfPasswordError").innerText = "Password Not Match";
  }

  testFromData.forEach((value, key) => console.log(key, ":", value));

  testFromData.forEach((value, key) => (testFromDataJSON[key] = value));
});

console.log(testFromDataJSON);

const someData = {
  name: "Prince Patel",
  age: "21",
  height: 5.6,
};

const JsonToString = JSON.stringify(someData);

console.log(someData);

console.log(JsonToString);

const StringToJson = JSON.parse(JsonToString);

console.log(StringToJson);

var StdName = "Mansi";
var marks = 99;

console.log("Student with Name", StdName, "Scored", marks);

console.log(`Studnet with Name ${StdName} 
  scored ${marks}`);


