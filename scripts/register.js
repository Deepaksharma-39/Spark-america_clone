let checkDatabox=()=>{
let data=JSON.parse(localStorage.getItem("data"))||[];
let inputEmail=document.querySelector("#email-id").value;
let flag=false;
let filter=data.filter((el)=>{
return el==inputEmail;
})
if(filter.length>0){
    alert("email already exists")
}else{
    flag=true;
}
console.log(flag)
if(flag===true){
    data.push(inputEmail);
    localStorage.setItem("data",JSON.stringify(data));
    console.log(data)
    window.location.href="./dist/register1.html"
}


}
