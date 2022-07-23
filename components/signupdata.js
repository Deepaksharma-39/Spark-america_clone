let signupForm=()=>{
    return `<form id="form1">
    <p id="heading">Welcome to SparkAmerica!</p>
<p id="subheading">We need to get to know you and you'll be on your way in no time.</p>
    <p id="allfields">All fields required.</p>
    <input type="email" id="email" class="inputBox" > <br>
    <input type="password" id="password" placeholder="Enter Password" class="inputBox">
    <input type="password" id="rePassword" placeholder="Enter Password Again" class="inputBox" ><br>
    <input type="text" id="firstName" placeholder="First Name" class="inputBox">
    <input type="text" id="lastName" placeholder="Last Name" class="inputBox" ><br>
    
    <input type="date" id="dob" " class="inputBox" ><br>
    <input type="text" maxlength="6" placeholder="Zip code" id="zipCode" class="inputBox"><br>
    <p>Create a username that will be displayed publicly on leaderboards. This can be fun and must be unique, so try adding some numbers to the end if your first choice is already taken. </p>
    <input type="text" id="username" placeholder="Username" class="inputBox">
    <P>Select the city closest to you to participate in city challenges (optional).</P>
    <input type="checkbox" id="checkbox1">
    <label for="checkbox1">I have read and agree to PeopleOne's <a href="https://portal.peopleonehealth.com/HealthyLiving/Article/1463" target="_blank">Terms of Use.</a></label>
    <br>
    <input type="checkbox" id="checkbox2">
    <label for="checkbox2">I have read and agree to PeopleOne's <a href="https://portal.peopleonehealth.com/HealthyLiving/Article/1464" target="_blank">Privacy Policy.</a></label>
    <div>
        <button >GO BACK</button>
        <button id="signupButton">Create Account</button>
    </div>
</form>`
}
export default signupForm;