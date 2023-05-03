let login_logo=document.getElementById("log")

if(localStorage.getItem("profile")){
    login_logo.style.display="none"
    console.log("success")
}
else{
    profile_logo.style.display="none"

}
// const user_name = localStorage.getItem("profile");
// console.log(user_name);
// if(localStorage.getItem("profile")){
// document.getElementById("user_name").innerText= user_name
  
// }

let cart_data=document.getElementById("cart")

cart_data.addEventListener("click",e=>{
  e.preventDefault()
  if(localStorage.getItem("profile")){
  window.location.href="./pages/cart.html"
  console.log("already signed");
}
else{
  window.location.href="./pages/signup.html"
  console.log("");

}

})

