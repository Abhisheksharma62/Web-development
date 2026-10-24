// function ShowAlert(){
//     alert("Click me Button Clicked using HTML Events");
// }

// document.getElementById("clickButton").addEventListener("click",ShowAlert2);

// function ShowAlert2(){
//     alert("Click Me Button using JS Events");
// }

document.getElementById("box").addEventListener("click",()=>{
    document.getElementById("box").innerText="The Box was Clicked";
});
document.getElementById("move").addEventListener("mouseover",()=>{
    document.getElementById("move").innerText="Pointer is over the paragraph!";
});
document.getElementById("move").addEventListener("mouseout",()=>{
    document.getElementById("move").innerText="Move Your Pointer Here";
});
document.getElementById("but").addEventListener("mousedown",()=>{
    document.getElementById("but").innerText="Mouse button pressed!";
});
document.getElementById("but").addEventListener("mouseup",()=>{
    document.getElementById("but").innerText="Mouse button released!";
});

document.getElementById("cli").addEventListener("dblclick",()=>{
    document.getElementById("cli").innerText="You double-clicked this paragraph!";
});
document.getElementById("mouse").addEventListener("mousemove",()=>{
    document.getElementById("mouse").innerText="Mouse pointer is moving over this text!";
});

document.getElementById("nameSubmit").addEventListener("click",()=>{
    console.log(document.getElementById("fullName").value.trim());
    
});
document.getElementById("fullName").addEventListener("keydown",(e)=>{
    e.key==="Enter" &&
    console.log(document.getElementById("fullName").value.trim());
});