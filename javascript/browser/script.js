const form=document.getElementById("form");
form.addEventListener("submit",()=>{
//   const name=form.value;
  const formlogin=new FormData(form);

  const userName=formlogin.get("fullName");
  console.log(userName);
//   let isValid=true;
//   for(var i=0;i<userName.length;i++)
//   {
// if(userName.charAt(i)>='A' && userName.charAt(i)<='Z'||
//  userName.charAt(i)>='a'&& userName.charAt(i)<='z'||
//   userName.charAt(i)==="") 
//  {
//     isValid=true;
    
// }
// else{
//     isValid=false;
//     break
// }

//   }
//   console.log(isValid? "valid":"Invalid");

//   if(/^[A-Za-z]+$/.test(userName)){
//     console.log("valid");
//   } else{
//     console.log("Invalid");
//   }
  console.log(/^[A-Za-z]+$/.test(userName)?"valid":"Invalid");
});