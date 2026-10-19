const H=document.createElement("h2");

const p=document.createElement("p");

const B=document.createElement("button");
// const C=document.createElement("button");
H.classList.add("text-info");
H.textContent="Sub Heading";
p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque";
          
         


B.classList.add("btn","btn-primary");
B.innerText="Submit";
// C.classList.add("btn","btn-primary","ms-3");
// C.innerText="Login";
const div=document.getElementById("task1");
div.appendChild(H);
div.appendChild(p);
div.appendChild(B);
// div.appendChild(C);


H.append("Welcome");

console.log(H.innerText);
H.remove();


