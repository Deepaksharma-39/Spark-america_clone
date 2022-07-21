
   
   
   
       const signup=(event)=>{
           
           event.preventDefault();
           class Users {
           
   
           constructor(firstName, lastName, zipCode) {
               this.firstName = firstName;
               this.lastName = lastName;
               this.zipCode = zipCode;
               //console.log(Mobile)
           }
   
           signUp(email, password, matchPassword, username) {
               let IsValidated = false;
               IsValidated = this.#IsValidateName(name) && this.#IsValidatePassword(password, MatchPassword);
               // if (IsValidated === true) {
               //     let FliterData = Data.filter((ele) => {
               //         return ele.email == email;
               //     });
               //     if (FliterData.length > 0) {
               //         alert("Allready registered");
               //         window.location.href = "login.html";
               //     }
                   // else {
                       this.firstName = firstName;
                       this.lastName = lastName;
                       this.email = email;
                       this.password = password;
                       alert(`${this.username} Registerd Successfully`);
                      
                       console.log(this)
                       let data=JSON.parse(localStorage.getItem("signupData"))||[]
                       data.push(this);
                       console.log(data);
                       localStorage.setItem("signupData",JSON.stringify(data));
   
                       // window.location.href = "dashboard.html";
                   // }
               // } else {
               //     alert("Please fill correct details");
               // }
           }
   
           #IsValidateName(name) {
               return name.length < 3 ? false : true;
           }
           #IsValidateEmail(email) {
               return email.length < 3 ? false : true;
           }
           #IsValidatePassword(password, matchPassword) {
               return password === matchPassword;
           }
       }

      
   
      
   
   
   
       let firstName = document.getElementById("firstName").value;
       let lastName = document.getElementById("lastName").value;
       let email = document.getElementById("email").value;
       let password = document.getElementById("password").value;
       let matchPassword = document.getElementById("rePassword").value;
       let username = document.getElementById("username").value;
       let zipCode=document.querySelector("#zipCode").value;
       //console.log(Mobile)
   
       let obj = new Users(firstName, lastName, zipCode);
       obj.signUp(email, password, matchPassword, username);
       }
   
       export {signup};