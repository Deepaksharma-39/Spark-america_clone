

document.querySelector("#continueButton").addEventListener("click",checkDatabox)

function checkDatabox(event){
    event.preventDefault()
let signupData=JSON.parse(localStorage.getItem("signupData"))||[];
let inputEmail=document.querySelector("#email-id").value;
let flag=false;
let filter=signupData.filter((el)=>{
return el.email==inputEmail;
})
if(filter.length>0){
    alert("email already exists")
}else{
    flag=true;
}
console.log(flag)
if(flag===true){
    let emailData=inputEmail;
    localStorage.setItem("emailData",emailData);
    console.log(emailData)
    window.location.href="./dist/register1.html"
   ;
    
}


}
