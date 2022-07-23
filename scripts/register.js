

import signupForm from "../components/signupdata.js";
import verifyPageContent from "../components/verifyPage.js";


class Users {
           
   #password; #matchPassword
    constructor(email) {
        this.email = email;
    }

    signUp(password, matchPassword,firstName,lastName,dob, zipCode,username) {
        let IsValidated = false;
        
        this.#password=password;
        this.#matchPassword=matchPassword;
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;
        this.zipCode=zipCode;
        this.username=username;

        let data=JSON.parse(localStorage.getItem("signupData"))||[]
                //  
        data.push(this);
        console.log(data);
                 // 
                       
        localStorage.setItem("signupData",JSON.stringify(data));
    }
    login(){
        
    }
}
document.querySelector("#continueButton").addEventListener("click",enterInfoFunc);

let user;
function enterInfoFunc(){
    event.preventDefault();
    let emailData=JSON.parse(localStorage.getItem("signupData"))||[];
    let email=document.querySelector("#email-id").value
    let flag=false;
    emailData.forEach((el)=>{
        if(el.email==email){
            // what if email is already registered
            flag=true;
        }
    })

    if(flag==true){
        // go to login page
        alert("already registered")
        window.location.href="./login.html"
    }else{
        user=new Users(email);
            console.log(user);
            let signupData=JSON.parse(localStorage.getItem("signupData"))||[];
            signupData.push(user);

        signupData=JSON.stringify(signupData);
        localStorage.setItem("signupData",signupData)
        document.querySelector("#form-div").innerHTML=signupForm();
        
        document.querySelector("#email").value=user.email;
            document.querySelector("#signupButton").addEventListener("click",saveData)
            


   
    }

}
function saveData(){
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob=document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let matchPassword = document.getElementById("rePassword").value;
    let username = document.getElementById("username").value;
    let zipCode=document.querySelector("#zipCode").value;

    let checkbox1=document.querySelector("#checkbox1");
    let checkbox2=document.querySelector("#checkbox2");
    
        
        user.signUp(password, matchPassword,firstName,lastName,dob, zipCode,username)
        console.log(user)
        
        let signupData=JSON.parse(localStorage.getItem("signupData"))||[];

        signupData.push(user);
        console.log(signupData)
        document.querySelector("#form-div").innerHTML=verifyPageContent();
        document.querySelector("#verify-later").addEventListener("click",login)
   }

   function login(event){
    event.preventDefault();
    user=JSON.stringify(user)
    localStorage.setItem("loginData",user)
    window.location.href="./dashboard.html"
   }