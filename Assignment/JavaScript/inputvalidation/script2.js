const form=document.getElementById("scoreForm");
const button1=document.getElementById("submit1");
button1.addEventListener("click",()=>{
    const result=form.checkValidity();
  console.log(result);
});