
           class Users {
           
   
           constructor(firstName, lastName, zipCode) {
               this.firstName = firstName;
               this.lastName = lastName;
               this.zipCode = zipCode;
               //console.log(Mobile)
           }
   
           signUp(password, matchPassword, username) {
               let IsValidated = false;
            //    IsValidated = this.#IsValidateName(email) && this.#IsValidatePassword(password, matchPassword);
               // if (IsValidated === true) {
               //     let FliterData = Data.filter((ele) => {
               //         return ele.email == email;
               //     });
               //     if (FliterData.length > 0) {
               //         alert("Allready registered");
               //         window.location.href = "login.html";
               //     }
                   // else {
                       this.email = localStorage.getItem("emailData")
                       this.password = password;
                       this.username=username
                       alert(`${this.username} Registerd Successfully`);
                      
                       console.log(this)
                       let data=JSON.parse(localStorage.getItem("signupData"))||[]
                       data.push(this);
                       console.log(data);
                       localStorage.setItem("signupData",JSON.stringify(data));
                       window.location.href="./dist/verify.html"
   
                       // window.location.href = "dashboard.html";
                   // }
               // } else {
               //     alert("Please fill correct details");
               // }
           }
   
        //    #IsValidateName(name) {
        //        return name.length < 3 ? false : true;
        //    }
        //    #IsValidateEmail(email) {
        //        return email.length < 3 ? false : true;
        //    }
        //    #IsValidatePassword(password, matchPassword) {
        //        return password === matchPassword;
        //    }
       }

      
       
       function saveData(){
        event.preventDefault()
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        
        let password = document.getElementById("password").value;
        let matchPassword = document.getElementById("rePassword").value;
        let username = document.getElementById("username").value;
        let zipCode=document.querySelector("#zipCode").value;
        //console.log(Mobile)
    
        let signupData = new Users(firstName, lastName, zipCode);
        signupData.signUp(email, password, matchPassword, username);
      
       }
   
    