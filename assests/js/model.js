let login_logo=document.getElementById("log")

if(localStorage.getItem("profile")){
    login_logo.style.display="none"
    login_title.style.display="none"
    console.log("success")
}
else{
    profile_logo.style.display="none"
    

}


let cart_data_view=document.getElementById("cart")

cart_data_view.addEventListener("click",e=>{
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

