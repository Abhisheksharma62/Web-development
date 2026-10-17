 let text=document.querySelector("h1").innerText;

 console.log(text + " Abhi");

 function submit(){
    console.log("Submit Button Clicked")

    const nm=document.querySelector("#fullName").value.trim();
     const pm=document.getElementById("Phone").value.trim();
    const em=document.querySelector("#email").value.trim();
    console.log("Full Name:",nm);
    console.log("Email:",em);
     console.log("Phone:",pm);
 }