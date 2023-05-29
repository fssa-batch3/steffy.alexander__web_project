 login_logo = document.getElementById("log"); //
profile_logo = document.getElementById("profile_logo");
login_titles = document.getElementById("login_title");
if (localStorage.getItem("profile")) {
  login_logo.style.display = "none";
  if(login_titles){
    login_titles.style.display = "none";

  }
  console.log("success");
} else {
  profile_logo.style.display = "none";
}

const cart_data_view = document.getElementById("cart");

cart_data_view.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("profile")) {
    window.location.href = "./cart.html";
    console.log("already signed");
  } else {
    window.location.href = "signup.html";
    console.log("");
  }
});
