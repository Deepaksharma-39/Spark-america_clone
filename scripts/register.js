import { signupDatafunc } from "../components/signupData.js";
import {signup} from "./signup.js";

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
    document.querySelector("#form-div").innerHTML=signupDatafunc();;
    document.querySelector("#signupButton").addEventListener("click",function(){
        signup();
    });
    
}


}
