const loginform=document.getElementById("courseEnquiryForm");

loginform.addEventListener("submit",(e)=>{
    e.preventDefault();

    const loginformdata=new FormData(loginform);
    loginformdata.get("fullName");
    loginformdata.get("email");
    loginformdata.get("phoneNumber");
    loginformdata.get("course");

    for(const [key,value] of loginformdata.entries()){
        console.log(key,value);
    }
});