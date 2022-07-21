let verifyPageContent=()=>{
    return `<form id="form">
    <p id="thanks"></p>
    <p>We've sent you an email containing a verification link.
        Simply open the email and click the link to complete setup. </p>
        <p>Didn't receive the email? </p>
        <p>Wait a few minutes and be sure to check your Spam folder. <br> Still nothing?</p>
        <button>CLICK TO RESEND</button>
        <button id="verify-later">Verify later</button>
</form>`
}
export default verifyPageContent;