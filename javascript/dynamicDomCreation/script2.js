const ar=[
    "Abhi",
    "Dheeraj",
    "Aman",
    "Sachin"
];

const List=document.createElement("ol");

ar.forEach((item) => {
    const L=document.createElement("li");
    L.textContent=item;
    List.appendChild(L); 
});

document.getElementById("myList").appendChild(List);


