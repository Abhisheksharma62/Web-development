const headingText=document.getElementById("heading").innerText;
const paraText=document.getElementById("studentMessage").textContent;
const btnlabel=document.getElementById("courseButton").innerHTML;
console.log(headingText);
console.log(paraText);
console.log(btnlabel);

// const body=document.querySelector("body");

// console.log(body);
 
console.log(headingText.innerHTML);
console.log(paraText.innerText);
console.log(btnlabel.textContent);

headingText.innerText="Abhi";
headingText.innerHTML="Raj";
headingText.textContent="Ram";

function UpdateMyname(){
    const myName=document.getElementById("myName").value.trim();
    paraText.innerText="Welcome to your learning portal!! "+myName;
}


