const button=document.getElementById("submit");
const ageInput=document.getElementById("age");
button.addEventListener("click",function(){
const age=Number(ageInput.value);
if(age>=16 && age<=60)
{
    console.log("valid age:");
}
else{
    console.log("invalid age:");
}
});
const quantity=document.getElementById("quantity");
const status=document.getElementById("status");

quantity.addEventListener("input" ,()=>{
if(quantity.checkValidity()){
    status.textContent="valid Quantity";
}
else{
      status.textContent="Quantity must be between 1 and 10";

}
quantity.reportValidity();
});

const userName=document.getElementById("userName");
userName.addEventListener("input",()=>{
    const length=userName.value.length;
    if(length>=3 && length<=10){
        console.log("Valid Username");
    }
    else{
         console.log("Invalid Username");
    }
})